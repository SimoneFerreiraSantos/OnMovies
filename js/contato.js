var formC = document.forms.formContato
//Verifica se o localStorage tem a key "Chamados" e adiciona no array
let chamadosTotais = []
if (localStorage.getItem("Chamados") != null) {
    chamadosTotais = ((JSON.parse(localStorage.getItem("Chamados"))))
}
document.querySelector("#btContato").onclick = function () {
    if (formC.nomeContato.value == "") {
        alert("Preencher o nome!")
    } else if (formC.emailContato.value == "") {
        alert("Preencha o e-mail!")
    } else if (!formC.emailContato.value.includes('.', '@')) {
        alert("Preencha um e-mail válido");
    } else if (formC.telefoneContato.value == "") {
        alert("Preencha o telefone!");
    } else if (formC.assunto.value == "") {
        alert("Preencha o assunto!")
    } else if (formC.comentario.value == "") {
        alert("Preencha o comentário!")
    } else if (formC.chamado.checked == true) {
        formC.submit()
        //Cria uma id para cada chamado, envia as informações para o localStorage
        let chamados = []
        let idChamado = parseInt(Math.random() * 90000) + 10000
        chamados.push(idChamado, formC.nomeContato.value, formC.emailContato.value, formC.telefoneContato.value, formC.assunto.value)
        chamadosTotais.push(chamados)
        localStorage.setItem('Chamados', JSON.stringify(chamadosTotais))
        alert("Seu chamado foi aberto e em breve entraremos em contato")
    } else {
        formC.submit()
    }
}