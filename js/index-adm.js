console.log('Js Index adm!')
let user=localStorage.emailUser
let bemVindo=document.querySelector("#bemVindo")
let entrar=document.querySelector('#entrar')
let sair=document.querySelector('#sair')
let cadastrar=document.querySelector('#cadastrar')

//let nome = localStorage.nomeCadastro
//let email = localStorage.emailCadastro
//let telefone = localStorage.telefoneCadastro

function msgUser(){
    let nomeUser=user.substring(0,user.indexOf('@'))
    bemVindo.innerHTML='Olá ' + nomeUser 
    entrar.style.display='none'
    cadastrar.style.display='none'

}
function resetUser(){
    sair.style.display="none"
}
sair.onclick=function(){
     localStorage.removeItem('emailUser')
     location.href='index.html'
}
localStorage.emailUser ? msgUser() : resetUser()