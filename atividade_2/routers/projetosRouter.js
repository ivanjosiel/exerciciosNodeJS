function detalheProduto(req, res) {
    res.render("projetoDetalhe", {codigo: req.params.codigo})
}

module.exports = {detalheProduto}
