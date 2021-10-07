const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var items = [];

app.get("/", function(req, res) {
  var today = new Date();
  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    dayOfWeek: day,
    newListItems: items
  });
});

app.post("/", function(req, res){
  console.log(req.body.newItem);
  items.push(req.body.newItem);
  for(var j = 0; j < items.length; j++){
    console.log(items[j]);
  };

  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server running on port 3000.");
})
