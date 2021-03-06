# The script MUST contain a function named azureml_main
# which is the entry point for this module.

# imports up here can be used to 
import pandas as pd
import numpy as np

# The entry point function can contain up to two input arguments:
#   Param<dataframe1>: a pandas.DataFrame
#   Param<dataframe2>: a pandas.DataFrame
def azureml_main(dataframe1 = None, dataframe2 = None):

    # Execution logic goes here
    userarray=np.array(dataframe1['PartitionKey'].unique())
    #Define a list of test users to recommend movies to them. Here all users are selected 
    userlist=userarray.tolist()
    NameSearch=dataframe2.iat[0,0]
    num=len(userlist)
    if (NameSearch in userlist):
        ind=userlist.index(NameSearch)
        result=dataframe1[ind:ind+1]
    else:
        result=dataframe1[num-1:num]
        
    #print('Input pandas.DataFrame #1:\r\n\r\n{0}'.format(dataframe1))

    # If a zip file is connected to the third input port is connected,
    # it is unzipped under ".\Script Bundle". This directory is added
    # to sys.path. Therefore, if your zip file contains a Python file
    # mymodule.py you can import it using:
    # import mymodule
    
    # Return value must be of a sequence of pandas.DataFrame
    return result,
