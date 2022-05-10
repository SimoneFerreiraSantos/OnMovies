//caso coloque a chamada dentro do <head> use
//window.onload() {...seu código todo aqui...}
window.load=function(){
console.log("Hello World")
console.log(document.querySelector("h1"))
//document (documento html)
//querySelector (consulta um elemento html)
document.querySelector("h1").innerHTML+=" >>"
//Acesso a um elemento de formulário
console.log(document.forms.formContato)
//atribuindo o acesso ao formContato para a vaŕiavel formC
var formC=document.forms.formContato
//Evento de clique no botão confirmar
document.querySelector("#btContato").onclick=function(){  
    //alert('ok') 
    if(formC.nomeContato.value == ""){
       alert("Preencha o nome")
    }else if (formC.emailContato.value == ""){
       alert("Preencha o e-mail!")
    }else if(formC.comentario.value == ""){
        alert("Preencha o comentário!")
    }else{
        formC.submit()

    }
    //alert(formC.nomeContato.value)
    //alert(formC.emailContato.value)
    //alert(formC.comentario.value)
}
}
