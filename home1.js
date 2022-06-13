(async ()=>{
const express = require('express')
const app = express()
const db = require('./db.js')
const port = 3000
const url = require('url')
const bodyParser = require('body-parser')

app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


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
app.get("/promocoes", async (req, res) => {
    const consultaPromo = await db.selectPromocoes()
    res.render(`promocoes`,{
        filmes:consultaPromo
    })
})

app.get("/singleDeProduto", async(req, res) => {
    let q=url.parse(req.url,true).query
    const consultaSingle = await db.selectSingle(q.id)
    res.render(`singleDeProduto`,{
        filmesSingle:consultaSingle
    })
})
app.get("/gerenciaPromocoes", async(req, res) => {
        res.render(`adm/gerenciaPromocoes`,{
        filmes:consulta
    })
    let qs=url.parse(req.url,true).query
    await db.updatePromocoes(qs.promo,qs.id)
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
app.post("/cadastro", async(req, res) => {
    const info=req.body
    await db.insertUsuarios({
    nome:info.nome, 
    email:info.email,   
    telefone:info.telefone,
    senha:info.senha
    })
    res.redirect("/")
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
    res.render(`adm/relatorio-chamadas`)
})
app.get("/adm/dashboard", (req, res) => {
    res.render(`adm/dashboard`)
})
app.get("/adm/cadastro", (req, res) => {
    res.render(`adm/cadastroAdm`)
})
app.get("/adm/cadastroProdutos", (req, res) => {
    res.render(`adm/cadastroProd`)
})
app.post("/adm/cadastroProdutos", async (req, res) => {
    const info = req.body
    await db.insertFilmes({
        titulo:info.nomeFilme,
        categoria:info.categoria,
        ano:info.anoFilme,
        sinopse:info.descricao,
        imagem:info.capaFilme
    })
    res.redirect("/promocoes")
})

app.get("/adm/login", (req, res) => {
    res.render(`adm/loginAdm`)
})
app.listen(port, () => {
    console.log("servidor rodando")
})
})()