
from config import *

import azure.common
from azure.storage import CloudStorageAccount
from Files import file_samples
import pydocumentdb;
import pydocumentdb.document_client as document_client
import azure.common

from azure.common import AzureException
from azure.storage import CloudStorageAccount
from azure.storage.file import FileService
from azure.storage.table import TableService, Entity

from Emotion import processRequest
from Emotion import _key

from DB import DB_processing

client = document_client.DocumentClient(configIn['ENDPOINT'], {'masterKey': configIn['MASTERKEY']})

if(usage):

    #---------- Upload to Azure File Storage -----------------

    print ('---------------------------------------------------------------')
    print('Azure Storage File \n ')

    account_name = STORAGE_ACCOUNT_NAME
    account_key = STORAGE_ACCOUNT_KEY
    account = CloudStorageAccount(account_name, account_key)

    file_samples.upload_on_file_storage(account)
    print('\nDone \n  ')
    print ('---------------------------------------------------------------')


    #--------- Create Input DB --------------------------------

    print('DB In \n')

    result= DB_processing(client,configIn,True)[0]
    shareAPI=result['sharename']
    dirAPI=result['directoryname']
    fileAPI=result['filename']
    print('\nDone \n  ')
    print ('---------------------------------------------------------------')

    print('Emotion API \n')

    #--------- Getting Image from file Storage --------------------------------


    file_service2 = account.create_file_service()
    image4API=file_service2.get_file_to_bytes(shareAPI,dirAPI,fileAPI)

    #with open( image4API, 'rb' ) as f:
    data = image4API.content

else:

    #--------- Getting Image Local --------------------------------

    with open( pathToFileInDisk, 'rb' ) as f:
       data = f.read()

headers = dict()
headers['Ocp-Apim-Subscription-Key'] = _key
headers['Content-Type'] = 'application/octet-stream'

json = None
params = None

resultAPI = processRequest( json, data, headers, params )

scoreStore=open(scores,'w')
scoreStore.write(str(resultAPI[0]['scores']['anger'])+';')
scoreStore.write(str(resultAPI[0]['scores']['contempt'])+';')
scoreStore.write(str(resultAPI[0]['scores']['disgust'])+';')
scoreStore.write(str(resultAPI[0]['scores']['fear'])+';')
scoreStore.write(str(resultAPI[0]['scores']['happiness'])+';') 
scoreStore.write(str(resultAPI[0]['scores']['neutral'])+';')
scoreStore.write(str(resultAPI[0]['scores']['sadness']) +';')
scoreStore.write(str(resultAPI[0]['scores']['surprise'])+';')
scoreStore.close()

print('\nDone \n  ')
print ('---------------------------------------------------------------')
#---------- Writing in output DB -----------------------------

if (storage):
    print('DB Out \n')
    resultFinal= DB_processing(client,configOut,False)[0]
    print(resultFinal)

    print('\nFinished :) ')

else:
    data_out=Entity()
    data_out.PartitionKey=userID
    data_out.RowKey=timestamp
    data_out.anger=resultAPI[0]['scores']['anger']
    data_out.contempt=resultAPI[0]['scores']['contempt']
    data_out.disgust=resultAPI[0]['scores']['disgust']
    data_out.fear=resultAPI[0]['scores']['fear']
    data_out.happiness=resultAPI[0]['scores']['happiness']
    data_out.neutral=resultAPI[0]['scores']['neutral']
    data_out.sadness=resultAPI[0]['scores']['sadness']
    data_out.surprise=resultAPI[0]['scores']['surprise']
    data_out.timeSpent=timeSpent
    data_out.click=clicks

    table_service = TableService(account_name=STORAGE_ACCOUNT_NAME, account_key=STORAGE_ACCOUNT_KEY)

    table_service.create_table('Results')

    table_service.insert_or_replace_entity('Results', data_out)

    output = table_service.get_entity('Results',userID)
    print(output)












