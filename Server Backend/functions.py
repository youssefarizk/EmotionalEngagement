from flask import Flask, request, render_template, json,url_for
import time
import requests
import azure.common
from azure.storage import CloudStorageAccount
from azure.common import AzureException
from azure.storage import CloudStorageAccount
from azure.storage.table import TableService, Entity
import json
import urllib2
import numpy
import pandas
from constants1 import *

table_service = TableService(account_name=STORAGE_ACCOUNT_NAME, account_key=STORAGE_ACCOUNT_KEY)


#These functions help format the data to communicate with the ML API
def tableToList(mlData): #mlData is data entity in Azure Table
    return [mlData['anger'], mlData['contempt'], mlData['disgust'], mlData['fear'], mlData['frequencyofexit'], mlData['happiness'], mlData['neutral'], mlData['sadness'], mlData['surprise'], mlData['videoCompletion']]

def makeJSONEng(dataLst):
    input1Dic = {"ColumnNames": ["anger","contempt","disgust","fear","frequencyofexit","happiness","neutral","sadness","surprise","videoCompletion"]}
    input1Dic["Values"] = dataLst
    inputDic = {"Inputs": {"input1":input1Dic}, "GlobalParameters": {}}
    return inputDic
 
#This function communicates with the ML API   
def getMLData(engagementData):
    mlData = makeJSONEng(engagementData)
    bodyML = str.encode(json.dumps(mlData))
    req = urllib2.Request(urlML, bodyML, headersML)
    try:
        response = urllib2.urlopen(req)
        result = response.read()
        result = json.loads(result)
        engagementResults = result["Results"]["output1"]['value']["Values"]
        engagementList = [sublist[15] for sublist in engagementResults]
        return str(engagementList)
    except urllib2.HTTPError, error:
        return ("The request failed with status code: " + str(error.code))
       
#This function help format the data to communicate with the Recommendations API
def makeJSONRec(username):
    input1Dic = {"ColumnNames":["PartitionKey"], "Values":[[username]]}
    return {"Inputs":{"input2":input1Dic},"GlobalParameters":{"Maximum number of items to recommend to a user":5}}
    
#This function communicates with the Recommendation Engine
def getRecData(username):
    mlData = makeJSONRec(username)
    bodyRec = str.encode(json.dumps(mlData))
    req = urllib2.Request(urlRec, bodyRec, headersRec)
    try:
        response = urllib2.urlopen(req)
        result = response.read()
        result = json.loads(result)
        recommendations = result["Results"]["output1"]['value']["Values"][0][1:]
        concatString=[]
        for movie in recommendations:
            if movie != "  ":
                concatString.append(movie)
        return concatString
    except urllib2.HTTPError, error:
        return ("The request failed with status code: " + str(error.code))
    



def addToDB(mlData, table):
    table_service.insert_entity(table, mlData)
    


