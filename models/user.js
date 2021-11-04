const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class User{
    create(user,res){
        const data = moment().format('YYYY-MM-DD HH:MM:SS')
        const creation_date = moment(user.creation_date,'DD-MM-YYYY').format('YYYY-MM-DD HH:MM:SS')

        const dateIsValid = moment(creation_date).isSameOrAfter(data)
        const userIsValid = user.name.length >= 4

        const validacoes = [
            {
                nome: 'creation_date',
                valido: dateIsValid,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'name',
                valido: userIsValid,
                mensagem: 'Cliente deve ter pelo menos 4 caracteres'
            }
        ]

        const errors = validacoes.filter( campo => !campo.valido)
        const errorsExists = errors.length

        if(errorsExists){
            res.status(400).json(errors)
        } else {
            const userCreated = {...user,creation_date}
            const sql = 'INSERT INTO user SET ? '
    
            conexao.query(sql,userCreated,(erro,results) => {
                if (erro){
                   res.status(400).json(erro)
                } else {
                   res.status(201).json(results)
                }
            })
        }
        
    }

    list(res){
        const sql = 'SELECT * FROM user'

        conexao.query(sql,(erro, results) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(results)
            }
        })
    }

    searchById(id,res){
        if(values.creation_date){
            values.data = moment(values.creation_date,'DD-MM-YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        const sql = `SELECT * FROM user WHERE id =${id}`

        conexao.query(sql,(erro,results) => {
            const user = results[0]
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(user)
            }
        })
    }

    changeById(id,values,res){
        const sql = 'UPDATE user SET ? WHERE id=?'

        conexao.query(sql,[values,id],(erro,results) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(results)
            }
        })
    }

    deleteById(id,res){
        const sql = 'DELETE FROM user WHERE id=? '

        conexao.query(sql,id, (erro,results)=>{
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(results)
            }
        })
    }
}

module.exports = new User