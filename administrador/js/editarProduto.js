var formC = document.forms.formAtualizaProduto
document.querySelector(".bt-prod").onclick = function () {
    if (formC.titulo.value == "") {
        $(".mensagem").text('Preencha o nome do filme!');
        $("#modal-mensagem").show();
    } else if (formC.ano.value == "") {
        $(".mensagem").text('Preencha o nome do ano!');
        $("#modal-mensagem").show();
    } else if (formC.categoria.value == "") {
        $(".mensagem").text('Preencha a categoria!');
        $("#modal-mensagem").show();
    } else if (formC.sinopse.value == "") {
        $(".mensagem").text('Preencha a sinopse!');
        $("#modal-mensagem").show();
    } else if (formC.trailer.value == "") {
        $(".mensagem").text('Preencha o trailer!');
        $("#modal-mensagem").show();
    }else if (formC.valor.value == "") {
        $(".mensagem").text('Preencha o preço!');
        $("#modal-mensagem").show();
    }else {
        $(".mensagem").text('');
        $("#modal-mensagem").hide();
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