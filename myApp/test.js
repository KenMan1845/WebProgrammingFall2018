const express = require('express');
const People = require('./test');
const app = express();
const port = 3000;
const server = "localhost";
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", express.static(__dirname + "/../client/"));

app.use('/People', People);




app.listen(port);

console.log(`listening on: http://${server}:${port}`);