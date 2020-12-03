<h1 class="om-type__headline-05 om-type--REGULAR">MongoDB Enterprise Advanced from IBM</h1>
<div class="bx--col"><img class="om-p--42" src="https://mp.s81c.com/pwb-production/13e122ce06ac87807c6d2745fd461fe4/mongoDBProductLogo-5ff4a2bb-f572-4af4-8131-01f14e8f9a38_5f759619-964e-4c17-be4f-b517c050828a.png" alt="MongoDB Enterprise Advanced from IBM logo"></div>

<p class="om-type__body-text-03 om-margin--TOP--5">A robust, scalable, highly available document database solution that enables developers and supports mission-critical enterprise deployments.</p>

## Overview
<p class="om-type__body-text-03">IBM Data Management Platform for MongoDB Enterprise Advanced is a data platform and document database that enables developers to build apps faster and distribute data to where it needs to be, with the freedom to run anywhere. This modern database platform provides a rich data environment and enterprise tooling to support mission-critical, highly secure and always-on deployments.</p>

## Launch the Application

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T1$$cd MongoDB-Node-App/Sample-Application-2 %26%26 npm start' title='Launch'><button class="button1">Launch Application</button></a>

# MongoDB CRUD Operations


CRUD operations *create*, *read*, *update*, and *delete*
 
## Login to the API (create a server connection on the API server side)

    POST http://localhost:3000/api/login
    Content-Type: application/json
    
    {
      "username": "",
      "password": "",
      "hosts": [
        {
          "host": "localhost",
          "port": 27017
        }
      ]
    }

    
Response:
    
    {
        "success" : true,
        "token": "TOKEN"
    } 
    

 <a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&&text=T2$$curl --header "Content-Type: application/json" --request POST --data %27{"username":"","password":"","hosts":[{"host":"a079e195a0638452a970fcf120de033c-1333340820.us-west-2.elb.amazonaws.com","port": 27017}]}%27 http://localhost:3000/api/login --silent %3E token %26%26 export token=%60sed -e %27s/^.*"token":"\([^"]*\)".*$/\1/%27 token%60 %26%26 if [[ $token[1] == "{" ]]; then echo %27Failure in Logging in%27; else echo %27Login Success%27; fi' title='Launch'><button class="button1">Login</button></a>

## Create Operations


Create or insert operations add new documents to a collection. If the
collection does not currently exist, insert operations will create the
collection.

MongoDB provides the following methods to insert documents into a
collection:

* `db.collection.insertOne()`

* `db.collection.insertMany()`

In MongoDB, insert operations target a single `collection`. All
write operations in MongoDB are `atomic` on the level of a single
`document`.

![url](https://docs.mongodb.com/manual/_images/crud-annotated-mongodb-insertOne.bakedsvg.svg)

### Example

> `db.inventory.insertOne(
   { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
)`

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl %2DH "Content%2DType: application/json" %2DH "X-TOKEN: $token" %2D%2Drequest POST %2D%2Ddata %27%7B"item":"canvas","qty":"100","tags":["cotton"],"size":{"h":28,"w":35.5,"uom":"cm"}%7D%27 http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fdatabase%2Ftest%2Finventory%2Finsert' title='Launch'><button class="button1">Insert</button></a>


## Read Operations

Read operations retrieve `documents` from a `collection`; i.e. query a collection for
documents. MongoDB provides the following methods to read documents from
a collection:

* `db.collection.find()`

You can specify `query filters or criteria` that identify the documents to return.

![url](https://docs.mongodb.com/manual/_images/crud-annotated-mongodb-updateMany.bakedsvg.svg)


### Example


> `db.inventory.find( { item: "canvas" } )`

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl -g --header "X-TOKEN: $token" --request GET  %27http://localhost:3000/api/database/test/inventory/find?query={"item":"canvas"}%27' title='Launch'><button class="button1">Read</button></a>

## Update Operations

Update operations modify existing `documents` in a `collection`. MongoDB
provides the following methods to update documents of a collection:

* `db.collection.updateOne()`

* `db.collection.updateMany()`

* `db.collection.replaceOne()`

In MongoDB, update operations target a single collection. All write
operations in MongoDB are `atomic` on the level of a single document.

You can specify criteria, or filters, that identify the documents to
update. These :ref:`filters` use the same
syntax as read operations.

![url](https://docs.mongodb.com/manual/_images/crud-annotated-mongodb-updateMany.bakedsvg.svg)

### Example 


> `db.inventory.updateOne(
   { item: "canvas" },
   {
     $set: { "size.uom": "cm", status: "P" },
     $currentDate: { lastModified: true }
   }
)`

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl -g -H "Content%2DType: application/json" -H "X-TOKEN: $token" --request PUT --data %27{"$set":{"size.uom":"cm","status":"P"},"$currentDate":{"lastModified":true}}%27 %27http://localhost:3000/api/database/test/inventory/updateOne?query={"item":"canvas"}%27' title='Launch'><button class="button1">Update</button></a>


## Delete Operations

Delete operations remove documents from a collection. MongoDB provides
the following methods to delete documents of a collection:

* `db.collection.deleteOne()`

* `db.collection.deleteMany()`

In MongoDB, delete operations target a single :term:`collection`. All
write operations in MongoDB are `atomic` on the level of a single document.

You can specify criteria, or filters, that identify the documents to
remove. These `filters` use the same
syntax as read operations.

![url](https://docs.mongodb.com/manual/_images/crud-annotated-mongodb-deleteMany.bakedsvg.svg)

### Example


> `db.inventory.removeOne({})`

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl -g -H "X-TOKEN: $token"  --request DELETE %27http://localhost:3000/api/database/test/inventory/removeOne?query={"item":"canvas"}%27' title='Launch'><button class="button1">Delete</button></a>

## Logout (to destroy the connexion on the server side)

    POST http://localhost:3000/api/logout
    X-TOKEN: TOKEN
   
Response: 

    {
       "success": true
    }

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl %2Dg %2D%2Dheader "X-TOKEN: $token" %2D%2Drequest POST  %27http://localhost:3000/api/logout%27$$cat token' title='Launch'><button class="button1">Logout</button></a>


### Sample Applications
This sample application helps you explore `CRUD` operations with a sample react application <span>&#8594;</span>
<a href='didact://?commandId=vscode.didact.startDidact&projectFilePath=MongoDB-Node-App/Sample-Application-1/sample-app1-README.md' title='Sample Application 1'><button>Sample Application 1</button></a> 

