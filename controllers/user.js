const User = require('../models/user')

module.exports = app => {
    app.get('/user', (req,res) => {
        User.list(res)
    })

    app.get('/user/:id', (req,res) => {
        const id = parseInt(req.params.id)
        
        User.searchById(id,res)
    })

    app.post('/user', (req,res) => {
        const user = req.body
        
        User.create(user,res)
    })

    app.post('/user/:id', (req,res) => {
        const id = parseInt(req.params.id)
        const values = req.body

        User.changeById(id,values,res)

    })

    app.delete('/user/:id', (req,res) => {
        const id = parseInt(req.params.id)

        User.deleteById(id,res)
    })
}