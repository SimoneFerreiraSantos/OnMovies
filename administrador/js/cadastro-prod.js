var formC = document.forms.formCadastro
document.querySelector("#btCadastro").onclick = function () {
    if (formC.nomeFilme.value == "") {
        $(".mensagem").text('Preencha o nome do filme!');
        $("#modal-mensagem").show();
    } else if (formC.anoFilme.value == "") {
        $(".mensagem").text('Preencha o ano!');
        $("#modal-mensagem").show();
    } else if (formC.categoria.value == "") {
        $(".mensagem").text('Preencha a categoria do filme!');
        $("#modal-mensagem").show();
    } else if (formC.capaFilme.value == "") {
        $(".mensagem").text('Preencha a imagem da capa do filme');
        $("#modal-mensagem").show();
    } else if (formC.descricao.value == "") {
        $(".mensagem").text('Preencha a sinopse');
        $("#modal-mensagem").show();
    } else if (formC.trailer.value == "") {
        $(".mensagem").text('Preencha o trailer!');
        $("#modal-mensagem").show();
    }else if (formC.preco.value == "") {
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
                document.querySelector('#previewImagem')
                .style.display = "" //Para a div aparecer
        };
        reader.readAsDataURL(input.files[0]); // Pega todos os dados da imagem e converte para data:base64
    }
}