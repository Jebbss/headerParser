var express = require('express')
var app = express()

app.get('/', function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  lang =  req.headers["accept-language"].split(',')[0];
  system =  req.headers['user-agent'].split(/[\(\)]/)[1];
  res.send({"ipaddress":ip,"language":lang,"system":system})
})

app.listen(8000, function () {
  console.log('Listening on port 8000!')
})
