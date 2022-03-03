
const { Pool, Client } = require("pg");
const testConst = require("pg");
const express = require("express");
const cred = require('./dbconfig');

const credentials = {
  user: cred.user,
  host: cred.host,
  database: cred.database,
  password: cred.password,
  port: cred.port,
  ssl: cred.ssl
};


async function dbInit(){
    const client = new Client(credentials);
    await client.connect();
    dbInitParentTbl = 'CREATE TABLE parent (id_parent SERIAL PRIMARY KEY, name_parent TEXT, address_parent TEXT, description_parent TEXT)';
    dbInitEmployeeTbl = 'CREATE TABLE employee (id_employee SERIAL PRIMARY KEY, name_employee TEXT, address_employee TEXT, description_employee TEXT)';
    dbInitChildTbl = 'CREATE TABLE child (id_child SERIAL PRIMARY KEY, name_child TEXT, address_child TEXT, description_child TEXT)';
    dbInitPrivotParentChildTable = 'CREATE TABLE pivot_parent_child (id_parent_child SERIAL PRIMARY KEY, fk_child_id INT REFERENCES child(id_child) ON UPDATE CASCADE ON DELETE CASCADE, fk_parent_id INT REFERENCES parent(id_parent) ON UPDATE CASCADE ON DELETE CASCADE)';

    dbSampleDataChild = "INSERT INTO child (name_child, address_child, description_child) VALUES ('testChildName', 'testChildAddress', 'testChildDescription');";
    dbSampleDataParent = "INSERT INTO parent (name_parent, address_parent, description_parent) VALUES ('testParentName', 'testParentAddress', 'testParentDescription')";

    // await client.query(dbInitParentTbl, (err, res)=>{console.log(err, res);});
    // await client.query(dbInitEmployeeTbl, (err, res)=>{console.log(err, res);});
    // await client.query(dbInitChildTbl, (err, res)=>{console.log(err, res);});
    // await client.query(dbInitPrivotParentChildTable, (err, res)=>{console.log(err, res);});
    // await client.query(dbSampleDataChild, (err, res)=>{console.log(err, res);});
    // await client.query(dbSampleDataParent, (err, res)=>{console.log(err, res);});
}
async function addToDb(sqlString='select version()'){

  const client = new Client(credentials);
  await client.connect();
  await client.query(sqlString);
  await client.end();
}
async function addToDbLoop(table='child', counter=0){
  if(counter >= 0){
    const client = new Client(credentials);
    await client.connect();
    await client.query(`INSERT INTO ${table}(name_${table}, address_${table}, description_${table}) VALUES ('test${table}Name${counter}', 'test${table}Address${counter}', 'test${table}Description${counter}')`);
    await client.end();
    let counterTemp = counter-1;
    addToDbLoop(table, counterTemp);
  }
}

async function checkForContent(table='parent') {
  const client = new Client(credentials);
  await client.connect();
  const now = await client.query("SELECT * FROM "+table, (err, res)=> {
      console.log(err, res);
      client.end();
  });
}

async function letsDoSomeTesting(){
  const client = new Client(credentials);
  await client.connect();
  const now = await client.query("SELECT json_agg(child) FROM child", (err, res)=> {
  console.log(res.rows[0]);
  // console.log(res.rows[0]);
  let sampleDict2 = { "fuck": "this"}
  console.log(typeof sampleDict2);
  // console.log(sampleDict);
  client.end();
  return res.rows[0]
});
}


// Use a self-calling function so we can use async / await.
(async () => {
  letsDoSomeTesting();
  // await dbInit();
  // await checkForContent('child');
  // await addToDb(sqlTemp);
  // await addToDbLoop('parent', 9)
})();
