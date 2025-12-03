const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "webapp")));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "webapp/index.html"))
    res.end(console.log('it works'))
}).listen(8000, () => console.log("Running on port 8000, visit https://localhost:8000/ or http://127.0.0.1:8000/")); 