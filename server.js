var express = require("express")
var app = express()

var logger = require("./lib/logger")

app.use(logger)

app.use(express.static("static"))

app.get("/", function (req, res, next) {
    res.status(200).sendFile(__dirname + "/static/index.html")
})

app.get("/setup", function (req, res, next) {
    res.status(200).sendFile(__dirname + "/static/setup.html")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log(`Server is listening on port ${PORT}`);
})
