from azure.storage.table import TableService, Entity
from config import *


table_service = TableService(account_name=STORAGE_ACCOUNT_NAME, account_key=STORAGE_ACCOUNT_KEY)

table_service.create_table('tasktable')


task = {'PartitionKey': 'tasksSeattle', 'RowKey': '001', 'description' : 'Take out the trash', 'priority' : 200}
table_service.insert_or_replace_entity('tasktable', task)

task = table_service.get_entity('tasktable', 'tasksSeattle', '001')
print(task.description)
print(task.priority)

table_service.delete_table('tasktable')