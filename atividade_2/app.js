const express = require('express')
const app = express()
const projetosRouter = require('./routers/projetosRouter')
const handleBars = require("express-handlebars")

const porta = 3000

app.engine('handlebars', handleBars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/projeto/detalhe/:codigo', projetosRouter.detalheProduto)

app.get('/relatorio', projetosRouter.gerarRelatorioPDF)

app.get('/projetos', projetosRouter.listar)

app.listen(porta, () => {
    console.log('Servidor rodando na porta ' + porta + '!')
})
