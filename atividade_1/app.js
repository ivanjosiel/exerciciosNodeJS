const express = require('express')
const app = express()

const porta = 3000


app.get('/cidade', (_req, res) => {
    res.json({
        "cidades": [
            {
                "nome": "Juazeiro do Norte",
                "total": 276264
            },
            {
                "nome": "Crato",
                "total": 133031
            },
            {
                "nome": "Barbalha",
                "total": 61228
            },
        ]
    })
})

app.get('/cadastro', (_req, res) => {
    res.send(`<!DOCTYPE html>
        <html>
        <body>
        
        <h2>Formulário HTML</h2>
        
        <form>
          <label>Meu texto:</label><br>
          <input type="text"><br><br>
          <input type="submit" value="Enviar">
        </form> 

        </body>
        </html>`)
})

app.listen(porta, () => {
    console.log('Servidor rodando na porta ' + porta + '!')
})
