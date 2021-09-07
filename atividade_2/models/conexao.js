const {Pool} = require("pg")

const con = new Pool({
    host: 'kesavan.db.elephantsql.com',
    user: 'user',
    password: 'replace_secrets',
    port: '5432',
    database: 'db'
})

module.exports = {con}
