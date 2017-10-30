var express = require('express');

var app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: true
}));

var login = ""
var trying = ""
var correct = "{ userName: 'pi, ip' }"
var userName = {}

app.get('/', function (req, res) {
  console.log("working")
  res.render('index.ejs', { userName})
    login = req.body.userName
  console.log(correct)
})

var answer = ""
if (login = correct ){
 answer  = "yes";
} else {
	answer = "no";
}

app.post('/', function (req, res) {
  console.log(req.body)
  res.render('index.ejs', {answer})
  console.log(answer)
})

app.set('view engine','ejs')
app.set('views','./veiws')

app.use(express.static('public'))

app.listen(3000, function () {
  console.log("server is on")
})