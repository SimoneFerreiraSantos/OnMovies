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
let itemsArray = []
let outroArray = []
let divRodape= document.querySelector('#rodapeImg')
let novoArray = []
let divCol = ''

var getAllImages = document.getElementById('divImagens').getElementsByTagName('img'); 

document.querySelectorAll('.img-thumbnail').forEach(item => {
    item.addEventListener('click', event => {
        console.log("teste")
        console.log(event.currentTarget.getAttribute('src'))
        srcImg = item.getAttribute('src')
        nameImg= item.getAttribute('name')
        console.log(srcImg)
        localStorage.setItem("titulo-" + nameImg,srcImg)
    })
  })
    

let recuperaFilmesArray = []
for(let k=0; k<localStorage.length;k++){
    if(localStorage.key(k).includes("titulo")){
        let recuperaFilmes = localStorage.key(k) + "," + localStorage.getItem(localStorage.key(k)) 
        recuperaFilmesArray.unshift(recuperaFilmes.split(','))        
    }
}

console.log(recuperaFilmesArray)

novoArray = recuperaFilmesArray.slice(-3)

console.log(novoArray)

for (let index = 0; index < novoArray.length; index++) {
    divCol = document.createElement("div")
    divCol.className = "col-sm-4"


    let divImg = document.createElement("img")
    divImg.className = "img-thumbnail w-50"
    divImg.src = novoArray[index][1]

    divCol.appendChild(divImg)

    divRodape.children.length < 3 ? divRodape.append(divCol) :  divRodape.removeChild(divCol)
}