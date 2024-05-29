const express = require("express");
const app = express();
const port = 8080

app.use(express.static("."));

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.listen(port, function () {
    console.log("Click here to visit demo localhost:5566");
});
