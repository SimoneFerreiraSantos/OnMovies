let iframe = document.getElementsByTagName("iframe")
let trailers = [
     ["https://www.youtube.com/embed/FV7AxLbHcrE?start=10"], //"Capitã Marvel"
     ["https://www.youtube.com/embed/X23XCFgdh2M?start=10"],//"Doutor Estranho"
     ["https://www.youtube.com/embed/qGnYohmv4_w?start=10"],//"A sogra que te pariu"
     ["https://www.youtube.com/embed/GWNqwzTdGvU?start=10"],//"A era do gelo"
     ["https://www.youtube.com/embed/tqfOtQ5auBA?start=10"],//"Mulher maravilha" 
     ["https://www.youtube.com/embed/Hhn3MXSra5E?start=10"],//"Os opostos se atraem" 
     ["https://www.youtube.com/embed/IoSR5tl1AAU?start=10"],//"Eduardo e Mônica"
     ["https://www.youtube.com/embed/cKyrXQSsSl4?start=4"],//"Jogos vorazes - Em chamas"
     ["https://www.youtube.com/embed/PEuMN4_lnPs?start=4"],//"Jumanji - Próxima fase"
     ["https://www.youtube.com/embed/GQIUe5tMuMk?start=4"]//"Desconhecido"
]

//console.log(numeroAleatorio)
for (let i = 0; i < trailers.length; i++) {
     let numeroAleatorio = parseInt(Math.random() * 9)
     iframe[i].src = trailers[numeroAleatorio]
}