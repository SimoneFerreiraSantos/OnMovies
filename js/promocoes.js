
var videos=[
    ["Up,Altas Aventuras","acao.jpg","2009","Aventura","Carl Fredricksen é um vendedor de balões que, aos 78 anos, está prestes a perder a casa em que sempre viveu com sua esposa, a falecida Ellie."],
    ["De Repente 30","romance.jpg","2004","Romance","Jenna Rink é uma garota que está descontente com sua própria idade. A única amizade que possui é Matt, seu vizinho. Em seu 13º aniversário, ela faz um pedido: virar adulta."],
    ["A Janela Secreta","suspense.jpg","2004","Suspense","Durante o processo de um divórcio litigioso de sua esposa, o escritor Mort Rainey se muda para sua cabana remota em Nova York para ficar sozinho."],
    ["Debi & Loide","comedia2.jpg","1995","Comédia","Dois amigos debilóides vão para Aspen, no estado do Colorado para tentar devolver uma maleta esquecida pela passageira da limusine que um deles estava dirigindo para o aeroporto. "],
    ["Uma Noite no Museu 2","aventura.jpg","2009","Aventura","O guarda-noturno do Museu de História Natural Larry Daley é agora um empresário bem sucedido."],
    ["A Hora do Pesadelo","terror.jpg","1984","Terror","Um grupo de adolescentes tem pesadelos horríveis, em que são atacados por um homem deformado com garras de aço. Ele apenas aparece durante o sono e, para escapar, é preciso acordar."]
]

var galeria=document.querySelector("#galeria")

for(var i=0;i<videos.length;i++){
        var div=document.createElement('div')
        div.classList.add('col-sm-4')
        div.classList.add('mt-3')

        var conteudo=document.createElement('div')
        conteudo.className='row'

        var ano='<p>' + videos[i][2] + '</p>'
        var categoria='<p>' + videos[i][3] + '</p>'
        var sinopse='<p>' + (videos[i][4]).substring(0,80) + '...</p>'
        var imagem='<img src="imagens/' + videos[i][1]+ '" class="w-100"/>'
        
        var descricao='<div class="col-sm-5 p-0">' + ano + categoria + sinopse + '</div>'
        var ancoraImg= '<a href="singleDeProduto.html">' + imagem + '</a>'

    conteudo.innerHTML+='<h3 class="col-sm-12 mt-4 mb-5">' + videos[i][0] + '</h3>'
    conteudo.innerHTML+='<div class="col-sm-7">' + ancoraImg + '</div>'
    conteudo.innerHTML+=descricao

        div.appendChild(conteudo)
        galeria.appendChild(div)
 }