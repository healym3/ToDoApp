const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

var items = [];

app.get("/", function(req, res) {
  let today = new Date();
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    dayOfWeek: day,
    newListItems: items
  });
});

app.post("/", function(req, res){
  console.log(req.body.newItem);
  items.push(req.body.newItem);


  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server running on port 3000.");
})
