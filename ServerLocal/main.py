from flask import Flask, request, render_template, json
import azure.common
from azure.storage import CloudStorageAccount
#from Files import file_samples
#import pydocumentdb;
#import pydocumentdb.document_client as document_client

from azure.common import AzureException
from azure.storage import CloudStorageAccount
from azure.storage.table import TableService, Entity
from Emotion import processRequest
from Emotion import _key


#from Emotion import processRequest
#from Emotion import _key

#from DB import DB_processing
app = Flask(__name__)

STORAGE_ACCOUNT_NAME = 'emotionprocessibecb'
STORAGE_ACCOUNT_KEY = 'OTVSF323UpUM4tHP8EXaOFrldC95ldtd1F1r7Jlx8NI7kFx/kFqCmA4NwUbuRpxghlzQ3KpLruzBTl5CmNm/Gw=='
IS_EMULATED = False
userID= 'Youssef'
timestamp=1209819289

table_service = TableService(account_name=STORAGE_ACCOUNT_NAME, account_key=STORAGE_ACCOUNT_KEY)

@app.route('/', methods=['GET', 'POST'])
def entry_page():
    if request.method == 'POST':
        json_dict = request.get_json(True)[0]
        #print(json_dict)
        
        data_out=Entity()
        data_out.PartitionKey = json_dict['username']
        data_out.movieID = json_dict['movieId']
        content=json_dict["content"]
        for time, element in content.items():
          data_out.RowKey=time
          data_out.rate= element[0]
          toDelete=len('data:image/jpeg;base64,')-1
          pic64=element[1][toDelete:]
          data=pic64.decode('base64')
          

          
          headers = dict()
          headers['Ocp-Apim-Subscription-Key'] = _key
          headers['Content-Type'] = 'application/octet-stream'

          json = None
          params = None

          resultAPI = processRequest( json, data, headers, params )

          data_out.anger=resultAPI[0]['scores']['anger']
          data_out.contempt=resultAPI[0]['scores']['contempt']
          data_out.disgust=resultAPI[0]['scores']['disgust']
          data_out.fear=resultAPI[0]['scores']['fear']
          data_out.happiness=resultAPI[0]['scores']['happiness']
          data_out.neutral=resultAPI[0]['scores']['neutral']
          data_out.sadness=resultAPI[0]['scores']['sadness']
          data_out.surprise=resultAPI[0]['scores']['surprise']
        
          table_service.create_table('DataForML')
          table_service.insert_or_replace_entity('DataForML', data_out)
        

       
        return 'Uploaded'

    else:
        output = table_service.get_entity('DataForML',"Anson",12134)
       
        return 'Everything is working'

if __name__ == '__main__':
  app.debug = True
  app.run()
