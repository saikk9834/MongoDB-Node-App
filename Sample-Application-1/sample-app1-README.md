## MongoDB CRUD in Node.js - Example / Demo Code

## What is this?
Demo code that excercises MongoDB Create Read Update Delete (CRUD) operations with the mongoose npm module

![Alt text](/screenshots/mongo_read.png?raw=true)

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
        OR
     3. Delete the code from Line 153 to 156
     4. Paste the following code below that:
        'Person.findByIdAndRemove(req.body.mongoid, function (err, person) {

            
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
    })'
    
## More Info
For more information on MongoDB:
https://www.mongodb.com/what-is-mongodb

For more information on Express:
https://www.npmjs.com/package/express

For more information on Mongoose:
https://www.npmjs.com/package/mongoose



### EOF Readme.# MongoDB-Node-App
