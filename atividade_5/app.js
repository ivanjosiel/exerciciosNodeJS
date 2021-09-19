const express = require('express')
const app = express()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const porta = 3000

app.get('/alunos/todos', (res, req) => {
    let alunos = [
        { 'nome': "José dos Santos", 'turma': '2020.1' },
        { 'nome': "Maria Silva", 'turma': '2021.2' },
        { 'nome': "Daniel Lima", 'turma': '2020.2' },
    ]
    req.json(alunos)
})

app.get('/moeda/:valor_real', (req, res) => {
    let url = 'https://economia.awesomeapi.com.br/last/USD-BRL'
    fetch(url).
    then( (dados) => {
        return dados.json()
    }).
    then( (dados) => {
        console.log(dados)
        let valorConvertido = dados.USDBRL.ask / req.params.valor_real
        res.json({'valor': valorConvertido})
    })
})

app.listen(porta, () => {
    console.log('Servidor rodando na porta ' + porta + '!')
})
