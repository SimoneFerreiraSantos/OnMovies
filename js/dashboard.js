//Array de produtos - 3 linhas e 4 colunas
let assinantes = [
    ["Roque", "Básico", 20.90],
    ["Jeckson", "Intermediário", 29.90],
    ["Luciana", "Premium", 49.90],
    ["Paula", "Premium", 49.90],
    ["Simone", "Básico", 20.90]
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

for (let i = 0; i < assinantes.length; i++) {  

    //cria uma div
    let conteudo = document.createElement('tr')

    //quantidade de clientes do array
    let totalAssinantes = 'Assinantes: ' + assinantes.length
    
    //inseri o total de assinantes na página html
    qtdeAssinantes.innerHTML = totalAssinantes

     //acumula os valores do preço na variável valorTotalAssinantes
     valorTotalAssinantes = assinantes[i][2] + valorTotalAssinantes
 
     //inseri a soma dos valores na página html
     valorAssinantes.innerHTML = 'Total: R$ ' + valorTotalAssinantes


    // cria as variáveis que recebem os valores do array e o html
    let cliente = ' <td><a href="#">' + assinantes[i][0] + '</a></td>'
    let assinatura ='<td>' + assinantes[i][1] + '</td>'
    let valor = '<td>'+ assinantes[i][2] +'</td>'
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

    //quantidade de clientes do array
    let filmesAlugados = 'Filmes Alugados: ' + aluguel.length
    
    //inseri o total de assinantes na página html
    visaoFilmesAlugados.innerHTML = filmesAlugados

    //acumula os valores do preço na variável valorTotalAssinantes
    valorTotalAluguel = aluguel[i][2] + valorTotalAluguel
 
     //inseri a soma dos valores na página html
     visaoValorAlugados.innerHTML = 'Total: R$ ' + valorTotalAluguel


    let mediaAlugados = valorTotalAluguel/5

    divMediaAlugados.innerHTML = "Média de filmes alugados: " + mediaAlugados


    // cria as variáveis que recebem os valores do array e o html
    let cliente = ' <td><a href="#">' + aluguel[i][0] + '</a></td>'
    let nomeFilme ='<td>' + aluguel[i][1] + '</td>'
    let valorFilme = '<td>'+ aluguel[i][2] +'</td>'

    //inseri os dados das variáveis da tr criada
    conteudo.innerHTML += cliente
    conteudo.innerHTML += nomeFilme
    conteudo.innerHTML += valorFilme

    
    //inseri todo conteudo da tr dentro da tag tbody com id tabela (<tbody id="tabelaAluguel"></tbody>)
    tabelaAluguel.appendChild(conteudo)    
}