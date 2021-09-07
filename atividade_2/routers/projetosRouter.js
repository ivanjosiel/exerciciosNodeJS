const PDFKit = require("pdfkit")
const fs = require("fs")
const con = require('../models/conexao')

function detalheProduto(req, res) {
    res.render("projetoDetalhe", { codigo: req.params.codigo })
}

async function listar(req, res) {
    await con.con.connect
    await con.con.query('SELECT nome, descricao FROM projeto', (erro, resultado) => {
        res.render("projetoLista", { resultado: resultado.rows })
    })
}

function gerarRelatorioPDF(req, res) {
    const pdf = new PDFKit()
    pdf.text("Gerando PDF de teste")
    pdf.end()
    pdf.pipe(fs.createWriteStream('teste.pdf').on("finish", () => {
        res.download("./teste.pdf")
    }))
}

module.exports = { detalheProduto, gerarRelatorioPDF, listar }
