var express = require('express');

var app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  console.log("working")
  var response = ""
  res.render('index.ejs', { response})

})

app.post('/', function (req, res) {
  console.log(req.body)
  response = req.body.userResponse
  res.render('index.ejs', {response})
})

app.set('view engine','ejs')
app.set('views','./veiws')

app.use(express.static('public'))

app.listen(3000, function () {
  console.log("server is on")
})