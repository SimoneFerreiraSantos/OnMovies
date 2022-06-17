async function conecta(){
    const mysql = require("mysql2/promise")
    const conn = await mysql.createConnection({
        host: "localhost",
        user: "s22",
        password: "Gugu1012@",
        database:"projeto_video"
    })
    console.log("mySQL conectado!")
    global.connection = conn
    return connection
}

//conecta()

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
async function updatePromocoes(promo,id){
    const conectado = await conecta()
    const values = [promo,id]
    return await conectado.query("UPDATE filmes SET promo=? WHERE filmes_id=?", values)
   
}
async function insertFilmes(filme){
    const conectado = await conecta()
    const values = [filme.titulo, filme.categoria,filme.ano,filme.sinopse,filme.imagem, filme.promo, filme.trailer]
    return await conectado.query("INSERT INTO filmes (titulo,categoria,ano,sinopse,imagem,promo,trailer) VALUES(?,?,?,?,?,?,?)", values)
   
}
async function insertUsuarios(usuario){
    const conectado = await conecta()
    const values = [usuario.nome,usuario.email,usuario.telefone,usuario.senha]
    return await conectado.query("INSERT INTO usuarios (nome,email,telefone,senha) VALUES(?,?,?,?)", values)
   
}
async function insertContato(contato){
    const conectado = await conecta()
    const values = [contato.nome,contato.email,contato.telefone,contato.assunto,contato.comentario,contato.chamado]
    return await conectado.query("INSERT INTO contato (nome,email,telefone,assunto,comentario,chamado) VALUES(?,?,?,?,?,?)", values)
   
}

async function insertCarrinho(carrinho){
    const conectado = await conecta()
    const values = [carrinho.filme,carrinho.valor,carrinho.qtdTelas,carrinho.imagem]
    const [rows]= await conectado.query("INSERT INTO carrinho (filme,valor,qtdTelas,imagem) VALUES(?,?,?,?)", values)
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

async function deleteAllCarrinho(){
    const conectado = await conecta()
    const [rows]= await conectado.query("DELETE FROM carrinho")
    return rows
}
//selectFilmes()

module.exports = {
    selectFilmes,
    selectSingle,
    selectPromocoes,
    selectCarrinho,
    selectUsers,
    insertFilmes,
    insertUsuarios,
    insertCarrinho,
    deleteCarrinho,
    deleteAllCarrinho,
    updatePromocoes,
    insertContato
}
