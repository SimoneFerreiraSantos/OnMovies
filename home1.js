(async ()=>{
const express = require('express')
const app = express()
const db = require('./db.js')
const port = 3000
const url = require('url')

app.set("view engine","ejs")

app.use(express.static('onmovies'))
app.use('/imagens', express.static("imagens"))
app.use('/css', express.static("css"))
app.use('/js', express.static("js"))
app.use('/adm', express.static("adm"))

const consulta = await db.selectFilmes()
console.log(consulta[0])

app.get("/", (req, res) => {
    res.render(`home`,{
        filmes:consulta
    })
})

app.post("/", (req, res) => {
    res.render(`home`,{
        filmes:consulta
    })
})

app.get("/produtos", (req, res) => {
    res.render(`produtos`,{
        filmes:consulta
    })
})
app.get("/contato", (req, res) => {
    res.render(`contato`)
})
app.get("/promocoes", (req, res) => {
    res.render(`promocoes`,{
        filmes:consulta
    })
    
})
app.get("/singleDeProduto", async(req, res) => {
    let q=url.parse(req.url,true).query
    const consultaSingle = await db.selectSingle(q.id)
    res.render(`singleDeProduto`,{
        filmesSingle:consultaSingle
    })
})
app.get("/singlePreferencia", (req, res) => {
    res.render(`singlePreferencia`)
})
app.get("/perfilUsuario", (req, res) => {
    res.render(`perfil-usuario`)
})
app.get("/login", (req, res) => {
    res.render(`login`)
})
app.get("/cadastro", (req, res) => {
    res.render(`cadastro`)
})
app.get("/carrinho", (req, res) => {
    res.render(`carrinho`)
})
app.get("/adm", (req, res) => {
    res.render(`index`)
})
app.post("/adm", (req, res) => {
    res.render(`index`)
})
app.get("/adm/relatorioChamadas", (req, res) => {
    res.render(`relatorio-chamadas`)
})
app.get("/adm/dashboard", (req, res) => {
    res.render(`dashboard`)
})
app.get("/adm/cadastro", (req, res) => {
    res.render(`cadastroAdm`)
})
app.get("/adm/cadastroProdutos", (req, res) => {
    res.render(`cadastroProd`)
})
app.get("/adm/login", (req, res) => {
    res.render(`loginAdm`)
})
app.listen(port, () => {
    console.log("servidor rodando")
})
})()