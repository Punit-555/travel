const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: "127.0.0.1",
  port: "5432",
  user: "postgres",
  password: "Punit@123",
  database: "neom",
});

const p = pool.query("Select * from feedback", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Databse Connected Succesfully! ");
  }
});


module.exports = pool;
