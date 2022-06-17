
var formL = document.forms.formLogin
document.querySelector("#btContato").onclick = function () {
    if (formL.email.value == "") {
        alert("Preencha o e-mail!")
    } else if (!formL.email.value.includes('.', '@')) {
        alert("Preencha um e-mail válido");
    } else if (formL.senha.value == "") {
        alert("Preencha a senha!")
    } else {
        formL.submit()
       // localStorage.emailUser = formL.emailContato.value
    }
}
