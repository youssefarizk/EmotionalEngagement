#Machine Learning API config
urlML = 'https://ussouthcentral.services.azureml.net/workspaces/ee5a5f7c066c4e6d9cb5a5ddef974a22/services/20ff1a65f1284ca5ac4c99fc09b705cf/execute?api-version=2.0&details=true'
api_keyML = 'fHYd2jp/aLBih1KhaNEUaks+XWgKa7knRZ2QML+i4cIxHopBvB6aIa3lCpkO0yIkscsyaHL1ieZfu8egziX3FQ==' # Replace this with the API key for the web service
headersML = {'Content-Type':'application/json', 'Authorization':('Bearer '+ api_keyML)}

#Recommendation Engine API config
urlRec = 'https://ussouthcentral.services.azureml.net/workspaces/23a2a2ed84b647448a22c531ba119a3e/services/8de88a37896b41a6906c7e41a5a16978/execute?api-version=2.0&details=true'
api_keyRec = 'DQBkhI3O8Hr4Hiz5AG6Cos+umCSpeIpwEbWWDBlAllGSTBKFUxrQmCF3Aicq30lPpKeTHjYHXwqEzjRg4wt1hg==' # Replace this with the API key for the web service
headersRec = {'Content-Type':'application/json', 'Authorization':('Bearer '+ api_keyRec)}

#Azure Table config
STORAGE_ACCOUNT_NAME = 'emotionprocessibecb'
STORAGE_ACCOUNT_KEY = 'OTVSF323UpUM4tHP8EXaOFrldC95ldtd1F1r7Jlx8NI7kFx/kFqCmA4NwUbuRpxghlzQ3KpLruzBTl5CmNm/Gw=='
IS_EMULATED = False

movieLengths={0: 280, 1: 632, 2: 305, 3: 607, 4: 672, 5: 635, 6: 626, 7: 615, 8: 795, 9: 974, 10: 865, 11: 877, 12: 717, 13: 251, 14: 526, 15: 1024, 16: 326, 17: 252, 18: 2534, 19: 510, 20: 739, 21: 584, 22: 401, 23: 3056, 24: 2972, 25: 188, 26: 939, 27: 299, 28: 80, 29: 80, 30: 700, 31: 82, 32: 179, 33: 656, 34: 626, 35: 60, 36: 56}
