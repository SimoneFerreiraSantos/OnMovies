let user = localStorage.emailUser
let bemVindo = document.querySelector("#bemVindo")
let entrar = document.querySelector('#entrar')
let sair = document.querySelector('#sair')
let cadastrar = document.querySelector('#cadastrar')

//let nome = localStorage.nomeCadastro
//let email = localStorage.emailCadastro
//let telefone = localStorage.telefoneCadastro

let divRodape = document.querySelector('#rodapeImg')
let recuperaFilmes = [{ id: '13', img: "animacao4.jpg" }, { id: '10', img: "romance3.jpg" }, { id: '3', img: "aventura2.jpg" }]

if (localStorage.getItem("Preferencias") != null) {
    recuperaFilmes = ((JSON.parse(localStorage.getItem("Preferencias"))))
    recuperaFilmes.length > 2 ? recuperaFilmes.pop() : null
}

//function msgUser() {
//     let nomeUser = user.substring(0, user.indexOf('@'))
//     bemVindo.innerHTML = 'Olá ' + nomeUser
//     entrar.style.display = 'none'
//     cadastrar.style.display = 'none'

// }
// function resetUser() {
//     sair.style.display = "none"
// }
// sair.onclick = function () {
//     localStorage.removeItem('emailUser')
//     location.href = '/'
// }
// localStorage.emailUser ? msgUser() : resetUser()

document.querySelectorAll('.img-thumbnail').forEach(item => {
    item.addEventListener('click', event => {
        let filme = {
            id: event.currentTarget.getAttribute('data-id'),
            img: event.currentTarget.getAttribute('data-img')
        }
            const ids = recuperaFilmes.map(o => o.id)
            if(!ids.includes(filme.id)){
            recuperaFilmes.unshift(filme)
            localStorage.setItem("Preferencias", JSON.stringify(recuperaFilmes))
            }
       
    })
})

recuperaFilmes.forEach((item) => {
    let divCol = document.createElement('div')
    divCol.className = 'col-sm-4 mb-4 image-fav'
    divCol.innerHTML = `<a href="/singleDeProduto?id=${item.id}"> <img class="image w-70" src="imagens/${item.img}"></a>`
    divRodape.append(divCol)
})