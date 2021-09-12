const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const handleBars = require("express-handlebars")
const methodOverride = require("method-override")

const porta = 3000

app.engine('handlebars', handleBars({defaultLayout: null}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride('_method', {methods: ['GET', 'POST', 'PUT', 'DELETE']}))

app.get('/projeto/form', (res, req) => {req.render('formView')})

app.put('/projeto/atualizar', (req, res) => {
    res.render('mensagens', {nome: req.body.nome, cpf: req.body.cpf})
})

app.listen(porta, () => {
    console.log('Servidor rodando na porta ' + porta + '!')
})
