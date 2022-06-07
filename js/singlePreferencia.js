//<div class="col-sm-6">
// <img src="../imagens/acao.jpg" class="img-thumbnail w-100" />
//</div>

let recuperaFilme = ""
for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes("filme")) {
        let recuperaKey = localStorage.key(i) + "," + localStorage.getItem(localStorage.key(i))
        recuperaFilme = recuperaKey.split(",")
    }
}
let preferencia = document.querySelector("#preferencia")
let divColImg = document.createElement("div")
let divColSinopse = document.createElement("div")
divColImg.className = "col-sm-6"
divColSinopse.className = "col-sm-6"
let img = `<img src="../${recuperaFilme[1]}" class="img-thumbnail w-100" />`
let sinopse = '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam animi consectetur numquam aperiam repudiandae dolorum, eveniet dicta adipisci sint delectus eligendi dignissimos repellendus temporibus illum optio velit nostrum cumque rem atque quo suscipit similique ullam rerum! Quod ab dignissimos laboriosam, aperiam quibusdam totam adipisci, delectus reprehenderit eligendi labore fuga in. </p>'
divColImg.innerHTML += img
divColSinopse.innerHTML += sinopse
preferencia.appendChild(divColImg)
preferencia.appendChild(divColSinopse)
