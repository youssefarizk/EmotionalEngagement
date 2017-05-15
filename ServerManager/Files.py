#DOCUMENTATION: https://azure.github.io/azure-storage-python/ref/azure.storage.file.models.html#azure.storage.file.models.File

#
# Azure File Service Sample - Demonstrate how to perform common tasks using the Microsoft Azure File Service.  
#  
# Documentation References:  
#  - What is a Storage Account - http://azure.microsoft.com/en-us/documentation/articles/storage-whatis-account/  
#  - Getting Started with Files - https://azure.microsoft.com/en-us/documentation/articles/storage-python-how-to-use-file-storage/  
#  - File Service Concepts - http://msdn.microsoft.com/en-us/library/dn166972.aspx  
#  - File Service REST API - http://msdn.microsoft.com/en-us/library/dn167006.aspx  
#  - Storage Emulator - http://azure.microsoft.com/en-us/documentation/articles/storage-use-emulator/
#  


import uuid
import random
import string
import io
import tempfile
import fileinput
import os
import time
import config
import azure.common

from azure.common import AzureException
from azure.storage import CloudStorageAccount
from azure.storage.file import FileService

from config import *


class file_samples():

    # Runs all samples for Azure Storage File service.
    # Input Arguments:
    # account - CloudStorageAccount to use for running the samples
    @staticmethod
    def upload_on_file_storage(account):

        print('Azure Storage File sample - Starting.')
        
        try:
        
            
            # Create a new file service that can be passed to all methods
            file_service = account.create_file_service()

            # Create 
            file_samples.operations(file_service)

            # Delete all Azure Files created in this sample
            #file_samples.file_delete_samples(file_service, share, fname)

        except Exception as e:
            if (IS_EMULATED):
                print('Emulator currently does not support Azure Files.', e)
            else: 
                print('Error occurred in the sample. Please make sure the account name and key are correct.', e) 

        finally:
            print('\n\nAzure Storage File sample - Completed.')
    
    def operations(file_service):

        print('Creating/Accessing share.') 
        file_service.create_share(share)
        print('Done')

        print('Uploading file from local path.')   

        print('Creating a temporary file from text.') 
        with open(origin_image_path,'r') as my_file: #
           print('Sample temporary file created.') 
              
        file_service.create_file_from_path(
            share,              # share name
            None,                   # directory path - root path if none
            direc+fname,               # destination file name
            my_file.name)      # full source path with file name

        print('Done')

        # Close the temp file
        my_file.close()


#------------------------------  OTHER USEFUL FUNCTIONS  ------------------------------------------

        #Download the file to path

        #file_service.get_file_to_path(
         #   share,              # share name
          #  direc,          # directory path
           # fname,               # source file name
            #destination_file)       # destinatation path with name

        #print('Sample file downloaded to: ' + destination_file)


        # Demonstrate how to list files and directories contains under Azure File share

        # Create a generator to list directories and files under share
       # generator = file_service.list_directories_and_files(share)
        # Prints the directories and files under the share
       # for file_or_dir in generator:
        #    print(file_or_dir.name)
        
        #print('Files and directories under share "' + share + '" listed.')
        #print('\nCompleted successfully - Azure basic Files operations.')

    # Demonstrate how to delete azure files created for this demonstration
    # Warning: Deleting a share or direcotry will also delete all files and directories that are contained in it.
   
   
   
   
    def file_delete_samples(file_service, share, fname):
        print('\nDeleting all samples created for this demonstration.')

        try:
            # Deleting file: 'share/mydirectory/fname'
            print('Deleting a sample file.')
            file_service.delete_file(
                share,              # share name
                'mydirectory',          # directory path
                fname)               # file name to delete
            print('Sample file "' + fname + '" deleted from: ' + share + '/mydirectory' )

            # Deleting directory: 'share/mydirectory'
            print('Deleting sample directory and all files and directories under it.')
            file_service.delete_directory(
                share,              # share name
                'mydirectory')          # directory path
            print('Sample directory "/mydirectory" deleted from: ' + share)

            # Deleting share: 'share'
            print('Deleting sample share ' + share + ' and all files and directories under it.')
            file_service.delete_share(
                share)              # share name
            print('Sample share "' + share + '" deleted.')
            print('\nCompleted successfully - Azure Files samples deleted.')

        except Exception as e:
            print('********ErrorDelete***********')
            print(e)

    # Get random characters to append to File name
    def randomfname(length):
        return ''.join(random.choice(string.ascii_lowercase) for i in range(length))



