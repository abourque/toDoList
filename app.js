const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items =[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res, next)=>{
    var today = new Date();
    var currentDay = today.getDay();
    var days = {
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday"
    }
    var theDay = days[currentDay];
    res.render("index", {kindOfDay: theDay, newListItems: items});
    
});

app.post("/", (req, res)=>{
    var item = req.body.newItem;
    items.push(item);
    console.log(items);
    res.redirect("/");
});

app.listen(3000, ()=>{
    console.log("listening on 3000");
});