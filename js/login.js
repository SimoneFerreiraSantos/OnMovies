
var formL=document.forms.formLogin
 document.querySelector("#btContato").onclick=function(){  
    if(formL.emailContato.value ==""){
        alert("Preencha o e-mail!")
    }else if (formL.senhaContato.value ==""){
        alert("Preencha a senha!")
    }else{
        formL.submit()
    
        }
}
