let carrinho = {
    excluirItem: function (el) {
        let confProduto = confirm("Deseja excluir o Produto?")
        //Se for pressionado o "OK" a div(el) do produto é removida
        confProduto == true ? el.remove() : null
        //Se a quantidade dos produtos for maior que zero diminui 1, se não aparece 0 produtos
        somaqtde.innerHTML = totalqtde > 0 ? totalqtde - 1 + ' produtos' : '0 produtos'
        //Atualiza total depois da exclusão do item
        this.imprimeTotal(totalValor - produtos[0][3]);
    },
    esvaziarCarrinho: function (el) {
        let confCarrinho = confirm("Deseja esvaziar o carrinho?")
        // Mostra carrinho vazio na tela caso o cliente confirme esvaziar o carrinho
        confCarrinho == true ? el.innerHTML = "<p>O carrinho está vazio :(</p>"
            : null
        somaqtde.remove();
        // Deixa o valor total zerado
        totalValor = 0;
        this.imprimeTotal(totalValor)
    },
    multiplicarTelas: function (input, produto) {
            // Calcula os 7% em cima do valor do produto e faz a pontencia dos 7% de acordo com 
            // o número de telas (input), o -2 é porque só 1 tela não altera o valor.
            porcentagemTelas = (produto * 1.07) * Math.pow(1.07, input - 2)
            // Atualiza o valor do produto, de acordo com os 7%
            let divPrecoTelas = document.querySelector("#contaTelas").previousElementSibling
            let paragrafoPrecoTelas = divPrecoTelas.firstChild
            paragrafoPrecoTelas.innerHTML = porcentagemTelas.toFixed(2).replace(".", ",")

            //Para atualizar o valor total, se o número de telas é maior que 1
            if (input > 1){
            //O valor atualizado vai receber o valor total - o valor do produto
            // + o valor atualizado com os 7%
            let novoTotal = (totalValor - produto) + porcentagemTelas;
            //Imprime o novo total e passa o novo valor para o cálculo do cupom
            this.imprimeTotal(novoTotal)
            cupom.aplicarDesconto(novoTotal)
            //Remove do valor total, o valor do produto com a porcentagem porque se não
            //o valor total fica apenas somando
            novoTotal = totalValor - porcentagemTelas
            }
            else{
                // se o input for 1 apenas volta o valor original do carrinho
                this.imprimeTotal(totalValor)
            }
        },
    imprimeTotal: function(valorFinal)
    {
        total.innerHTML = 'Total: R$ ' + valorFinal.toFixed(2).replace(".", ",")
    }
}
//Array de produtos - 3 linhas e 4 colunas
let produtos = [
    ["Up,Altas Aventuras", "animacao.jpg", 1, 20.90],
    ["De Repente 30", "romance.jpg", 1, 40.90],
    ["A Janela Secreta", "suspense.jpg", 1, 70.90]
]

//Objeto cupom
let cupom = {
    cupons: [{ cod: '123', value: 0.10 }, { cod: '456', value: 0.20 }, { cod: '789', value: 0.20 }],
    //Recebe o valor total do carrinho
    aplicarDesconto: function (soma) {
        document.querySelector('#btAplicar').onclick = () => {
            let codCupom = document.querySelector('#aplicarCupom').value;
            let campoCupom = document.querySelector('#cupom');
            let btApagar = document.querySelector('#apagarCupom');

            this.apagarCupom(btApagar, campoCupom, soma) 
            // De acordo com o cód.cupom é inserido a porcentagem de 10% ou 20%
            switch (codCupom) {
                case this.cupons[0].cod: calculaDesconto(this.cupons[0].value);
                    break;
                case this.cupons[1].cod:
                case this.cupons[2].cod: calculaDesconto(this.cupons[1].value);
                    break;
                //Se não for nenhum dos anteriores significa que o cupom é inválido
                default:
                    alert("Cupom inválido")
            }

            function calculaDesconto(desconto) {
                //Verifica se o cupom está aparecendo na tela, se estiver já tem um cupom lá
                if (campoCupom.style.display == '') {
                    alert('Já existe um cupom no carrinho')
                }
                // Se o valor total do carrinho for 0 não tem como aplicar desconto
                else if (totalValor == 0) {
                    alert('O carrinho não possui produtos')
                }
                // Aqui faz o cálculo do desconto
                else {
                    //Verifica o valor a ser descontado
                    let calculaPorcentagem = soma * desconto;
                    //Desconta esse valor do total 
                    let somaComDesconto = soma - calculaPorcentagem;
                    //Faz aparecer os campos do cupom
                    campoCupom.style.display = "";
                    btApagar.style.display = "";
                    campoCupom.innerHTML += calculaPorcentagem.toFixed(2).replace(".", ",");
                    //Chama o método do carrinho para atualizar o total
                    carrinho.imprimeTotal(somaComDesconto);
                }
            }
        }
    },
    // Método para apagar o cupom, precisa do botão de apagar dele, o campo onde aparece e o valor total do carrinho
    apagarCupom: function (btApagar, campoCupom, totalSemDesconto) {
        btApagar.onclick = () => {
            //Vai deixar o campo que aparece o cupom "invisível"
            campoCupom.innerHTML = "Desconto R$: ";
            campoCupom.style.display = "none"; 
            btApagar.style.display = "none";
            //Chama o método para atualizar o valor total sem o desconto novamente
            carrinho.imprimeTotal(totalSemDesconto);
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
    let preco = '<div class="col-sm-2 mt-4 mb-4" id=preco' + i + '><p class="preco">' + produtos[i][3].toFixed(2).replace(".", ",") + '</p></div>'
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
    carrinho.imprimeTotal(totalValor)
    cupom.aplicarDesconto(totalValor)
}

//Pega o botão apagar item e chama o método dentro do objeto carrinho
document.querySelector("#btApagarItem").onclick = function () {
    carrinho.excluirItem(document.querySelector("#produto0"))
}

//Pega o botão esvaziar carrinho e chama o método dentro do objeto carrinho
document.querySelector("#esvaziarCarrinho").onclick = function () {
    carrinho.esvaziarCarrinho(document.querySelector("#tabela"))
}
//Pega o input tela e chama o método dentro do objeto carrinho
let inputTela = document.querySelector("#tela")
let porcentagemTelas = 0;
inputTela.addEventListener('change', () => carrinho.multiplicarTelas(inputTela.value, produtos[0][3]))