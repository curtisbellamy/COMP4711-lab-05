const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser')
const fs = require('fs');
const http = require('http');
const port=process.env.PORT || 3000



app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/Lab4.html'));
});

app.listen(3000, function(){
  console.log('Server started on port 3000...');
});


app.post('/artist/add', (req, res) => {
  var artist = {
    name: req.body.artist_name,
    info: req.body.artist_info,
    img: req.body.artist_img

  };



  fs.readFile(path.join(__dirname + '/info.txt'), (err, data) => {
    if (err) {
      console.log(err);
      obj_arr = [];
    } else {

      obj_arr = JSON.parse(data);

    }
    obj_arr.push(artist)

    fs.writeFileSync("info.txt", JSON.stringify(obj_arr));

    res.redirect(301, '/');

  });
});

app.get('/getData', (req, res) => {
  console.log("---------------------------------")
  var data = fs.readFileSync(path.join(__dirname + '/info.txt'));
  var obj = JSON.parse(data);
  res.json(obj);
});


app.post('/artist/delete/:id', (req, res) => {

  fs.readFile(path.join(__dirname + '/info.txt'), (err, data) => {
    if (err) {
      obj_arr = [];
    } else {

      obj_arr = JSON.parse(data);
    }
    obj_arr.splice(req.param.id, 1);

    fs.writeFileSync("info.txt", JSON.stringify(obj_arr));

    res.redirect(301, '/');
  });
})



