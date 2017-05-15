#Documentation: http://azure.github.io/azure-documentdb-python/api/pydocumentdb.document_client.html

import pydocumentdb;
import pydocumentdb.document_client as document_client
from config import *




def DB_processing(client,config,mode):

    # Create a database
    try:
        db = client.CreateDatabase({ 'id': config['DOCUMENTDB_DATABASE'] })
        in_file=open(db_in,'w')
        out_file=open(db_out,'w')
        in_file.write(db['_self']+';')
        in_file.close()
        out_file.write(db['_self']+';')
        out_file.close()

        

    except:
        in_file=open(db_in,'r')
        dbPath=in_file.readline().split(';')[0]
        db = client.ReadDatabase(dbPath)
        print('DB already exists')
    # Create collection options


    options = {
        'offerEnableRUPerMinuteThroughput': True,
        'offerVersion': "V2",
        'offerThroughput': 400
    }

    # Create a collection
    try:
        collection = client.CreateCollection(db['_self'], { 'id': config['DOCUMENTDB_COLLECTION'] }, options)
        if (mode):
            in_file=open(db_in,'a')
        else:
            in_file=open(db_out,'a')
        in_file.write(collection['_self']+';')
        in_file.close()
    except:
        if (mode):
            in_file=open(db_in,'r')
        else:
            in_file=open(db_out,'r')
        collectionPath=in_file.readline().split(';')[1]
        collection=client.ReadCollection(collectionPath)
        print('Collection already exists')
        in_file.close()

    # Create some documents

    try:

        if(mode):
            document1 = client.CreateDocument(collection['_self'],
                { 
                    'id': userID,
                    'Clicks': clicks,
                    'Time Spent': timeSpent,
                    'sharename': share,
                    'directoryname': direc,
                    'filename': fname

                })
            in_file=open(db_in,'a')
            in_file.write(document1['_self']+';')
            in_file.close()
        else:
                scoreFile=open(scores,'r')
                scoreList=scoreFile.readline().split(';')
                document1 = client.CreateDocument(collection['_self'],
                { 
                    'id': userID,
                    'Clicks': clicks,
                    'Time Spent': timeSpent,
                    'anger': scoreList[0],
                    'contempt': scoreList[1], 
                    'disgust': scoreList[2], 
                    'fear': scoreList[3], 
                    'happiness': scoreList[4], 
                    'neutral': scoreList[5], 
                    'sadness': scoreList[6], 
                    'surprise': scoreList[7]

                })
                scoreFile.close()
                in_file=open(db_out,'a')
                in_file.write(document1['_self']+';')
                in_file.close()


    except:
        if (mode):
            in_file=open(db_in,'r')
        else:
            in_file=open(db_out,'r')
        documentPath=in_file.readline().split(';')[2]
        document1=client.ReadDocument(documentPath)
        print('Document already exists')
        in_file.close()


    # Query them in SQL
    request="SELECT * FROM c WHERE c.id="+"'"+userID+"'"
    query = { 'query': request }    
            
    options = {} 
    options['enableCrossPartitionQuery'] = True
    options['maxItemCount'] = 2

    result_iterable = client.QueryDocuments(collection['_self'], query, options)
    results = list(result_iterable);
    return results