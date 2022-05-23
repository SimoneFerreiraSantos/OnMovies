var chamado=document.querySelector('#chamado')
var formC=document.forms.formContato
document.querySelector("#btContato").onclick=function(){
    if(formC.nomeContato.value== ""){
        alert("Preencher o nome!")
    }else if(formC.emailContato.value == ""){
        alert("Preencha o e-mail!")
    }else if (!formC.emailContato.value.includes('.', '@'))
    {
        alert("Preencha um e-mail válido");
    }else if(formC.telefoneContato.value==""){
        alert("Preencha o telefone!")
    }else if(formC.assunto.value==""){
        alert("Preencha o assunto!")
    }else if(formC.comentario.value==""){
        alert("Preencha o comentário!")
    }else if(chamado.checked==true){
        let idChamado=parseInt(Math.random()* 90000)+10000 
        let contatoChamado=formC.nomeContato.value + ", " + formC.emailContato.value + ", " + formC.telefoneContato.value + ", " + formC.assunto.value
        localStorage.setItem('chamado-' + idChamado , contatoChamado )
        formC.submit()
    }else{
        formC.submit()
    }
}