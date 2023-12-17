const express = require("express");
const app = express();
const path = require("path");
require("./db/connection.js");
const router = require('./routes/router.js');
const cors = require('cors');
const cookiParser = require("cookie-parser");
const port = 8009;



// app.get("/",(req, res)=>{
//     res.status(201).json("Server is created ")
// });

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "client", "build")));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });

app.listen(port, ()=>{
    console.log(`Server start at port no: ${port}`);
})