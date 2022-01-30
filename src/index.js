const express = require('express')
const  routerApi = require('./routes')
const port = 3000

const app = express();

app.use(express.json())

app.get('/',(req,res) => {
    res.send("SERVIDOR INICIADO ")
})

routerApi(app)

app.listen(port, () =>{
    console.log('PUERTO DE LECTURA' + port);
})