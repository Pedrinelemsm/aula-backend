const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log("API esta online")
});

module.exports = app; 