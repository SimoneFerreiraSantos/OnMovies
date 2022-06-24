let user = localStorage.emailUser
let bemVindo = document.querySelector("#bemVindo")
let entrar = document.querySelector('#entrar')
let sair = document.querySelector('#sair')
let cadastrar = document.querySelector('#cadastrar')

let nome = localStorage.nomeCadastro
let email = localStorage.emailCadastro
let telefone = localStorage.telefoneCadastro

let divRodape = document.querySelector('#rodapeImg')
let recuperaFilmes = [{ img: "../imagens/animacao4.jpg" }, {  img: "../imagens/romance3.jpg" }, { img: "../imagens/aventura2.jpg" }]

if (localStorage.getItem("Favoritos") != null) {
    recuperaFilmes = ((JSON.parse(localStorage.getItem("Favoritos"))))
    recuperaFilmes.length > 2 ? recuperaFilmes.pop() : null
}

function msgUser() {
    let nomeUser = user.substring(0, user.indexOf('@'))
    bemVindo.innerHTML = 'Olá ' + nomeUser
    entrar.style.display = 'none'
    cadastrar.style.display = 'none'

}
function resetUser() {
    sair.style.display = "none"
}
sair.onclick = function () {
    localStorage.removeItem('emailUser')
    location.href = '/'
}
localStorage.emailUser ? msgUser() : resetUser()

document.querySelectorAll('.img-thumbnail').forEach(item => {
    item.addEventListener('click', event => {
        let filme = {
            img: event.currentTarget.getAttribute('src')
        }
            recuperaFilmes.unshift(filme)
            localStorage.setItem("Favoritos", JSON.stringify(recuperaFilmes))
            
        })
})

recuperaFilmes.forEach((item) => {
    let divCol = document.createElement('div')
    divCol.className = 'col-sm-4 mb-4'
    divCol.innerHTML = `<a href="./singlePreferencia.html"> <img class="img-thumbnail w-70 preferencias" src="${item.img}"></a>`
    divRodape.append(divCol)
})

document.querySelectorAll('.preferencias').forEach(item => {
    item.addEventListener('click', event => {
        let filmePreferido = event.currentTarget.getAttribute('src')
        localStorage.setItem("Filme", filmePreferido)
    })
})