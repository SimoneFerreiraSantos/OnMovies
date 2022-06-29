
var formL = document.forms.formLogin
document.querySelector("#btContato").onclick = function () {
    if (formL.email.value == "") {
        $(".mensagem").text('Preencha o e-mail!');
        $("#modal-mensagem").show();
    } else if (!formL.email.value.includes('.', '@')) {
        $(".mensagem").text('Preencha um e-mail válido!');
        $("#modal-mensagem").show();
    } else if (formL.senha.value.length != 8) {
        $(".mensagem").text('Preencha a senha com 8 dígitos!');
        $("#modal-mensagem").show();
    } else {
        formL.submit()
    }
}
