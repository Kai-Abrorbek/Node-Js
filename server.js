console.log("Web Server ishga tushdi.");
const express = require("express");
const app = express();
const http = require("http");

// 1 Kirish Code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 Session Code

// 3 Views Code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing Code
app.post("/create-form", function(req, res){
  const list = req.headers;
  console.log(list);
  res.json({test: req.body});
})

app.get("/", function(req, res) {
  res.render("harid");
});

app.get("/hello", function(req, res){
  res.end(`<h1/ style="color:red">Hellow world</h1>`);
})

app.get("/gift", function(req, res){
  res.end(`<h1/ style="color:green">Siz Sovg'lar bolimidasiz!</h1>`);
})


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
  console.log("The server is running seccessfully on port: ", PORT);
});