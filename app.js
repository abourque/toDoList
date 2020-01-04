const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items =[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res, next)=>{
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = new Date();
    var currentDay = today.toLocaleDateString("en-US", options);
    // var days = {
    //     1 : "Monday",
    //     2 : "Tuesday",
    //     3 : "Wednesday",
    //     4 : "Thursday",
    //     5 : "Friday",
    //     6 : "Saturday",
    //     7 : "Sunday"
    // }
    // var theDay = days[currentDay];

    res.render("list", {kindOfDay: currentDay, newListItems: items});
    
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