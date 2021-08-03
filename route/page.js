const express = require("express");
const page = express.Router();

page.get('/', function(req, res, next) {
    res.render('login');
});
  
page.get('/register', function(req, res, next) {
  res.render('register');
});

page.get('/index', function(req, res, next) {
  res.render('index');
});

page.get('/setup', function(req, res, next) {
  res.render('setup');
});

page.get('/admin', function(req, res, next) {
  res.render('admin');
});

page.get('/manage', function(req, res, next) {
  res.render('manage');
});

page.get('/upload', function(req, res, next) {
  res.render('upload');
});

module.exports = page
  