const express = require('express')
const mysqlConnection = require("../../config/mysql")

const router = express.Router();

router.get('/monitoreo', async (req,res) => {
    mysqlConnection.query('SELECT * FROM monitoreo ',
    (err,rows, fields) => {
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    })
})

module.exports = router;