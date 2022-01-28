const mysql = require('mysql');



const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password:'root123',
    database:"EXAM2",


});


exports.db = db;
