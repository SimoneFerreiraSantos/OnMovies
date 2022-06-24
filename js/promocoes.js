
var videos = [
    ["Doutor Estranho 2", "acao.jpg", "2022", "Ação", "Em Doutor Estranho no Multiverso da Loucura, após derrotar Dormammu e enfrentar Thanos nos eventos de Vingadores: Ultimato, o Mago Supremo, Stephen Strange (Benedict Cumberbatch), e seu parceiro Wong (Benedict Wong), continuam suas pesquisas sobre a Joia do Tempo."],
    ["Eduardo & Mônica", "romance.jpg", "2022", "Romance", "Em um dia atípico, uma série de coincidências levam Eduardo a conhecer Mônica em uma festa. Uma curiosidade é despertada entre os dois e, apesar de não serem parecidos, eles se apaixonam perdidamente. Em Brasília, na década de 1980, esse amor precisa amadurecer e aprender a superar as diferenças."],
    ["A Menina Que Matou Os Pais", "suspense.jpg", "2021", "Drama", "A Menina que Matou os Pais se passa em 2002, quando um crime cometido em São Paulo chocou o Brasil. A jovem Suzane von Richthofen (Carla Diaz), junto ao seu namorado Daniel Cravinhos (Leonardo Bittencourt) e seu irmão Cristian (Allan Souza Lima), assassinaram seu pai Manfred von Richthofen (Leonardo Medeiros) e sua mãe Marísia (Vera Zimmerman). Dezoito anos depois, o caso é revisitado em A Menina que Matou os Pais sob o ponto de vista de Daniel, que revela seus motivos para participar do assassinato."],
    ["Jogos Vorazes - Em chamas", "aventura2.jpg", "2013", "Ficção Científica", "Após saírem vencedores da última edição dos Jogos Vorazes, as atitudes desafiadoras de Katniss e Peeta acabam inspirando uma rebelião contra a opressiva Capital. No entanto, os dois são obrigados a participarem de uma edição especial do torneio, o Massacre Quaternário, que acontece apenas a cada 25 anos, e reúne vencedores das edições anteriores. "],
    ["Jumanji", "aventura.jpg", "1995", "Aventura", "A história descreve um jogo de tabuleiro com temática da natureza, onde animais reais e outros elementos aparecem magicamente assim que um jogador joga os dados."],
    ["Capitã Marvel", "acao2.jpg", "2019", "Ação", "Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls. Ao tentar impedir uma invasão de larga escala na Terra, em 1995, ela tem memórias recorrentes de uma outra vida, como Carol Danvers, agente da Força Aérea norte-americana. Com a ajuda de Nick Fury, Capitã Marvel precisa descobrir os segredos de seu passado e pôr um fim ao conflito intergalático com os Skrulls."]
]

var galeria = document.querySelector("#galeria")

for (var i = 0; i < videos.length; i++) {
    var div = document.createElement('div')
    div.classList.add('col-sm-4')
    div.classList.add('mt-1')

    var conteudo = document.createElement('div')
    conteudo.className = 'row'

    var ano = '<p>' + videos[i][2] + '</p>'
    var categoria = '<p>' + videos[i][3] + '</p>'
    var sinopse = '<p>' + (videos[i][4]).substring(0, 80) + '...</p>'
    var imagem = '<img src="../imagens/' + videos[i][1] + '" class="img-thumbnail w-100"/>'

    var descricao = '<div class="col-sm-5 p-0">' + ano + categoria + sinopse + '</div>'
    var ancoraImg = '<a href="./singleDeProduto.html">' + imagem + '</a>'

    conteudo.innerHTML += '<h3 class="col-sm-12 mt-4 mb-2">' + videos[i][0] + '</h3>'
    conteudo.innerHTML += '<div class="col-sm-7">' + ancoraImg + '</div>'
    conteudo.innerHTML += descricao

    div.appendChild(conteudo)
    galeria.appendChild(div)
}