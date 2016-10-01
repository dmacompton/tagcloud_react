var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/bundle.min.js', function root(req, res) {
    res.sendFile(__dirname + '/build/bundle.min.js');
});

app.get('/data.json', function root(req, res) {
    res.sendFile(__dirname + '/build/data.json');
});

app.get('*', function root(req, res) {
    res.sendFile(__dirname + '/build/index.html');
});

app.listen(app.get('port'), function () {
    console.log('Express http://localhost:' + app.get('port'));
});