var formC = document.forms.formContato

const tel = formC.telefoneContato
tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor // Insere o(s) valor(es) no campo
}
document.querySelector("#btContato").onclick = function () {
    if (formC.nomeContato.value == "") {
        $(".mensagem").text('Preencha o nome!');
        $("#modal-mensagem").show();
    } else if (formC.emailContato.value == "") {
        $(".mensagem").text('Preencha o e-mail!');
        $("#modal-mensagem").show();
    } else if (!formC.emailContato.value.includes('.', '@')) {
        $(".mensagem").text('Preencha um e-mail válido!');
        $("#modal-mensagem").show();
    } else if (formC.telefoneContato.value == "") {
        $(".mensagem").text('Preencha o telefone!');
        $("#modal-mensagem").show();
    } else if (formC.assunto.value == "") {
        $(".mensagem").text('Preencha o assunto!');
        $("#modal-mensagem").show();
    } else if (formC.comentario.value == "") {
        $(".mensagem").text('Preencha o comentário!');
        $("#modal-mensagem").show();
    } else if (formC.chamado.checked == true) {
        formC.submit()
        $(".mensagem").text('Seu chamado foi aberto e em breve entraremos em contato!');
        $("#modal-mensagem").show();
    } else {
        formC.submit()
    }
}