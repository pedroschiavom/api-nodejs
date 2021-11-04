const mysql = require('mysql')

const conexao = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user:'pedro',
    password: 'mcsjava123',
    database: 'api-usuarios',
    
})

module.exports = conexao