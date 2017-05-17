#Usage: True for Azure File Storage, False for Local using pathToLocalDisk
usage=False

#Storage: True if DocumentDB , False for Azure Table
storage=False


#Config Azure File Storage
STORAGE_ACCOUNT_NAME = 'emotionprocessibecb'
STORAGE_ACCOUNT_KEY = 'OTVSF323UpUM4tHP8EXaOFrldC95ldtd1F1r7Jlx8NI7kFx/kFqCmA4NwUbuRpxghlzQ3KpLruzBTl5CmNm/Gw=='
IS_EMULATED = False



#Config Cosmos DocumentDB for Input Collection
configIn = { 
    'ENDPOINT': 'https://imperial-microsoft-emotion.documents.azure.com:443/',
    'MASTERKEY': 'P19ankWJ6xI0FkRo70KOY1AZXX4M2txsAWz4HQYntHvU86rQnVLzEgpRaaUYEJ4zpx4ryNY3X3StQ3CaLhLL9w==',
    'DOCUMENTDB_DATABASE': 'EmotionDB',
    'DOCUMENTDB_COLLECTION': 'Input'
};

#Config Cosmos DocumentDB for Input Collection
configOut = { 
    'ENDPOINT': 'https://imperial-microsoft-emotion.documents.azure.com:443/',
    'MASTERKEY': 'P19ankWJ6xI0FkRo70KOY1AZXX4M2txsAWz4HQYntHvU86rQnVLzEgpRaaUYEJ4zpx4ryNY3X3StQ3CaLhLL9w==',
    'DOCUMENTDB_DATABASE': 'EmotionDB',
    'DOCUMENTDB_COLLECTION': 'Output'
};

#Input DB File Name:
db_in= 'DB_Input_Path.txt'

#Input DB File Name:
db_out= 'DB_Output_Path.txt'

#Scores
scores='Scores.txt'



#Data Common
userID= 'Jeff'
clicks= 5
timeSpent=10
timestamp=1209819287

#File location on Azure File Storage / Input Data
share='emotion-processingbecb'
direc='images'
fname='HairIn.jpg'

#Path of the input image on local for Azure File Storage
origin_image_path='/Users/simonweill/Desktop/Hairs.jpg'

#Path for file on local for Emotion API
pathToFileInDisk = '/Users/simonweill/Desktop/Emotion.jpg'


#Download from Azure File Storage to a local path
#destination_file = '/Users/simonweill/Desktop/Downloaded.jpg'

