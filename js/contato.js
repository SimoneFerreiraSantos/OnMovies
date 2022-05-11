
var formC=document.forms.formContato
document.querySelector("#btContato").onclick=function(){
    if(formC.nomeContato.value== ""){
        alert("Preencher o nome!")
    }else if(formC.emailContato.value == ""){
        alert("Preencha o e-mail!")
    }else if(formC.assunto.value==""){
        alert("Preencha o assunto!")
    }else if(formC.comentario.value==""){
        alert("Preencha o comentário!")
    }else{
        formC.submit()
    }
}