var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';


// defined the route middle layer which will be executed before any other routes
// this route will be be used to print the type of HTTP request the particular route is referring to
// once the middle layer is defined, you must pass next() so that next router will get executed
router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

// sendFile function is a built-in function in Expressjs and is designed to send files to a web browser.
router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

// telling the Express to use the routes defined above
// the magic of express routing is we can assign the routes in order, so the last one will be executed
// when the incoming request is not matching any route. Well, for us, its the 404 case.
app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
