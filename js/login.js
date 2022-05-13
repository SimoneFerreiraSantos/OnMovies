
var formL=document.forms.formLogin
 document.querySelector("#btContato").onclick=function(){  
    if(formL.emailContato.value ==""){
        alert("Preencha o e-mail!")
    }else if (!formL.emailContato.value.includes('.', '@'))
    {
        alert("Preencha um e-mail válido");
    }else if (formL.senhaContato.value ==""){
        alert("Preencha a senha!")
    }else{
        formL.submit()
        localStorage.emailUser=formL.emailContato.value
        }
}
