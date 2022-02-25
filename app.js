const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

const posts = [{
  header1: "دانلود آهنگ دو دل عاشق بهنام بانی",
  header2 : "دانلود آهنگ جدید بهنام بانی دو تا دل عاشق",
  description1 : "هم اکنون شنونده سوپرایز ویژه ما باشید با ♫ دانلود اهنگ دوتا دل عاشق با صدای بهنام بانی به همراه تکست و بهترین کیفیت",
  description2 : "Download New Music BY : Behnam Bani | 2ta Dele Ashegh With Text And 2 Quality 320 And 128"
}]

app.get('/',function(req,res){
  res.render( 'home' , {posts : posts});
});

app.get('/compose-card',function(req,res){
  res.render('compose-card');
});

app.post('/compose-card',function(req,res){
  const card = {
    cardImage : req.body.card_image ,
    cardDescrption : req.body.card_descrption
  };
  res.redirect('/');
});

app.get('/compose-post',function(req,res){
  res.render('compose-post');
});

app.post('/compose-post',function(req,res){
  const post = {
    header1 : req.body.post_header1,
    header2 : req.body.post_header2,
    description1 : req.body.post_description1,
    description2 : req.body.post_description2
  }
  posts.push(post);
  res.redirect('/');
});

app.listen(3000 , function(req,res){
  console.log('Server is running and listen to port 3000');
});
