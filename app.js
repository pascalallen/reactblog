var express = require("express");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,"/public")));

app.listen(7777,function(){
    console.log("Started listening on port", 7777);
});

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});