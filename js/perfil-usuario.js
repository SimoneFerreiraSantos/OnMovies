console.log('Testando JS')


let videos='{"tipo":"Site de Assinatura","turma":"ImpulsoTec","ano":2022}'

console.log(videos)
let videosJSON= JSON.parse(videos)

console.log(videosJSON)

let conteudo=document.querySelector("#conteudo")
let h3=document.querySelector("#conteudo h3")
let p1=document.querySelector("#p1")
let p2=document.querySelector("#p2")

h3.innerHTML=videosJSON.tipo
p1.innerHTML="Turma: " + videosJSON.turma
p2.innerHTML=videosJSON.ano