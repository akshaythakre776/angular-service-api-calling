var express = require('express');
wines = require('./src/server/routes/api');

var app = express();


// app.get('/wines', function(req, res) {
//    res.send([{name:'wine1'}, {name:'wine2'}]);
// });
// app.get('/wines/:id', function(req, res) {
//    res.send({id:req.params.id, name: "The Name", description: "description"});
// });
app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);

app.listen(3001);
console.log('Listening on port 3001...');