
var formC = document.forms.formCadastro
const tel = formC.telefone
tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor // Insere o(s) valor(es) no campo
}
document.querySelector("#btCadastro").onclick = function () {
    if (formC.nome.value == "") {
        $(".mensagem").text('Preencha o nome!');
        $("#modal-mensagem").show();
    } else if (formC.email.value == "") {
        $(".mensagem").text('Preencha o e-mail!');
        $("#modal-mensagem").show();
    } else if (!formC.email.value.includes('.', '@')) {
        $(".mensagem").text('Preencha um e-mail válido!');
        $("#modal-mensagem").show();
    } else if (formC.telefone.value == "") {
        $(".mensagem").text('Preencha o telefone!');
        $("#modal-mensagem").show();
    } else if (formC.senha.value.length != 8) {
        $(".mensagem").text('Preencha a senha com 8 dígitos!');
        $("#modal-mensagem").show();
    } else if (formC.confirmarSenha.value.length != 8) {
        $(".mensagem").text('Preencha a confirmação de senha com 8 dígitos!');
        $("#modal-mensagem").show();
    } else if (formC.confirmarSenha.value != formC.senha.value) {
        $(".mensagem").text('A senha e a confirmação de senha devem ser iguais!');
        $("#modal-mensagem").show();
    } else {
        formC.submit()
    }
}