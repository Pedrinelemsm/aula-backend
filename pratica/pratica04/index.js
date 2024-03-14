const express = require('express');

const app = express();

app.get("/", function(req, res) {
    res.status(200).send("OI");
})

app.post("/", function(req, res){
    res.status(201).end();
})

app.put("/", function(req, res){
    res.status(200).end();
})


app.listen(3000, function() {
    console.log("API esta ON!")
})


module.exports = app;