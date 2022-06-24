let botaoConfirmar = document.querySelector("#confirmar")
let form = document.forms.formPromo
botaoConfirmar.onclick= ()=>{
    if(form.valor.value == ""){
        $(".mensagem").text('Preencha o preço!');
        $("#modal-mensagem").show();
    }else{
        $(".mensagem").text('');
        $("#modal-mensagem").hide();
        form.submit()
    }
}