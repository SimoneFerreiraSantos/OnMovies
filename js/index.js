let user = localStorage.emailUser
let bemVindo = document.querySelector("#bemVindo")
let entrar = document.querySelector('#entrar')
let sair = document.querySelector('#sair')
let cadastrar = document.querySelector('#cadastrar')

let nome = localStorage.nomeCadastro
let email = localStorage.emailCadastro
let telefone = localStorage.telefoneCadastro

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

let srcImg = ""
let nameImg = ""

var getAllImages = document.getElementById('divImagens').getElementsByTagName('img');
for (var i = 0; i < getAllImages.length; i++) {
    (function (x) {
        getAllImages[x].addEventListener('click', function () {
            srcImg = this.getAttribute('src')
            nameImg = this.getAttribute('name')
            localStorage.setItem("titulo-" + nameImg, srcImg)
        })
    }(i))
}

let recuperaFilmesArray = []
for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes("titulo")) {
        let recuperaFilmes = localStorage.key(i) + "," + localStorage.getItem(localStorage.key(i))
        recuperaFilmesArray.push(recuperaFilmes.split(','))
    }
}
console.log(recuperaFilmesArray);
if (recuperaFilmesArray.length > 3) {
    let divRodape = document.querySelector('#rodapeImg')
    divRodape.innerHTML = ""
    localStorage.removeItem(recuperaFilmesArray[recuperaFilmesArray.length - 1][0])
    recuperaFilmesArray.pop()
}
for (let y = 0; y < 3; y++) {
    let divRodape = document.querySelector('#rodapeImg')
    let img = '<div class="col-sm-4"><a href="/singlePreferencia"><img src="' + recuperaFilmesArray[y][1] + '" class="img-thumbnail"></a></div>'
    divRodape.innerHTML += img
}

var srcImgUnica = ""
var getImages = document.getElementById('rodapeImg').getElementsByTagName('img');
for (var i = 0; i < getImages.length; i++) {
    (function (x) {
        getImages[x].addEventListener('click', function () {
            srcImgUnica = this.getAttribute('src')
            localStorage.setItem("filme", srcImgUnica)
        })
    }(i))
}