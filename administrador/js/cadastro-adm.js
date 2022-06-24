var formC = document.forms.formCadastro
document.querySelector("#btCadastro").onclick = function () {
    if (formC.nome.value == "") {
        $(".mensagem").text('Preencha o nome!');
        $("#modal-mensagem").show();
    } else if (formC.email.value == "") {
        $(".mensagem").text('Preencha o e-mail!');
        $("#modal-mensagem").show();
    } else if (!formC.email.value.includes('.', '@')) {
        $(".mensagem").text('Preencha um e-mail válido');
        $("#modal-mensagem").show();
    } else if (formC.senha.value.length != 8) {
        $(".mensagem").text('Preencha a senha com 8 dígitos!');
        $("#modal-mensagem").show();
    } else if (formC.confirmarSenha.value.length != 8) {
        $(".mensagem").text('Preencha a confirmação de senha com 8 dígitos!');
        $("#modal-mensagem").show();
    } else if (formC.confirmarSenha.value != formC.senha.value) {
        $(".mensagem").text('As senhas devem ser iguais');
        $("#modal-mensagem").show();
    } else {
        $(".mensagem").text('');
        $("#modal-mensagem").hide();
        formC.submit()
    }
}