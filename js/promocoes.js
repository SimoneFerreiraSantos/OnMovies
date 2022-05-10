var filmes=[
    ["Up,Altas Aventuras","aventura.jpeg","Carl Fredricksen é um vendedor de balões que, aos 78 anos, está prestes a perder a casa em que sempre viveu com sua esposa, a falecida Ellie. Após um incidente, Carl é considerado uma ameaça pública e forçado a ser internado. Para evitar que isto aconteça, ele põe balões em sua casa, fazendo com que ela levante voo. Carl quer viajar para uma floresta na América do Sul, onde ele e Ellie sempre desejaram morar, mas descobre que um problema embarcou junto: Russell, um menino de 8 anos."],
    ["De Repente 30","romance.jpeg","Jenna Rink é uma garota que está descontente com sua própria idade. A única amizade que possui é Matt, seu vizinho. Em seu 13º aniversário, ela faz um pedido: virar adulta. O pedido milagrosamente se torna realidade e, no dia seguinte, Jenna acorda com 30 anos de idade. Inicialmente assustada, ela vai ficando cada vez mais encantada por ter se tornado o que sempre sonhou ser. Porém, quando tenta reencontrar Matt, ela descobre que perdeu contato com ele há anos e ele está prestes a se casar."],
    ["A Janela Secreta","suspense2.jpeg","Durante o processo de um divórcio litigioso de sua esposa, o escritor Mort Rainey se muda para sua cabana remota em Nova York para ficar sozinho. Tentando recuperar sua saúde mental, Rainey tem a infelicidade de ser encontrado por John Shooter, um agricultor que afirma que Rainey plagiou o seu trabalho. Primeiramente, Rainey ignora as acusações, mas Shooter não desaparece e se torna cada vez pior em sua busca por vingança."],
    ["Debi & Loide - Dois Idiotas em Apuros","comedia2.jpeg","Dois amigos debilóides vão para Aspen, no estado do Colorado para tentar devolver uma maleta esquecida pela passageira da limusine que um deles estava dirigindo para o aeroporto. Sem saber que na mala havia uma quantia enorme de dinheiro, que serviria para pagar o resgate de um sequestro, os dois acabam sendo perseguidos pela polícia e por assassinos profissionais."]
]

console.log(filmes)

var galeria=document.querySelector("#galeria")
for(var i=0;i<filmes.length;i++){
    var img = new Image()
    img.src="imagens/" +filmes[i][1]
    img.width=120
    galeria.innerHTML+="<p>" + filmes[i][0]  + "</p>"
    galeria.appendChild(img)
    galeria.innerHTML+= "<p>" + filmes[i][2] + "</p>"
}