const express = require('express')
const temperatura = require('./temperatura.router')

function routerApi(app){
    const router = express.Router();
    app.use('/api/monitoreo', router)
    router.use('/temperatura', temperatura)
}

module.exports = routerApi