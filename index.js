// const mysql=require("mysql");
// const mysql1=require("mysql1");
// const connection=mysql.createConnection({
//     host: "3306",
//     user: "root",
//     password: "Ayush#12345",
// });

// //connect to the database
// connection.connect(function(error){
//     if(error) throw error
//     else console.log("connected to the database successfully")
// });

const { createPool } = require("mysql");
const mysql = require('mysql2')
const pool = createPool({
  host:"localhost",
  user:"root",
  password:"Ayush#12345",
  database:"loginCredential",
  connectionLimit :10
})

pool.query("show tables", (err, result, fields)=>{
    if (err) {return console.log(err);}
    return console.log(result);
      
   
     
}
)