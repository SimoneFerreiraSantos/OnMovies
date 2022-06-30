const express = require('express')
const app = express()
const port = 8080

app.use(express.static('onmovies'))
app.use('/imagens', express.static("imagens"))
app.use('/css', express.static("css"))
app.use('/js', express.static("js"))
app.use('/adm', express.static("administrador"))

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/docs/index.html`)
})
app.post("/", (req, res) => {
    res.sendFile(`${__dirname}/docs/index.html`)
})
app.get("/produtos", (req, res) => {
    res.sendFile(`${__dirname}/docs/produtos.html`)
})
app.get("/contato", (req, res) => {
    res.sendFile(`${__dirname}/docs/contato.html`)
})
app.get("/promocoes", (req, res) => {
    res.sendFile(`${__dirname}/docs/promocoes.html`)
})
app.get("/singleDeProduto", (req, res) => {
    res.sendFile(`${__dirname}/docs/singleDeProduto.html`)
})
app.get("/singlePreferencia", (req, res) => {
    res.sendFile(`${__dirname}/docs/singlePreferencia.html`)
})
app.get("/perfilUsuario", (req, res) => {
    res.sendFile(`${__dirname}/docs/perfil-usuario.html`)
})
app.get("/login", (req, res) => {
    res.sendFile(`${__dirname}/docs/login.html`)
})
app.get("/cadastro", (req, res) => {
    res.sendFile(`${__dirname}/docs/cadastro.html`)
})
app.get("/carrinho", (req, res) => {
    res.sendFile(`${__dirname}/docs/carrinho.html`)
})
app.get("/adm", (req, res) => {
    res.sendFile(`${__dirname}/administrador/index.html`)
})
app.post("/adm", (req, res) => {
    res.sendFile(`${__dirname}/administrador/index.html`)
})
app.get("/adm/relatorioChamadas", (req, res) => {
    res.sendFile(`${__dirname}/administrador/docs/relatorio-chamadas.html`)
})
app.get("/adm/dashboard", (req, res) => {
    res.sendFile(`${__dirname}/administrador/docs/dashboard.html`)
})
app.get("/adm/cadastro", (req, res) => {
    res.sendFile(`${__dirname}/administrador/docs/cadastroAdm.html`)
})
app.get("/adm/cadastroProdutos", (req, res) => {
    res.sendFile(`${__dirname}/administrador/docs/cadastroProd.html`)
})
app.get("/adm/login", (req, res) => {
  res.sendFile(`${__dirname}/administrador/docs/login.html`)
})
app.listen(port, () => {
    console.log("servidor rodando")
})
