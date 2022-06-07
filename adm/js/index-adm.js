
let user = localStorage.emailAdm
let bemVindo = document.querySelector("#bemVindo")
let entrar = document.querySelector('#entrar')
let sair = document.querySelector('#sair')


function msgUser() {
    let nomeUser = user.substring(0, user.indexOf('@'))
    bemVindo.innerHTML = 'Olá, ' + nomeUser
    entrar.style.display = 'none'

}
function resetUser() {
    sair.style.display = "none"
}
sair.onclick = function () {
    localStorage.removeItem('emailAdm')
    location.href = '/adm/'
}
localStorage.emailAdm ? msgUser() : resetUser()