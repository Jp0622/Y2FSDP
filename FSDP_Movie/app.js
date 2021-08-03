const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
var path = require('path');

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, mytoken");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Authorization");

  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  if (req.method == "OPTIONS") res.sendStatus(200);
  else next();
});

var hbs = require('hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.set('view engine', '.hbs');


app.use(express.json());
app.use(express.urlencoded())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname + "")));

const page = require('./route/page')
const user = require('./route/user')
const admin = require('./route/admin')
const picture = require('./route/picture')

app.use('/',page)
app.use('/api/user',user)
app.use('/api/admin',admin)
app.use("/api/picture", picture)


app.listen(3000, () => console.log("Server running on port 3000"));
