
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { Pool, Client } = require("pg");
const testConst = require("pg");
const cred = require('./dbconfig')

const credentials = {
  user: cred.user,
  host: cred.host,
  database: cred.database,
  password: cred.password,
  port: cred.port,
  ssl: cred.ssl
};
// let bdDict = JSON.parse(dbResponse)

function checkForContent(table='parent') {
  const client = new Client(credentials);
  client.connect();
  client.query("SELECT json_agg("+table+") FROM "+table, (err, res) =>{
    client.end()
    return res
  })
}

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.get('/dbTest', function(req, res){
  let query = req.query;
  res.sendFile(path.join(__dirname, 'build', 'dbTest.html'));
})
function getAllTheData(){
  const table = 'child'
  const client = new Client(credentials);
  client.connect()
  client.query("SELECT json_agg("+table+") FROM "+table)
  client.end()
}
app.get('/getDataNow',async function(req, res){
  const table = 'child'
  const client = new Client(credentials);
  client.connect()
  let a = await client.query("SELECT json_agg("+table+") FROM "+table)
  client.end()
  res.send(a.rows[0].json_agg)
})







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})