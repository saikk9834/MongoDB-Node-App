
<!DOCTYPE html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {
      margin: 0;
    }
    .button {
      background-color: #e00;
      border-radius: 8px;
      border: none;
      color: white;
      padding: 15px 75px;
      padding-bottom: 35px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      position: fixed;
      left: 78%
    }
    .navbar {
      overflow: hidden;
      background-color: black;
      padding-top: 20px;
      padding-bottom: 20px;
      position: fixed;
      top: 0;
      width: 100%;
    }
    .navbar a {
      float: left;
      display: block;
      text-align: center;
      padding: 5px 16px;
      text-decoration: none;
      font-size: 17px;
    }
    .main {
      padding: 16px;
      margin-top: 65px;
      height: 1500px;
      /* Used in this example to enable scrolling */
    }
  </style>
</head>

<body>

<div class="navbar">
<img
          height="pixels"
          src="https://marketplace.redhat.com/en-us/assets/red-hat-marketplace-logo-horizontal-reverse.svg"
          alt="Red Hat Marketplace logo" title="Red Hat Marketplace logo" style="height: 50px; margin-left: 3%;">
          <a href="https://marketplace.redhat.com/en-us/products/mongodb-enterprise-advanced-from-ibm/pricing#pricing-and-plans">
              <button class="button">Purchase</button>
          </a>
                
  </div>

<div class="main">





# MongoDB CRUD Operations


CRUD operations *create*, *read*, *update*, and *delete*

## Pre-Requisites

You need to launch the MongoDB Shell before we go ahead.

<a href='didact://?commandId=mdb.treeViewOpenMongoDBShell' title='Launch MongoDB Shell'><button>Launch MongoDB Shell</button></a>   


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

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=MongoDB%20Shell$$db.inventory.insertOne({item:"canvas",qty:100,tags:["cotton"],size:{h:28,w:35.5,uom:"cm"}})' title='Create'><button>Create</button></a>

## Read Operations

Read operations retrieve `documents` from a `collection`; i.e. query a collection for
documents. MongoDB provides the following methods to read documents from
a collection:

* `db.collection.find()`

You can specify `query filters or criteria` that identify the documents to return.

![url](https://docs.mongodb.com/manual/_images/crud-annotated-mongodb-updateMany.bakedsvg.svg)

### Example


> `db.inventory.find( { item: "canvas" } )`

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=MongoDB%20Shell$$db.inventory.find({item:"canvas"})' title='Read'><button>Read</button></a>

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

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=MongoDB%20Shell$$db.inventory.updateOne({item:"canvas"},{$set:{"size.uom":"cm",status:"P"},$currentDate:{lastModified:true}})' title='Update'><button>Update</button></a>

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


> `db.inventory.deleteMany({})`

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=MongoDB%20Shell$$db.inventory.deleteMany({})' title='Delete'><button>Delete</button></a>

</div>

</body>

</html>


