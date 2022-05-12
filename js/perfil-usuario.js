
let usuarios='{"nome":"Maria","idade": 60,"email":"maria@tecnologia.com","preferencia":"culinária","dataInicio":"11/05/22","tipoAssinante":"básico","valor":39.99}'

let usuariosJSON= JSON.parse(usuarios)

let conteudo=document.querySelector("#conteudo") 
let h2=document.querySelector("#conteudo h2")
let p=document.querySelector("#conteudo p")

h2.innerHTML=usuariosJSON.nome
p.innerHTML+="Idade: " + usuariosJSON.idade + "<br/>"
p.innerHTML+="Email: " + usuariosJSON.email + "<br/>"
p.innerHTML+="Preferencia: " + usuariosJSON.preferencia + "<br/>"
p.innerHTML+="Data Início: " + usuariosJSON.dataInicio + "<br/>"
p.innerHTML+="Tipo Assinante: " + usuariosJSON.tipoAssinante + "<br/>"
p.innerHTML+="Valor: R$ " + usuariosJSON.valor + "<br/>"

