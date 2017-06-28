# The script MUST contain a function named azureml_main
# which is the entry point for this module.

# imports up here can be used to 
import numpy as np
import pandas as pd
import math as mt
import csv
import scipy.sparse as sp
from scipy.sparse.linalg import svds
from scipy.sparse import csc_matrix #used for sparse matrix


# The entry point function can contain up to two input arguments:
#   Param<dataframe1>: a pandas.DataFrame
#   Param<dataframe2>: a pandas.DataFrame

def matrix_factorization(R, P, Q, K, steps=400, alpha=0.0002, beta=0.02):
    lenR =len(R)
    Q = Q.T
    for step in xrange(steps):
        for i in xrange(lenR):
            for j in xrange(len(R[i])):
                if R[i][j] > 0:
                    eij = R[i][j] - np.dot(P[i,:],Q[:,j])
                    for k in xrange(K):
                        P[i][k] = P[i][k] + alpha * (2 * eij * Q[k][j] - beta * P[i][k])
                        Q[k][j] = Q[k][j] + alpha * (2 * eij * P[i][k] - beta * Q[k][j])
       # eR = np.dot(P,Q)
        e = 0
        for i in xrange(lenR):
            for j in xrange(len(R[i])):
                if R[i][j] > 0:
                    e = e + pow(R[i][j] - np.dot(P[i,:],Q[:,j]), 2)
                    for k in xrange(K):
                        e = e + (beta/2) * ( pow(P[i][k],2) + pow(Q[k][j],2) )
        if e < 0.01:
            break
    return P, Q

def FindMSE(n_users,n_movies,URM,X_prod):          
    n=0
    E=0
    SE=0
    for i in range(n_users):
        for j in range(n_movies):
            if URM[i,j]!=0:
                n=n+1
                E=np.square(URM[i,j]-X_prod[i,j])
                SE=E+SE
    MSE=SE/n
    return MSE

def RecommendMovies(X_prod,testing,URM,moviesarray,j,PopularmoviesInd):
    uTest_recommended_items =(-X_prod[testing[j], :]).argsort() #extract the predicted rated movies' indices (max to min) array from a specific user
    uRecoMovies=uTest_recommended_items.tolist() #transform it to a list
    #print(uTest_recommended_items) 
    #get an array of the ratings given to the seen movies of the user to compare with the predicted ratings
    origrate=URM[[testing[j]]].tolist()[0] 
    SeenMoviesInd = np.nonzero(origrate)[0] #find the non zero indices of the original ratings (the seen movies indices)
    FilterSeenInd = [a for a in uRecoMovies if a not in SeenMoviesInd ] #remove the seen movies indices from the predicted ratings
    num=len(moviesarray)-len(FilterSeenInd)
    RecomInd = (FilterSeenInd + [-1] * num) #feel the rest recommended movies with -1 (seen)
    #------------------
    numrecmovies=len(FilterSeenInd)# number of recommded movies
    if (numrecmovies<5):
        
        FilterSeenPopInd = [a for a in PopularmoviesInd if a not in RecomInd] 
        for x in range(5-numrecmovies):    
            RecomInd[x+numrecmovies]=PopularmoviesInd[x]
            
    #print("Seen movies indices: ")
    #print(SeenMoviesInd )
    #print("Filter the seen indices:")
    #print(FilterSeenInd)
    #print("Predicted movies:")
    #print(moviesarray[[int(x) for x in uTest_recommended_items]])
    #print("Seen movies:")
    #print(moviesarray[[int(x) for x in SeenMoviesInd]])
    #print("Filter the seen movies")
    #print(moviesarray[[int(x) for x in FilterSeenInd]])
    return RecomInd

def azureml_main(dataframe1 = None, dataframe2 = None):
    # Execution logic goes here
    #Read data from a dataset
    data=dataframe1
    
    #Get the popular movies by average the rating across all users   
    movie_grouped=data.groupby('movieID').mean().reset_index()
    SortPopularMovies=movie_grouped.sort_values('rate', ascending=False)
    PopularMoviesList = SortPopularMovies['movieID'].tolist()

    #-----------------------------Initialisation-------------------------------------------------
    
    #Number of unique users values
    n_users=len(data['PartitionKey'].unique())
    #Number of unique movie values
    n_movies=len(data['movieID'].unique())
    #Used in SVD calculation (number of latent factors)
    K=25
    #Form the sparse matrix (users X movies) Users Rating Movies (URM) matrix
    ar=data.pivot(index='PartitionKey', columns='movieID', values='rate').fillna(0)
    #print(ar)
    urm=csc_matrix(ar, dtype=np.float32)
    URM=urm.todense()
    #Extract movie titles and sort them in alphabetical order
    moviesarray=data['movieID'].unique()
    moviesarray.sort()
    movies=moviesarray.tolist()
    movies = movies+ ['  '] #add this add the end of the movies names to deal the seen movies for the output dataframe
    #Output columns of the dataframe output
    columnslist=[]
    for p in range(1,(len(moviesarray)+1)):
        columnslist=columnslist +["movieID"+str(p)]

    PopularmoviesInd=[]
    for i in range(len(PopularMoviesList)):
            PopularmoviesInd.append(movies.index(PopularMoviesList[i]))
            
    columnslist=['PartitionKey']+columnslist
    #Extract all usesnames and sort them in alphabetical order
    userarray=np.array(data['PartitionKey'].unique())
    #Define a list of test users to recommend movies to them. Here all users are selected
    testusers=userarray 
    userlist=userarray.tolist()
    #Create a list of the size of the test users to put the test users' indices
    testing=[0]*len(testusers)
    #Holds the recommended movies's indices in descending predicted rating order
    RecomInd=[-1]*n_movies
    #--------------------------------------------------------------------------------------------------
    #Estimate the P and Q matrix values to get the X_prod matrix
    #---------------------------------------------------------------------------
    #MSElist=[]
    R = np.array(URM)
    #for i in range(len(K)):
    #    P = np.random.rand(n_users,K[i])
    #    Q = np.random.rand(n_movies,K[i])
    #    nP, nQ = matrix_factorization(R, P, Q, K[i])
    #    X_prod=np.dot(nP,nQ)
    #    MSE=FindMSE(n_users,n_movies,URM,X_prod)#Find the Mean Square Error for a given K
    #    MSElist.append(MSE) 

    #K_chosen=K[np.argmin(MSElist)]#Find the K that cause the minimum error
    K_chosen=K
    #Find X_prod with the chosen K that produces the minum error
    P = np.random.rand(n_users,K_chosen)
    Q = np.random.rand(n_movies,K_chosen)
    nP, nQ = matrix_factorization(R, P, Q, K_chosen)
    X_prod=np.dot(nP,nQ)
    #---------------------------------------------------------------------------
        
    #Created the output dataframe with the recommended movies
    for i in range(len(testusers)):
        testing[i]=userlist.index(testusers[i]) #return the test users' indices 
         
    for j in range(len(testing)):
        #print("User id for whom recommendations are needed: %d" % testing[j])
        #print(userarray[j])
        #print("Predicted movies indices:")
        RecomInd=RecommendMovies(X_prod,testing,URM,moviesarray,j,PopularmoviesInd)
        #create the output Dataframe to show unseen recommended movies from each test user.
        
        #Forming the dataframe output
#-------------------------------------------------------
        appendlist=[]
        movies2=np.array(movies)
        moviesAr=movies2[[int(x) for x in RecomInd]]
        movielist=moviesAr.tolist()
        appendlist=[userarray[testing[j]]] + movielist

        datavalues=np.matrix(appendlist)
        outdata = pd.DataFrame(datavalues, columns=columnslist)
#---------------------------------------------------
        
        if j==0 :
            result=outdata
        else:
            result=result.append(outdata,ignore_index=True)
               
    appendlist=['PopularMovies'] + PopularMoviesList
    datavalues=np.matrix(appendlist)
    outdata = pd.DataFrame(datavalues, columns=columnslist)
    result=result.append(outdata,ignore_index=True)

    print('Input pandas.DataFrame #1:\r\n\r\n{0}'.format(dataframe1))
    # If a zip file is connected to the third input port is connected,
    # it is unzipped under ".\Script Bundle". This directory is added
    # to sys.path. Therefore, if your zip file contains a Python file
    # mymodule.py you can import it using:
    # import mymodule
    
    # Return value must be of a sequence of pandas.DataFrame
     
    
    return result,




    
