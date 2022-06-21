(async () => {
    const express = require('express')
    const app = express()
    const db = require('./db.js')
    const port = 3000
    const url = require('url')
    const bodyParser = require('body-parser')
    const session = require("express-session")
    const mysqlSession = require("express-mysql-session")(session)

    app.set("view engine", "ejs")
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())


    app.use(express.static('onmovies'))
    app.use('/imagens', express.static("imagens"))
    app.use('/css', express.static("css"))
    app.use('/js', express.static("js"))
    app.use('/administrador', express.static("administrador"))

    var userInfo=''
    app.locals.info = {
    user:userInfo
    }

    const options ={
        expiration: 10800000,
        createDatabaseTable: true,
        schema: {
            tableName: 'session_tbl',
            columnNames: {
                session_id: 'session_id',
                expires: 'expires',
                data: 'data'
            }
        }  
    }

    await db.makeSession(app,options,session)

    function checkFirst(req, res, next) {
        if (!req.session.userInfo) {
          res.redirect('/promocoes');
        } else {
          next();
        }
      }
    
     function checkAuth(req, res, next) {
        if (!req.session.userInfo || req.session.userInfo[1] == 0) {
          res.render('usuarioNaoAutorizado');
        } else {
          next();
        }
      }

    app.get("/", checkFirst, async (req, res) => {
        const consulta = await db.selectFilmes()
        res.render(`home`, {
            filmes: consulta
        })
    })

    app.post("/", checkFirst, async (req, res) => {
        const consulta = await db.selectFilmes()
        res.render(`home`, {
            filmes: consulta
        })
    })

    app.get("/produtos", async (req, res) => {
        const consulta = await db.selectFilmes()
        res.render(`produtos`, {
            filmes: consulta
        })
    })
    app.get("/contato", (req, res) => {
        res.render(`contato`)
    })

    app.post("/contato",async (req, res) => {
        const info=req.body
        
        await db.insertContato({
            nome:info.nomeContato,
            email:info.emailContato,
            telefone:info.telefoneContato,
            assunto:info.assunto,
            comentario:info.comentario,
            chamado:info.chamado
        })
        res.redirect(`/promocoes`)
    })

    app.get("/promocoes", async (req, res) => {
        const consultaPromo = await db.selectPromocoes()
        res.render(`promocoes`, {
            filmes: consultaPromo
        })
    })

    app.get("/singleDeProduto", async (req, res) => {
        let q = url.parse(req.url, true).query
        const consultaSingle = await db.selectSingle(q.id)
        const consulta = await db.selectFilmes()
        res.render(`singleDeProduto`, {
            filmes: consulta,
            filmesSingle: consultaSingle
        })
    })

    app.get("/gerenciaPromocoes", checkAuth, async (req, res) => {
        const consulta = await db.selectFilmes()
        let qs = url.parse(req.url, true).query
        await db.updatePromocoes(qs.promo, qs.valor, qs.id)
        if (!qs.promo) {
            res.render(`adm/gerenciaPromocoes`, {
                filmes: consulta,
            })
        } else {
            res.redirect('/promocoes')
        }
    })

    app.get("/singlePreferencia", (req, res) => {
        res.render(`singlePreferencia`)
    })
    app.get("/perfilUsuario",checkFirst, (req, res) => {
        res.render(`perfil-usuario`)
    })
    app.get("/login", (req, res) => {
        res.render(`login`)
    })
    
    app.use('/logout', function (req, res) {
        req.app.locals.info = {}
        req.session.destroy()
        res.clearCookie('connect.sid', { path: '/' });
        res.redirect("/login") 
     
    })
    app.post("/login", async (req,res)=>{
        const {email,senha} = req.body
        const logado = await db.selectUsers(email,senha)
        if(logado != ""){
        req.session.userInfo = [email, logado[0].adm]
        userInfo = req.session.userInfo
        req.app.locals.info.user= userInfo
        userInfo[1] == 0 ? res.redirect('/') : res.redirect('/adm')
        } else {res.render("loginNaoConfere")}
    })

    app.get("/cadastro", (req, res) => {
        res.render(`cadastro`)
    })
    app.post("/cadastro", async (req, res) => {
        const info = req.body
        await db.insertUsuarios({
            nome: info.nome,
            email: info.email,
            telefone: info.telefone,
            senha: info.senha,
            tipo: info.tipo,
            adm: 0
        })
        res.redirect("/produtos")
    })
    app.get("/carrinho", async (req, res) => {
        const consulta = await db.selectFilmes()
        const consultaCarrinho = await db.selectCarrinho()
        const consultaCupom = await db.selectCupons()
        res.render(`carrinho`,{
        carrinho:consultaCarrinho,
        filmes:consulta,
        cupons:consultaCupom
        })
    })
    app.post("/carrinho", async (req, res) => {
        const info = req.body
        await db.insertCarrinho({
            filme: info.filme,
            valor: info.valor,
            qtdTelas: info.qtdTelas,            
            imagem: info.imagem     
        })
        res.send(info)
    })
    app.post("/delete-carrinho", async (req, res) => {
        const info = req.body
        await db.deleteCarrinho(info.id)
        res.send(info)
    })
    app.post("/delete-all-carrinho", async (req, res) => {
        const info = req.body
        await db.deleteAllCarrinho()
        res.send(info)
    })

    app.post("/atualiza-carrinho", async (req, res) => {
        let info = req.body
        await db.updateCarrinho(info.qtdTelas, info.subtotal, info.total, info.id)
        res.send(info)
    })

    app.get("/adm", checkAuth, (req, res) => {
        res.render(`adm/index`,{
            titulo: "Início"
        })
    })
    app.post("/adm", checkAuth, (req, res) => {
        res.render(`adm/index`,{
            titulo: "Início"
        })
    })
    app.get("/adm/relatorioChamadas",checkAuth, async(req, res) => {
        const consulta = await db.selectFilmes()
        const consultaChamados = await db.selectChamados()
        res.render(`adm/relatorio-chamadas`,{
            filmes:consulta,
            chamados:consultaChamados
        })
    })
    app.get("/adm/dashboard", checkAuth, async(req, res) => {
        const consulta = await db.selectFilmes()
        res.render(`adm/dashboard`,{
            filmes:consulta
        })
    })
    app.get("/adm/cadastro", checkAuth,(req, res) => {
        res.render(`adm/cadastroAdm`,{
            titulo: "Cadastro Adm"
        })
    })

    app.post("/adm/cadastro", checkAuth, async(req, res) => {
        const info = req.body
        await db.insertUsuarios({
            nome: info.nome,
            email: info.email,
            senha: info.senha,
            tipo: info.nivel,
            adm: 1
        })
        res.redirect("/produtos")
    })
    app.get("/adm/cadastroProdutos", checkAuth, (req, res) => {
        res.render(`adm/cadastroProd`,{
            titulo: "Cadastro Produto"
        })
    })
    app.get("/adm/relatorioProdutos", checkAuth, async (req, res) => {
        const consulta = await db.selectFilmes()
        res.render(`adm/relatorioProdutos`,{
            titulo: "Relatorio Produto",
            filmes: consulta
        })
    })
    app.post("/adm/cadastroProdutos",checkAuth, async (req, res) => {
        const info = req.body
        await db.insertFilmes({
            titulo: info.nomeFilme,
            categoria: info.categoria,
            ano: info.anoFilme,
            sinopse: info.descricao,
            imagem: info.capaFilme,
            promo: info.promo,
            trailer: info.trailer,
            valor:info.preco
        })
        if(info) {
            res.redirect('/produtos')
        } 
    })
    // app.get("/adm/login", (req, res) => {
    //     res.render(`adm/loginAdm`)
    // })
    app.listen(port, () => {
        console.log("servidor rodando")
    })
})()