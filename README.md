
Project Tech Installation:
****************************
Install the Azure Functions Core Tools
Visual Studio Code debugging
npm install serverless -g

serverless install -u


Azure Setup from Cli
**************************
Login to Azure : az login

Set the Subscription : az account set -s <subscription Name>

Create a Resource Group in Azure : az group create -n <resource group> -l <Zone / Location in Azure ex: westus>

Create a Storage Account :

Note : Location Name & Resource Group also same as above
az storage account create -n <Storage Acct Name> -l <Zone / Location in Azure ex: westus>  -g <resource group>
  --sku Standard_LRS

Create a Function App
Note : Location Name,Resource Group & Storage Acct should be same as above
  az functionapp create -n BannerApp --storage-account <Storage Acct Name> --consumption-plan-location <Zone / Location in Azure ex: westus>
  --runtime <Node 12>  -g <resource group>

Deploy our Function App Code

az functionapp deployment source config-zip -g <resource_group> -n BannerApp --src <zip_file_path : which is under the .serverless path once we do npm install of the project>

