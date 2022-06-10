async function conecta(){
    const mysql = require("mysql2/promise")
    const conn = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Roque123$#@!",
        database:"projeto_video"
    })
    console.log("mySQL conectado!")
    global.connection = conn
    return connection
}

//conecta()

async function selectFilmes(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM projeto_video.filmes")
    return rows
}

async function selectSingle(id){
    const conectado = await conecta()
    const values = [id]
    const [rows] = await conectado.query("SELECT * FROM projeto_video.filmes WHERE filmes_id=?", values)
    console.log(rows)
    return rows
}
async function selectPromocoes(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM projeto_video.filmes WHERE promo=1")
    return rows
}
async function updatePromocoes(promo,id){
    const conectado = await conecta()
    const values = [promo,id]
    return await conectado.query("UPDATE filmes SET promo=? WHERE filmes_id=?", values)
   
}
//selectFilmes()

module.exports = {selectFilmes,selectSingle,selectPromocoes,updatePromocoes}
