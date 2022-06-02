var formC = document.forms.formCadastro
document.querySelector("#btCadastro").onclick = function () {
    if (formC.nomeFilme.value == "") {
        alert("Preenchar o nome do filme!")
    } else if (formC.anoFilme.value == "") {
        alert("Preencha o ano do filme!")
    } else if (formC.categoria.value == "") {
        alert("Preencha a categoria do filme!")
    } else if (formC.capaFilme.value == "") {
        alert("Preencha a capa do filme!")
    } else if (formC.descricao.value == "") {
        alert("Preencha a sinopse!");
    } else {
        formC.submit()
    }
}