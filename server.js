
const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    // res.sendFile(__dirname+"/src1/App.js");
});

app.post("/",function(req,res){
    var main_url =req.body.main_url.toString();
    var email = req.body.email.toString();
    
    const data = {
        url: main_url,
        email: email
    };

    const outputFilePath = __dirname+'/output.json';

    // Write JSON data to file
    fs.writeFile(outputFilePath, JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('JSON data written to file');
    });

    res.send("Submitted");
});

app.listen(8000,function(){
    console.log("Server started at 8000");
});