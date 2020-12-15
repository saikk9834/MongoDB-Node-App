<!DOCTYPE html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.gstatic.com">
 <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
          font-family: 'Red Hat Display', sans-serif;
    }
    .button1 {
    padding: 8px 12px 8px 12px;
    border: none;
    border-radius: 4px;
    margin: 5px 0px 5px 0px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    font-size: 16px;
    background-color: #FF0000;
    font-family: 'Red Hat Display', sans-serif;
}
.navbar {
      overflow: hidden;
      background-color: white;
      padding-top: 10px;
      padding-bottom: 10px;
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
      margin-top: 10px;
      height: 1500px;
      /* Used in this example to enable scrolling */
    }
  
}
  </style>
</head>
<body>
<div class="main">
 <div class="navbar">

## MongoDB CRUD in Node.js - Sample Application
</div>

<div class="bx--col"><img class="om-p--42" src="https://mp.s81c.com/pwb-production/13e122ce06ac87807c6d2745fd461fe4/mongoDBProductLogo-5ff4a2bb-f572-4af4-8131-01f14e8f9a38_5f759619-964e-4c17-be4f-b517c050828a.png" alt="MongoDB Enterprise Advanced from IBM logo"></div>

 
 ## What is this?
Demo code that excercises MongoDB Create Read Update Delete (CRUD) operations with the mongoose npm module

<!-- ![Alt text](../screenshots/mongo_read.png?raw=true) -->

## Let's Launch the Application

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=Crud$$node%20MongoDB-Node-App/Sample-Application-1/app.js %26 ps -e | grep node' title='Launch'><button class="button1">**Launch Application**</button></a>

## Contains:
- /config = mongo connection config (sample)
- /controller = controller code with routes and DB operations in personController.js. and DB setup+purge API in setupController
- model = person DB data model
- /public = cascading stylesheet 
- /views = EJS views / HTML UI
- / = app.js main webserver code & package.json 

### Mongo Client UI Functionality:
- Add a person - CREATE Crud
- List person(s) - READ cRud
- Update person (needs MongoID from list function) - UPDATE crUd
- Delete person (needs MongoID from list function) - DELETE cruD 

## Installation overview

### Install mongo DB with auth model
See https://docs.mongodb.com/manual/installation/

## How to run it
Response: 
<pre id="json">node app.js</pre>

point your browser at the lport 3000 to load Client
http://0.0.0.0:3000

## Getting Started

You will see different tabs once you start the app. Each of these tabs refer to the basic CRUD operation that you have just learnt. 

Try performing the Create, Read and Update operations. The code is already written for each of them at the backend.

After performing Create, Read and Update operations successfully, you are required to go to the 'Delete' tab, and try deleting any entry. You will see a message that will request you to make some changes. Follow those steps and thereafter the 'Delete' button will function.

## How to make the DELETE button work?
Please make sure that you have made the following changes before trying out DELETE function:

1. Go to the `personController.js` file in controllers folder
<a href='didact://?commandId=file-search.openFile&text=/projects/MongoDB-Node-App/Sample-Application-1/controllers/personController.js' title='Launch'><button class="button1">**Open File**</button></a>
2. Delete/Comment the code from Line 153 to 156
3. Uncomment code from Line 159 to Line 179

<pre id="json">
    Person.findByIdAndRemove(req.body.mongoid, function (err, person) {  

        if (err) {
            ui.data[ui.menuitem].status = '500'
            ui.data[ui.menuitem].data = err 
        } else {
            if (person == null) { 
                ui.data[ui.menuitem].status = '404' 
                ui.data[ui.menuitem].data = 'person id ' + req.body.mongoid + ' not found' 
            } else { 
                ui.data[ui.menuitem].status = '200' 
                ui.data[ui.menuitem].data = person 
            } 
        } 
        ui.data[ui.menuitem].action = 'delete' 
        res.render('./index.ejs', { 
            ui: ui 
        }) 
    })
  
</pre>
Now Relaunch the app!

<a href="didact://?commandId=vscode.didact.sendNamedTerminalAString&text=Crud$$ps -ef | grep 'node MongoDB' | awk '{print $1}' | xargs kill -9;node%20MongoDB-Node-App/Sample-Application-1/app.js %26" title='Launch'><button class="button1">**Relaunch Application**</button></a>

## More Info
For more information on MongoDB:
https://www.mongodb.com/what-is-mongodb

For more information on Express:
https://www.npmjs.com/package/express

For more information on Mongoose:
https://www.npmjs.com/package/mongoose

</div>

</body>

</html>
