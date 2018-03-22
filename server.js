
var express = require('express');
var app = express();

var path = process.cwd();


app.use(express.static(path + '/public'));

app.get('/', function (req, res) {
   //res.sendFile(path.join(__dirname,'public', 'index.html'));
   res.sendFile(path + '/public/index.html');
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});