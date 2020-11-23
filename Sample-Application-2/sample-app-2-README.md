
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

    
<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl %2D%2Dheader "Content%2DType: application/json" %2D%2Drequest POST %2D%2Ddata %27%7B"username"%3A"","password"%3A"","hosts"%3A%5B%7B"host"%3A"a079e195a0638452a970fcf120de033c-1333340820.us-west-2.elb.amazonaws.com","port"%3A 27017%7D%5D%7D%27 http%3A%2F%2Flocalhost%3A3000%2Fapi%2Flogin %2D%2Dsilent %7C export token%3D%60sed%20-e%20%27s%2F%5E.%2A%22token%22%3A%22%5C%28%5B%5E%22%5D%2A%5C%29%22.%2A%24%2F%5C1%2F%27%20%60 %26%26 if%20%5B%5B%20%24token%5B1%5D%20%3D%3D%20%22%7B%22%20%5D%5D%3B%20then%20echo%20%27Failure in Logging in%27%3B%20else%20echo%20%27Login Success%27%3B%20fi' title='Launch'><button class="button1">Login</button></a>

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

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl %2DH "Content%2DType: application/json" %2DH "X-TOKEN: $token" %2D%2Drequest POST %2D%2Ddata %27%7B"simpleDoc"%3A"doc","name"%3A"name","age"%3A"25"%7D%27 http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fdatabase%2Ftest%2Finventory%2Finsert' title='Launch'><button class="button1">Insert</button></a>


4. Delete from the Database

      ```
      DELETE http://localhost:3000/api/database/test/inventory/removeOne?query={"age": {"$gte": 1}}
      X-TOKEN: TOKEN

      Response:
            {
               "success": true,
               "count": 1
            }

      ```

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl %2DH "X-TOKEN: $token" %2D%2Drequest DELETE %27http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fdatabase%2Ftest%2Finventory%2FremoveOne%3Fquery%3D%7B%22age%22%3A%20%7B%22%24gte%22%3A%2025%7D%7D%27' title='Launch'><button class="button1">Delete</button></a>


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

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl %2DH "Content%2DType: application/json" %2DH "X-TOKEN: $token" %2D%2Drequest PUT %2D%2Ddata %27%7B%22%24set%22%3A%20%7B%22age%22%3A%2056%7D%7D%27 http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fdatabase%2Ftest%2Finventory%2FupdateOne%3Fquery%3D%7B%22age%22%3A%20%7B%22%24gte%22%3A%208%7D%7D' title='Launch'><button class="button1">Update</button></a>


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

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl %2Dg %2D%2Dheader "X-TOKEN: $token" %2D%2Drequest POST  %27http%3A%2F%2Flocalhost%3A3000%2Fapi%2Flogout%27$$cat token' title='Launch'><button class="button1">Logout</button></a>
