const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const port = 5500;

const app = express();
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./router.js')(app, fs);

app.listen(port, () => {
  console.log(`Example app listening on port${port}`)
})