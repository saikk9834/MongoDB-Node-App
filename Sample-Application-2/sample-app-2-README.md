
# MongoDB REST API

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T1$$cd MongoDB-Node-App/Sample-Application-2 %26%26 npm start' title='Launch'><button class="button1">Launch Application</button></a>

## Overview

* Multiple mongodb connection in parallel (the api is multi user) 
* Simple generic interface to the Mongodb nodeJs driver
* queries sent as json in requests

## Example:

1. Login to the API (create a server connection on the API server side)

    ```
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

    ```
    Response:
    ```json
    {
        "success" : true,
        "token": "TOKEN"
    } 
    ```

    
<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl --header "Content-Type: application/json" --request POST --data %27{"username":"","password":"","hosts":[{"host":"a079e195a0638452a970fcf120de033c-1333340820.us-west-2.elb.amazonaws.com","port": 27017}]}%27 http://localhost:3000/api/login --silent %3E token %26%26 export token=%60sed -e %27s/^.*"token":"\([^"]*\)".*$/\1/%27 token%60' title='Launch'><button class="button1">Login</button></a>

2. Use any of the endpoint to work with your database (i.e. find all elements in the "COLL" collection in the DBNAME db)

    ```
    GET http://localhost:3000/api/database/DBNAME/COLL/find?query={}
    X-TOKEN: TOKEN
    ```
    Response : 
    ```json
    {
   "success":true,
   "data":[
      {
         "_id":"5faa646f0d836332cddc2f0a",
         "item":"canvas",
         "qty":100,
         "tags":[
            "cotton"
         ],
         "size":{
            "h":28,
            "w":35.5,
            "uom":"cm"
         }
      }
   ]
}

   
<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl -g --header "X-TOKEN: $token" --request GET  %27http://localhost:3000/api/database/test/inventory/find?query={}%27' title='Launch'><button class="button1">Query</button></a>

3. Insert (into the database)

      ```
      POST http://localhost:3000/api/database/DBNAME/COLL/insert
      X-TOKEN: TOKEN
      Content-Type: application/json

      {
      "simpleDoc": "abs",
      "name": "tot",
      "age": 25
      }

      Response:
            {
               "success": true,
               "count": 1
            }

      ```

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl %2DH "Content%2DType: application/json" %2DH "X-TOKEN: $token" %2D%2Drequest POST %2D%2Ddata %27{"simpleDoc":"doc","name":"name","age":"25"%7D%27 http://localhost:3000/api/database/test/inventory/insert' title='Launch'><button class="button1">Insert</button></a>


4. Delete from the Database

      ```
      DELETE http://localhost:3000/api/database/test/inventory/remove?query={"age": {"$gte": 1}}
      X-TOKEN: TOKEN

      Response:
            {
               "success": true,
               "count": 1
            }

      ```

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl -g -H "X-TOKEN: $token"  --request DELETE %27http://localhost:3000/api/database/test/inventory/removeOne?query={"item":"canvas"}%27' title='Launch'><button class="button1">Delete</button></a>


5. Update entries in the Database

      ```
      PUT http://localhost:3000/api/database/ANFR/test/updateOne?query={"age": {"$gte": 1}}
      X-TOKEN: TOKEN
      Content-Type: application/json

      {
      "$set": {
         "age": 36
      }
      }

      Response:
      {
         "success": true,
         "count": 1
      }

      ```

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl -H "Content%2DType: application/json" -H "X-TOKEN: $token" --request PUT --data %27{$set:{"size.uom":"cm",status:"P"},$currentDate:{lastModified:true}}%27 http://localhost:3000/api/database/test/inventory/updateOne?query' title='Launch'><button class="button1">Update</button></a>


6. Logout (to destroy the connexion on the server side) ! 

    ```
    POST http://localhost:3000/api/logout
    X-TOKEN: TOKEN
    ```
   
   Response: 
    ```json
    {
       "success": true
    }
    ```

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl %2Dg %2D%2Dheader "X-TOKEN: $token" %2D%2Drequest POST  %27http://localhost:3000/api/logout%27$$cat token' title='Launch'><button class="button1">Logout</button></a>
