
var restify = require("restify");
var msgBuilder = require("botbuilder");
var callBuilder = require("botbuilder-calling");
var port = process.env.port || 3000;

var server = restify.createServer();
server.listen(port, function () {
    console.log("server is running on localhost :" + process.env.port);
});


function send(req, res,next) {
    res.send("Welcome to NodeJS Bot");
    //next();
}

server.get("/", send);

   /*                      
var msgConnector = new msgBuilder.ChatConnector({
    appId: "f126e5af-beaa-4774-8144-4d2e300df102",
    appPassword: "Phm137R0bCG9vu5rXgCc0pw"
});
var msgBot = new msgBuilder.UniversalBot(msgConnector);

var callConnector = new callBuilder.CallConnector({
    callbackUri: "https://skypecalling-demo.herokuapp.com/api/calls",
    appId: "f126e5af-beaa-4774-8144-4d2e300df102",
    appPassword: "Phm137R0bCG9vu5rXgCc0pw",
});
var callBot = new callBuilder.UniversalCallBot(callConnector);

server.post("/api/messages", msgConnector.listen());
server.post("/api/calls", callConnector.listen());

msgBot.dialog("/", function (session) {
    session.send("hello Shailendra");
});

callBot.dialog("/", function (session) {
    session.send("Hello Shailendra. How may I help you");
});
     */


