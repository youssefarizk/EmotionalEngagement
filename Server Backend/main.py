from flask import Flask, request, render_template, json
import time
import requests
import azure.common
from azure.storage import CloudStorageAccount
#from Files import file_samples
#import pydocumentdb;
#import pydocumentdb.document_client as document_client

from azure.common import AzureException
from azure.storage import CloudStorageAccount
from azure.storage.table import TableService, Entity
import json

_url = 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize' #urlishere
_key = '563d8cbf6e5f437c8bc447e5533e227c' #Here you have to paste your primary key
_maxNumRetries = 10

STORAGE_ACCOUNT_NAME = 'emotionprocessibecb'
STORAGE_ACCOUNT_KEY = 'OTVSF323UpUM4tHP8EXaOFrldC95ldtd1F1r7Jlx8NI7kFx/kFqCmA4NwUbuRpxghlzQ3KpLruzBTl5CmNm/Gw=='
IS_EMULATED = False


table_service = TableService(account_name=STORAGE_ACCOUNT_NAME, account_key=STORAGE_ACCOUNT_KEY)

table_service.create_table('DataForML')


def processRequest( jsonvar, data, headers, params ):
    retries = 0
    result = None
    while True:

        response = requests.request( 'post', _url, json = jsonvar, data = data, headers = headers, params = params )

        if response.status_code == 429: 

           # print( "Message: %s" % ( response.json()['error']['message'] ) )

            if retries <= _maxNumRetries: 
                time.sleep(1) 
                retries += 1
                continue
            else: 
                #print( 'Error: failed after retrying!' )
                break

        elif response.status_code == 200 or response.status_code == 201:

            if 'content-length' in response.headers and int(response.headers['content-length']) == 0: 
                result = None 
            elif 'content-type' in response.headers and isinstance(response.headers['content-type'], str): 
                if 'application/json' in response.headers['content-type'].lower(): 
                    result = response.json() if response.content else None 
                elif 'image' in response.headers['content-type'].lower(): 
                    result = response.content
        else:
            print( "Error code: %d" % ( response.status_code ) )
            print( "Message: %s" % ( response.json()['error']['message'] ) )

        break
        
    return result



app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def hello_world():
  graphString = ''
  if request.method == 'POST':
 
    json_data = request.get_data(True)
    json_dict = json.loads(json_data)
    
    for dics in json_dict:
      data_out ={}
      data_out['PartitionKey'] = dics['username']
      data_out['movieID'] = dics['movieId']
      data_out['rate']=dics["rate"]
      data_out['RowKey']=str(dics["time"])
      data_out['videoCompletion'] = dics['videocompletion']
      toDelete=len('data:image/jpeg;base64,')-1
      pic64=dics["picuri"][toDelete:]
      data=pic64.decode('base64')
      headers = {}
      headers['Ocp-Apim-Subscription-Key'] = _key
      headers['Content-Type'] = 'application/octet-stream'
    
      json1 = None
      params = None
      resultAPI = processRequest( json1, data, headers, params )
      data_out['anger']=resultAPI[0]['scores']['anger']
      data_out['contempt']=resultAPI[0]['scores']['contempt']
      data_out['disgust']=resultAPI[0]['scores']['disgust']
      data_out['fear']=resultAPI[0]['scores']['fear']
      data_out['happiness']=resultAPI[0]['scores']['happiness']
      data_out['neutral']=resultAPI[0]['scores']['neutral']
      data_out['sadness']=resultAPI[0]['scores']['sadness']
      data_out['surprise']=resultAPI[0]['scores']['surprise']

      #table_service.insert_entity('DataForML', data_out)
      table_service.insert_or_replace_entity('DataForML', data_out)

      graphString += data_out['RowKey'] + ', ' + str(data_out['rate']) + '\n'

    return graphString
          

         


    
  
  else:
    #output = table_service.get_entity('DataForML',"Anson",12134)
    return 'Everything is working'
    
  

if __name__ == '__main__':
  app.run()
