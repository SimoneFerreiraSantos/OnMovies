const session = require("express-session")
const mysqlSession = require("express-mysql-session")(session)

async function conecta(){
    const mysql = require("mysql2/promise")
    const conn = await mysql.createConnection({
        host: "localhost",
        user: "l42",
        password: "Usuario@1992",
        database:"projeto_video"
    })
    console.log("mySQL conectado!")
    global.connection = conn
    return connection
}

async function makeSession(app,opt){
    
    const dia = 1000 * 60 * 60 * 24;
    const min15 = 1000 * 60 * 60 / 4;
    const conectado = await conecta()

    const  sessionStore = new mysqlSession(opt,conectado)
    app.use(session({
        secret: "hrgfgrfrty84fwir767",
        saveUninitialized:false,
        store:sessionStore,
        cookie: { maxAge: dia},
        resave: false 
    }))

}

async function selectFilmes(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM projeto_video.filmes ORDER BY filmes_id DESC")
    return rows
}

async function selectSingle(id){
    const conectado = await conecta()
    const values = [id]
    const [rows] = await conectado.query("SELECT * FROM projeto_video.filmes WHERE filmes_id=?", values)
    return rows
}
async function selectPromocoes(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM projeto_video.filmes WHERE promo=1 ORDER BY filmes_id DESC")
    return rows
}

async function selectUsers(email,senha){
    const conectado = await conecta()
    const values = [email,senha]
    const [rows] = await conectado.query("SELECT * FROM projeto_video.usuarios WHERE email=? AND senha=?", values)
    return rows
}

async function selectChamados(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM projeto_video.contato WHERE chamado=1 ORDER BY contato_id DESC")
    return rows
}

async function selectCupons(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM projeto_video.cupom")
    return rows
}


async function updatePromocoes(promo,valor, id){
    const conectado = await conecta()
    const values = [promo,valor, id]
    return await conectado.query("UPDATE filmes SET promo=?, valor=? WHERE filmes_id=?", values)
   
}
async function updateProduto(titulo, categoria, ano, sinopse,imagem, promo, trailer, valor){
    const conectado = await conecta()
    const values = [titulo, categoria, ano, sinopse,imagem, promo, trailer, valor]
    return await conectado.query("UPDATE filmes SET titulo=?, categoria=?, ano=?, sinopse=?, imagem=?, promo=?, trailer=?, valor=? WHERE filmes_id=?", values)
   
}
async function insertFilmes(filme){
    const conectado = await conecta()
    const values = [filme.titulo, filme.categoria,filme.ano,filme.sinopse,filme.imagem, filme.promo, filme.trailer, filme.valor]
    return await conectado.query("INSERT INTO filmes (titulo,categoria,ano,sinopse,imagem,promo,trailer,valor) VALUES(?,?,?,?,?,?,?,?)", values)
   
}
async function insertUsuarios(usuario){
    const conectado = await conecta()
    const values = [usuario.nome,usuario.email,usuario.telefone,usuario.senha,usuario.tipo, usuario.adm]
    return await conectado.query("INSERT INTO usuarios (nome,email,telefone,senha,tipo,adm) VALUES(?,?,?,?,?,?)", values)
   
}
async function insertContato(contato){
    const conectado = await conecta()
    const values = [contato.nome,contato.email,contato.telefone,contato.assunto,contato.comentario,contato.chamado]
    return await conectado.query("INSERT INTO contato (nome,email,telefone,assunto,comentario,chamado) VALUES(?,?,?,?,?,?)", values)
   
}

async function insertCarrinho(carrinho){
    const conectado = await conecta()
    const values = [carrinho.filme,carrinho.valor,carrinho.qtdTelas,carrinho.imagem,carrinho.valor]
    const [rows]= await conectado.query("INSERT INTO carrinho (filme,valor,qtdTelas,imagem,subtotal) VALUES(?,?,?,?,?)", values)
    return rows
}
async function selectCarrinho(){
    const conectado = await conecta()
    const [rows]= await conectado.query("SELECT * FROM carrinho")
    return rows
   
}
async function deleteCarrinho(id){
    const conectado = await conecta()
    const values = [id]
    const [rows]= await conectado.query("DELETE FROM carrinho WHERE carrinho_id=?", values)
    return rows
}

async function updateCarrinho(qtdTelas,subtotal, total, id){
    const conectado = await conecta()
    const values = [qtdTelas,subtotal,id]
    const totalCarrinho = [total]
    const [rows]= await conectado.query("UPDATE carrinho SET qtdTelas=?, subtotal=? WHERE carrinho_id=?", values)
    const [rowTotal]= await conectado.query("UPDATE carrinho SET total=?", totalCarrinho)
    return rows, rowTotal
}

async function deleteAllCarrinho(){
    const conectado = await conecta()
    const [rows]= await conectado.query("DELETE FROM carrinho")
    return rows
}
//selectFilmes()

module.exports = {
    selectFilmes,
    selectChamados,
    selectSingle,
    selectPromocoes,
    selectCarrinho,
    selectUsers,
    selectCupons,
    insertFilmes,
    insertUsuarios,
    insertCarrinho,
    deleteCarrinho,
    deleteAllCarrinho,
    updatePromocoes,
    updateCarrinho,
    insertContato,
    makeSession,
    updateProduto
}
