//the below varibales need to be installed using npm install.
const faker = require('faker');
const mysql = require("mysql");


const connection = mysql.createConnection({
    host:'localhost',
    user:'zootechdrum',
    database:'join_us'
})

let q = 'SELECT CURTIME() AS time, CURDATE() AS date, NOW() AS now'

connection.query(q, function (error, results, fields) {
    if (error) throw error;
    console.log(results[0].time);
});
