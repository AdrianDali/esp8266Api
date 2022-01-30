

const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'esp8266',

})
//console.log(config.dbUser);
mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return
    }else{
        console.log('conectado a la base de datos');
    }
});

module.exports = mysqlConnection;
