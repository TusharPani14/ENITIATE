Complete Authentication || JSW Authentication || Password Hashing || Routing || API fetching in MERN Stack 

// Project Setup

First, let's associate this project directory .
    You can create multiple project aliases by vs code,
    but for now we'll set up a default project.
    to setup for the project open the vs code and type "npx create-react-app my-app"
    install the dependencies using the npm module

    then run the command "npm start in terminal" to start the server


    // Database is used for storing the data
    mongoDB is used here for real time database 

    //Hosting Setup

    for hosting the website in vercel the below steps are followed:
  STEP 1:
    You should have Git Hub account and attach it to Vercel.

STEP 2:
  In frontend files change http://localhost:1000 path to `${window.location.origin}`.
  (do this step for all the routes exist in your frontend file.)

STEP 3:
  In terminal run command npm run build in frontend file.

  STEP 4:
If in .gitignore file, build is written somewhere then erase or remove it.
STEP 5:
Close your code editor and put the frontend file into the backend file.
STEP 6:
Now open the editor within backend folder and open app.js file or index.js file. We need to write some code here 
which is given below :)
npm i path ------------------ write this in terminal

some changes required in server side page that is index.js
Index.js/app.js file code :
const path = require("path");
  app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });

  
Now, make vercel.json file in backend folder and write the below code in it.
  
{
  "builds": [
{
"src": "./app.js",
"use": "@vercel/node"
}
],
"routes": [
{
"src": "/.*",
"dest": "app.js"
}
]
}


