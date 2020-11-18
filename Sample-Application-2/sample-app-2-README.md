
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

    
<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl %2D%2Dheader "Content%2DType: application/json" %2D%2Drequest POST %2D%2Ddata %27%7B"username"%3A"","password"%3A"","hosts"%3A%5B%7B"host"%3A"a079e195a0638452a970fcf120de033c-1333340820.us-west-2.elb.amazonaws.com","port"%3A 27017%7D%5D%7D%27 http%3A%2F%2Flocalhost%3A3000%2Fapi%2Flogin' title='Launch'><button class="button1">Login</button></a>

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

   
<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl %2Dg %2D%2Dheader "X-TOKEN: 4299c7e1-d63a-4e42-8f4a-b0eec12367fe" %2D%2Drequest GET  %27http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fdatabase%2Ftest%2Finventory%2Ffind%3Fquery%3D%7B%7D%27$$cat token' title='Launch'><button class="button1">Query</button></a>



http://localhost:3000/api/database/test/inventory/find?query={}

3. Logout (to destroy the connexion on the server side) ! 

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

<a href='didact://?commandId=vscode.didact.sendNamedTerminalAString&text=T2$$curl %2Dg %2D%2Dheader "X-TOKEN: 4299c7e1-d63a-4e42-8f4a-b0eec12367fe" %2D%2Drequest POST  %27http%3A%2F%2Flocalhost%3A3000%2Fapi%2Flogout%27$$cat token' title='Launch'><button class="button1">Logout</button></a>
