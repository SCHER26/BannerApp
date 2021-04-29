Image & Rest API 
**********************************
Rest Api's are created in NodeJs <BR>
Hosted in Azure using Azure Funct & exposed via APIM to the Mobile<br>
https://bannerres.azure-api.net/getproduct
  
Image is created in Azure Storage Account using BLOB

Exposed the the image link via APIM.

Project Tech Installation:
****************************
NodeJS Install npm install <br>
Serverless install -u
Install the Azure Functions Core Tools <br>
Visual Studio Code debugging <br>


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



