// var express = require('express');

// var app = express();

// var bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// app.get('/', function (req, res) {
//   console.log("working")
//   var pasword = ""
//   res.render('index.ejs', { pasword})

// })

// app.post('/', function (req, res) {
//   console.log(req.body)
//   pasword = req.body.userpasword
//   res.render('index.ejs', {pasword})
// })

// app.set('view engine','ejs')
// app.set('views','./veiws')

// app.use(express.static('public'))

// app.listen(3000, function () {
//   console.log("server is on")
// })