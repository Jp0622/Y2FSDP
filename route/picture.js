const express = require("express");
var multer = require('multer');
var multipart = require("connect-multiparty");
var multipartMiddleware = multipart();
const picture = express.Router();
const models = require('../models');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `public/images/`)
    },
    filename: function (req, file, callback) {
        fileName = `${Date.now()}.png`
        callback(null, fileName);
    }
})
var uploadImg = multer({ storage: storage })

// upload image function
picture.post('/upload', uploadImg.single('file'), function (req, res, next) {
    // res.send({ 'img': `/img/${req.body.dir}/${fileName}` })
    console.log(req.file.path);
    res.json({code:200,message:'Upload Successful',path:req.file.path})
});
  


picture.post('/movie', async function (req, res, next) {
    var movie = await models.movie.create(req.body)
    res.json({movie:movie,code:200})
})


picture.get("/getMovie", async (req, res) => {
  var movie = await models.movie.findAll()
  res.json({data:movie,code:200})
});

picture.get("/getMovieAsJson", async (req, res) => {
    //   console.log(req.query);
    var movie = await models.movie.findAll()
    res.send(JSON.stringify(movie));
});

picture.get("/getMovieById/:id", async (req, res) => {
    var movie = await models.movie.findByPk(req.params.id)
    res.json({code:200,data: movie})
});


picture.post("/editMovie/:id",async (req, res) => {
    var movie = await models.movie.findByPk(req.params.id)
    movie.update(req.body)
    res.json({msg:'Changed',code:200})
});

picture.post("/deleteMovie/:id", async (req, res) => {
  var movie = await models.movie.findByPk(req.params.id)
  movie.destroy()
  res.json({msg:'Delted',code:200})
});

module.exports = picture
