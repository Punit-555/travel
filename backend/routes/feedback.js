const router = express.Router();
const express = require('express');

const pool = require('../db');


// router.get("/feedback", async (req,res)=>{
//        try{
//            const result = await pool.query("select * from feedback");
//            console.log(result.rows);
//        } catch(err){
//         console.log(err);
//        }
//   })





module.exports  = router ; 