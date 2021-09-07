const PDFKit = require("pdfkit")
const fs = require("fs")
const con = require('../models/conexao')

function detalheAutor(req, res) {
    res.render("autorDetalhe", { codigo: req.params.id })
}

async function listar(req, res) {
    res.render("autorLista", {
        resultado: [
            { "nome": "José", "sobrenome": "Geraldo" },
            { "nome": "Daniel", "sobrenome": "Hardman" },
            { "nome": "Jackson", "sobrenome": "Anderson" },
        ]
    })
}


module.exports = { detalheAutor, listar }
