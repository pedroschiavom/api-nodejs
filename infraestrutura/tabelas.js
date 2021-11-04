class Tabelas {
    init(conexao){
       this.conexao = conexao

       this.createUser()
    }

    createUser(){
        const sql = 'CREATE TABLE IF NOT EXISTS user (id int NOT NULL AUTO_INCREMENT, name varchar(50) NOT NULL, email varchar(30), creation_date datetime NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql,(erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Table user created with sucess')
            }
    })

    }
}


module.exports = new Tabelas