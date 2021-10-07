const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){

});

app.listen(3000, function(){
  console.log("Server running on port 3000.");
})
