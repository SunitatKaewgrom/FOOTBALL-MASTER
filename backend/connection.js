// connect to mysql localhost port 3307 with mysql2 package
const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '@Devel0per2024',
//     database: 'Football',
//     port: 3307
// });

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '@Devel0per2024',
    database: 'Football',
    port: 3307,
    connectionLimit: 10
  });


// connection.connect((err) => {
//     if (err) {
//         // console.log('Error connecting to Db');
//         return;
//     }
//     // console.log('Connection established');
// });

module.exports = connection;