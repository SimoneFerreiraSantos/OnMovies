var formC = document.forms.formAtualizaProduto
document.querySelector(".bt-prod").onclick = function () {
    if (formC.titulo.value == "") {
        alert("Preenchar o nome do filme!")
    } else if (formC.ano.value == "") {
        alert("Preencha o ano do filme!")
    } else if (formC.categoria.value == "") {
        alert("Preencha a categoria do filme!")
    } else if (formC.sinopse.value == "") {
        alert("Preencha a sinopse!");
    } else if (formC.trailer.value == "") {
        alert("Preencha o trailer!");
    }else if (formC.valor.value == "") {
        alert("Preencha o preço!");
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
        };
        document.querySelector('#capa').setAttribute('value', input.files[0].name) 
        reader.readAsDataURL(input.files[0]); // Pega todos os dados da imagem e converte para data:base64
    }
}