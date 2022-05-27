//Array de produtos - 3 linhas e 4 colunas
let assinantes = [
    ["Roque", "Básico", 20.90],
    ["Jeckson", "Intermediário", 29.90],
    ["Luciana", "Premium", 49.90],
    ["Paula", "Premium", 49.90],
    ["Simone", "Básico", 20.90],
    ["Luana", "Intermediário", 29.90],
    ["Marco", "Premium", 49.90],
    ["Gisele", "Básico", 20.90],
]

let aluguel = [
    ["Roque", "Up, Altas Aventuras", 5.90],
    ["Jeckson", "Eduardo e Mônica", 7.90],
    ["Luciana", "Jumanji 2", 10.90],
    ["Paula", "Dr Estranho", 10.90],
    ["Simone", "Capitã Marvel", 10.90]
]


//inicializa com zero a variável que armazena as somas
let valorTotalAssinantes = 0
let totalAssinantes = 0

let valorTotalAluguel = 0

//Seleciona as tags html que são inseriados os dados do array 
let tabelaAssinantes = document.querySelector("#tabelaAssinantes")
let qtdeAssinantes = document.querySelector("#qtdeAssinantes")
let valorAssinantes = document.querySelector("#valorAssinantes")

let visaoFilmesAlugados = document.querySelector("#visaoFilmesAlugados")
let visaoValorAlugados = document.querySelector("#visaoValorAlugados")
let divMediaAlugados = document.querySelector("#divMediaAlugados")

//quantidade de clientes do array
let totalAssinantesQtde = assinantes.length

  //quantidade de clientes do array
let filmesAlugados = aluguel.length
    

let mediaAlugados = Math.round(filmesAlugados/totalAssinantesQtde)


divMediaAlugados.innerHTML = '<span style="color: #f58139; font-size: 25px;"> Média de filmes alugados: </span>' + mediaAlugados


for (let i = 0; i < assinantes.length; i++) {  

    //cria uma div
    let conteudo = document.createElement('tr')    
    
    //inseri o total de assinantes na página html
    qtdeAssinantes.innerHTML = '<span style="color: #f58139; font-size: 25px;"> Assinantes: </span> ' + totalAssinantesQtde 

     //acumula os valores do preço na variável valorTotalAssinantes
     valorTotalAssinantes = assinantes[i][2] + valorTotalAssinantes
 
     //inseri a soma dos valores na página html
     valorAssinantes.innerHTML = 'Total: R$ ' + valorTotalAssinantes.toFixed(2).replace(".", ", ")
     valorAssinantes.innerHTML += '<hr style="background-color:#e8673f;">'


    // cria as variáveis que recebem os valores do array e o html
    let cliente = ' <td class="text-white"><a  style="color: #f58139;" href="#">' + assinantes[i][0] + '</a></td>'
    let assinatura ='<td class="text-white">' + assinantes[i][1] + '</td>'
    let valor = '<td class="text-white">'+ assinantes[i][2].toFixed(2).replace(".", ", ") +'</td>'
    //inseri os dados das variáveis na div criada
    conteudo.innerHTML += cliente
    conteudo.innerHTML += assinatura
    conteudo.innerHTML += valor

    //inseri todo conteudo da div dentro da div com id tabela (<div id="tabela"></div>)
    tabelaAssinantes.appendChild(conteudo)    
   
}

for (let i = 0; i < aluguel.length; i++) {  

    //cria uma div
    let conteudo = document.createElement('tr')
  
    //inseri o total de assinantes na página html
    visaoFilmesAlugados.innerHTML = '<span style="color: #f58139; font-size: 25px;"> Filmes Alugados: </span>' + filmesAlugados

    //acumula os valores do preço na variável valorTotalAssinantes
    valorTotalAluguel = aluguel[i][2] + valorTotalAluguel
 
     //inseri a soma dos valores na página html
     visaoValorAlugados.innerHTML = 'Total: R$ ' + valorTotalAluguel.toFixed(2).replace(".", ", ")
     visaoValorAlugados.innerHTML += '<hr style="background-color:#e8673f;">'

    // cria as variáveis que recebem os valores do array e o html
    let cliente = ' <td class="text-white"><a style="color: #f58139;" href="#">' + aluguel[i][0] + '</a></td>'
    let nomeFilme ='<td class="text-white">' + aluguel[i][1] + '</td>'
    let valorFilme = '<td class="text-white">'+ aluguel[i][2].toFixed(2).replace(".", ", ") +'</td>'

    //inseri os dados das variáveis da tr criada
    conteudo.innerHTML += cliente
    conteudo.innerHTML += nomeFilme
    conteudo.innerHTML += valorFilme

    
    //inseri todo conteudo da tr dentro da tag tbody com id tabela (<tbody id="tabelaAluguel"></tbody>)
    tabelaAluguel.appendChild(conteudo)    
}