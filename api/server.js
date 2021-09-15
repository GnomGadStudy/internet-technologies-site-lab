const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require("body-parser");

require('dotenv').config()

const { PORT, HOST } = process.env;

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '../my-app/dist')));

app.get('*',(req,res)=>{
  res.send(404)
});


app.listen(PORT, HOST, () => {
    console.log(`Server listening on the http://${HOST}:${PORT}`);
});