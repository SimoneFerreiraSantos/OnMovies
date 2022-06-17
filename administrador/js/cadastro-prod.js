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
    } else if (formC.trailer.value == "") {
        alert("Preencha o trailer!");
    }else {
        formC.submit()
    }
}

//função que mostra preview da imagem selecionada
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader(); //Método que permite ler arquivos
        reader.onload = function (e) { //onload é chamado sempre que a leitura deu certo
            document.querySelector('#previewImagem')
                .src = e.target.result; //seleciona a div da imagem e atribui ao src o nome dela
                document.querySelector('#previewImagem')
                .style.display = "" //Para a div aparecer
        };
        reader.readAsDataURL(input.files[0]); // Pega todos os dados da imagem e converte para data:base64
    }
}