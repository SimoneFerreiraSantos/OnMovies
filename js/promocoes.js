var filmes=[
    ["Mick","mick.jpg"],
    ["Quem somos nós","quem-somos-nos.jpg"],
    ["A cura quântica","cura-quantica.jpg"],
    ["O pequeno Príncipe","pequeno-principe.jpg"]
]
console.log(filmes)

var galeria=document.querySelector("#galeria")
for(var i=0;i<livros.length;i++){
    var img = new Image()
    img.src="../imagens/" +livros[i][1]
    img.width=120
    galeria.innerHTML+="<p>" + filmes[i][0] + "</p>"
    galeria.appendChild(img)
}