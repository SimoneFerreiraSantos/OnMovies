
console.log("Testando Js")
var videos=[
    ["Up,Altas Aventuras","aventura.jpeg","2009","Aventura","Carl Fredricksen é um vendedor de balões que, aos 78 anos, está prestes a perder a casa em que sempre viveu com sua esposa, a falecida Ellie."],
    ["De Repente 30","romance.jpeg","2004","Romance","Jenna Rink é uma garota que está descontente com sua própria idade. A única amizade que possui é Matt, seu vizinho. Em seu 13º aniversário, ela faz um pedido: virar adulta."],
    ["A Janela Secreta","suspense2.jpeg","2004","Suspense","Durante o processo de um divórcio litigioso de sua esposa, o escritor Mort Rainey se muda para sua cabana remota em Nova York para ficar sozinho."],
    ["Debi & Loide","comedia2.jpeg","1995","Comédia","Dois amigos debilóides vão para Aspen, no estado do Colorado para tentar devolver uma maleta esquecida pela passageira da limusine que um deles estava dirigindo para o aeroporto. "],
    ["Uma Noite no Museu 2","aventura2.jpeg","2009","Aventura","O guarda-noturno do Museu de História Natural Larry Daley é agora um empresário bem sucedido."],
    ["A Hora do Pesadelo","terror.jpeg","1984","Terror","Um grupo de adolescentes tem pesadelos horríveis, em que são atacados por um homem deformado com garras de aço. Ele apenas aparece durante o sono e, para escapar, é preciso acordar."]
]


console.log(videos)

var galeria=document.querySelector("#galeria")
//logica de iteração papra consumo do array
for(var i=0;i<videos.length;i++){
        //cria um elemento div
        var div=document.createElement('div')
        //adiciona a classe com espaço 6
        div.classList.add('col-sm-4')
        div.classList.add('mt-3')
        //cria elemento div para o conteudo
        var conteudo=document.createElement('div')
        conteudo.className='row'
    conteudo.innerHTML+='<h3 class="col-sm-12 mt-4 mb-5">' + videos[i][0] + '</h3>'
    conteudo.innerHTML+=
    '<div class="col-sm-4"><img src="imagens/' + videos[i][1]+'"class="w-100"/></div>'

    conteudo.innerHTML+='<div class="col-sm-8"><p>'+ videos[i][2] +'</p><p>' + videos[i][3] + '</p><p>' + videos[i][4] + '</p></div>'

        div.appendChild(conteudo)
        galeria.appendChild(div)
 }