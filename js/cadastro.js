var formC=document.forms.formCadastro
document.querySelector("#btCadastro").onclick=function(){
    if(formC.nome.value == ""){
        alert("Preenchar o nome")
    }else if(formC.email.value == ""){
        alert("Preencha o email!")
    }else if(formC.telefone.value == ""){
        alert("Preencha o telefone!")
    }else if(formC.senha.value == ""){
        alert("Preencha a Senha!")
    }else if(formC.confirmarSenha.value == ""){
        alert("Preencha a confirmação de Senha!")
    }else{

       formC.submit()
    }  
}