const express = require('express');
const credentials = require('./dbconfig')
const app = express();
const port = 3000;
const path = require('path');
const { json } = require('express');



app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  let query = req.query()
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.get('/dbTest', function(req, res){
  let query = req.query;
  console.log(query);
  res.sendFile(path.join(__dirname, 'build', 'dbTest.html'));
})

app.get('/getData', function(req, res){
  let query = req.query
  let sampleJson = {test: `${query.name}`}
  let sampleString = 'testString 1'
  console.log(query)
  res.send(sampleJson)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})