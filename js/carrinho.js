let carrinho = {
    excluirItem: function (el) {
        let confProduto = confirm("Deseja excluir o Produto?")
        confProduto == true ? el.remove() : null
        somaqtde.innerHTML = totalqtde - 1 + ' produtos'
        total.innerHTML = 'Total: R$' + (totalValor - produtos[0][3]).toFixed(2).replace(".", ",")
    },
    esvaziarCarrinho: function (el) {
        let confCarrinho = confirm("Deseja esvaziar o carrinho?")
        confCarrinho == true ? el.innerHTML = "<p>O carrinho está vazio :(</p>"
            : null
        somaqtde.remove();
        totalValor = 0;
        total.innerHTML = 'Total: R$' + totalValor;
    },
    multiplicarTelas: function (input, produto) {
        if (input > 1) {
            porcentagemTelas = (produto * 1.07) * Math.pow(1.07, input - 2)
            console.log(porcentagemTelas)
            let divPrecoTelas = document.querySelector("#contaTelas").previousElementSibling
            console.log(divPrecoTelas)
            let paragrafoPrecoTelas = divPrecoTelas.firstChild
            paragrafoPrecoTelas.innerHTML = porcentagemTelas
            console.log(paragrafoPrecoTelas)
            total.innerHTML = 'Total: R$' + porcentagemTelas.toFixed(2).replace(".", ",")
        }
    },
}
//Array de produtos - 3 linhas e 4 colunas
let produtos = [
    ["Up,Altas Aventuras", "animacao.jpg", 1, 20.90],
    ["De Repente 30", "romance.jpg", 0, 40.90],
    ["A Janela Secreta", "suspense.jpg", 3, 70.90]
]

//Objeto cupom
let cupom = {
    cupons: [{ cod: '123', value: 0.10 }, { cod: '456', value: 0.20 }, { cod: '789', value: 0.20 }],
    aplicarDesconto: function (soma) {
        document.querySelector('#btAplicar').onclick = () => {
            let codCupom = document.querySelector('#aplicarCupom').value;
            let campoCupom = document.querySelector('#cupom');
            let btApagar = document.querySelector('#apagarCupom');
            let validacao = false;

            this.apagarCupom(btApagar, campoCupom)            

            switch (codCupom) {
                case this.cupons[0].cod: calculaDesconto(this.cupons[0].value);
                    break;
                case this.cupons[1].cod:
                case this.cupons[2].cod: calculaDesconto(this.cupons[1].value);
                    break;
                default:
                    alert("Cupom inválido")
            }
            // let cupom = [{cod:123, value: 0.10}, {cod:456,value: 0.20}, {cod:789,value: 0.20}];

            //     for (var index of cupom)
            //     {
            //         if(index.cod == codCupom && campoCupom.style.display == 'none'){
            //             cupom = index.value;
            //             validacao = true;
            //         }
            //     }
            //     if(validacao == true){
            function calculaDesconto(desconto) {
                if (campoCupom.style.display == '') {
                    alert('Já existe um cupom no carrinho')
                }
                else if (totalValor == 0) {
                    alert('O carrinho não possui produtos')
                }
                else {
                    let calculaPorcentagem = soma * desconto;
                    let somaComDesconto = soma - calculaPorcentagem;
                    campoCupom.style.display = "";
                    btApagar.style.display = "";
                    campoCupom.innerHTML += calculaPorcentagem.toFixed(2).replace(".", ",");
                    total.innerHTML = '';
                    total.innerHTML = 'Total: R$' + somaComDesconto.toFixed(2).replace(".", ",");
                }
            }
            //     }
            //     else if (campoCupom.style.display == '')
            //     {
            //         alert('Já existe um cupom no carrinho')
            //     }
            //     else{
            //          alert('Cupom inválido')
            //     }
        }
    },
    apagarCupom: function (btApagar, campoCupom) {
        btApagar.onclick = () => {
            campoCupom.innerHTML = "Desconto R$: ";
            campoCupom.style.display = "none";
            btApagar.style.display = "none";
            total.innerHTML = 'Total: R$' + totalValor.toFixed(2).replace(".", ",");
        }    
    }
}

//inicializa com zero a variável que armazena as somas
let totalValor = 0
let totalqtde = 0

//Seleciona as tags html que são inseriados os dados do array 
let tabela = document.querySelector("#tabela")
let total = document.querySelector("#total")
let cartaz = document.querySelector("#cartaz")
let quantidade = document.querySelector("#quantidade")
let somaqtde = document.querySelector("#somaqtde")
let valor = document.querySelector("#valor")

for (let i = 0; i < produtos.length; i++) {
    //cria uma div
    let conteudo = document.createElement('div')
    //inseri uma classe row do bootstrap na div criada
    conteudo.className = 'row border-bottom'
    conteudo.id = "produto" + i
    // cria as variáveis que recebem os valores do array e o html
    let imagem = '<div class="col-sm-3 mt-4 mb-4">' + '<img src="../imagens/' + produtos[i][1] + '" class="img-thumbnail"/>' + '</div>'
    let qtde = '<div class="col-sm-2 mt-4 mb-4">' + produtos[i][2] + '</div>'
    let preco = '<div class="col-sm-2 mt-4 mb-4" id=preco' + i +'><p class="preco">' + produtos[i][3].toFixed(2).replace(".", ",") + '</p></div>'
    let tela = '<div class="col-sm-2 mt-4 mb-4" id="contaTelas"> <input onKeyPress="return false" type="number" min="1" max="5" id="tela"></div>'
    let apagarItem = '<div class="col-sm-2 mt-4 mb-4"> <button class="button" id="btApagarItem"> remover</button></div>'

    //inseri os dados das variáveis na div criada
    totalValor = produtos[i][2] * produtos[i][3] + totalValor
    conteudo.innerHTML += imagem
    conteudo.innerHTML += qtde
    conteudo.innerHTML += preco
    conteudo.innerHTML += tela
    conteudo.innerHTML += apagarItem
    //inseri todo conteudo da div dentro da div com id tabela (<div id="tabela"></div>)

    tabela.appendChild(conteudo)
    //acumula os valores da quantidade na variável totalqtde
    totalqtde = produtos[i][2] + totalqtde


    //inseri a soma da quantidade na página html
    somaqtde.innerHTML = totalqtde + ' produtos'

    //acumula os valores do preço na variável totalValor
    // totalValor = produtos[i][3] + totalValor

    //inseri a soma dos valores na página html
    total.innerHTML = 'Total: R$' + totalValor.toFixed(2).replace(".", ",")

    cupom.aplicarDesconto(totalValor)
}

document.querySelector("#btApagarItem").onclick = function () {
    carrinho.excluirItem(document.querySelector("#produto0"))
}

document.querySelector("#esvaziarCarrinho").onclick = function () {
    carrinho.esvaziarCarrinho(document.querySelector("#tabela"))
}

let inputTela = document.querySelector("#tela")
let porcentagemTelas = 0;
inputTela.addEventListener('change', () => carrinho.multiplicarTelas(inputTela.value, produtos[0][3]))