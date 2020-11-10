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
.button1 {
      border-radius: 8px;
      padding: 15px 75px;
      padding-bottom: 10px;
      text-align: center;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
  background-color: white;
  color: black;
  border: 2px solid #4CAF50;
}
.button1:hover {
  background-color: #4CAF50;
  color: white;
}
  
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

## MongoDB CRUD in Node.js - Example / Demo Code

## What is this?
Demo code that excercises MongoDB Create Read Update Delete (CRUD) operations with the mongoose npm module

<!-- ![Alt text](../screenshots/mongo_read.png?raw=true) -->

## Let's Launch the Application

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=Crud$$node%20MongoDB-Node-App/Sample-Application-1/app.js' title='Launch'><button class="button1">Launch Application</button></a>

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

### Setup API:
purge mongo collection = point browser at http://0.0.0.0:3000/person/purge
setup / seed data in collection = http://0.0.0.0:3000/person/setup


## Installation overview

### Install mongo DB with auth model
See https://docs.mongodb.com/manual/installation/


## How to run it
```
node app.js
```

point your browser at the lport 3000 to load Client
http://0.0.0.0:3000

## Getting Started

You will see different tabs once you start the app. Each of these tabs refer to the basic CRUD operation that you have just learnt. 

Try performing the Create, Read and Update operations. The code is already written for each of them at the backend.

After performing Create, Read and Update operations successfully, you are required to go to the 'Delete' tab, and try deleting any entry. You will see a message that will request you to make some changes. Follow those steps and thereafter the 'Delete' button will function.

## How to make the DELETE button work
Please make sure that you have made the following changes before trying out DELETE function:
1. Click on the exit Button to close the program
2. Go to the personController.js file under controllers
3. Follow the steps on Line 151
### OR
3. Delete the code from Line 153 to 156
4. Paste the following code below that:
        
    Person.findByIdAndRemove(req.body.mongoid, function (err, person) { <br>   
        if (err) {<br> 
            ui.data[ui.menuitem].status = '500'<br> 
            ui.data[ui.menuitem].data = err <br> 
        } else {<br> 
            if (person == null) {<br> 
                ui.data[ui.menuitem].status = '404'<br> 
                ui.data[ui.menuitem].data = 'person id ' + req.body.mongoid + ' not found'<br> 
            } else {<br> 
                ui.data[ui.menuitem].status = '200'<br> 
                ui.data[ui.menuitem].data = person<br> 
            }<br> 
        }<br> 
        ui.data[ui.menuitem].action = 'delete'<br> 
        res.render('./index.ejs', {<br> 
            ui: ui<br> 
        })<br> 
    })<br> 
    
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


