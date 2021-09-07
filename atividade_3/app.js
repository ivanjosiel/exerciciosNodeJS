const express = require('express')
const app = express()
const autorRouter = require('./routers/autorRouter')
const handleBars = require("express-handlebars")

const porta = 3000

app.engine('handlebars', handleBars({defaultLayout: 'mainLayout'}))
app.set('view engine', 'handlebars')

app.get('/autor/detalhe/:id', autorRouter.detalheAutor)


app.get('/autor/lista', autorRouter.listar)

app.listen(porta, () => {
    console.log('Servidor rodando na porta ' + porta + '!')
})
