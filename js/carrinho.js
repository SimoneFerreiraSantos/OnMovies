//Inicializa com zero aa variáveis de cálculo e o novo array de produtos
let totalValor = 0
let totalqtde = 0
let qtdeTotal = 0
let porcentagemTelas = 0;
let novoValorProduto = new Array()

//Seleciona as tags do HTML
let tabela = document.querySelector("#tabela")
let total = document.querySelector("#total")
let cartaz = document.querySelector("#cartaz")
let quantidade = document.querySelector("#quantidade")
let somaqtde = document.querySelector("#somaqtde")

let carrinho = {
    filmes: [
        { "filmes_id": "1", "titulo": "Eduardo & Mônica", "imagem": "romance.jpg", "quantidade": "1", "valor": 20.90 },

        { "filmes_id": "2", "titulo": "A Menina Que Matou Os Pais", "imagem": "suspense.jpg", "quantidade": "1", "valor": 14.90 },

        { "filmes_id": "3", "titulo": "Jogos Vorazes - Em chamas", "imagem": "aventura2.jpg", "quantidade": "1", "valor": 7.90 },

        { "filmes_id": "4", "titulo": "Jumanji", "imagem": "aventura.jpg", "quantidade": "1", "valor": 4.90 },

        { "filmes_id": "5", "titulo": "Capitã Marvel", "imagem": "acao2.jpg", "quantidade": "1", "valor": 14.90 },
    ],
    excluirItem: function (el, index) {
        let confProduto = confirm("Deseja excluir o Produto?")
        //Se o cliente confirmar a exclusão de um item no carrinho
        if (confProduto == true) {
            //Retira 1 da quantidade total de produtos
            totalqtde += -1
            //Mostra no HTML a quantidade atual
            totalqtde > 0 ? somaqtde.innerHTML = totalqtde + ' produtos' : somaqtde.remove();
            //Zera o valor daquele produto no objeto
            novoValorProduto[index].valor = 0
            //Atualiza o total novamente
            this.calculaTotal(novoValorProduto)
            //Remove o produto do carrinho
            totalqtde == 0 ? tabela.innerHTML = "<p>O carrinho está vazio :(</p>" : el.parentNode.parentNode.remove(el.parentNode.id)
            document.querySelector("#cupom").style.display = 'none'
            document.querySelector("#apagarCupom").style.display = 'none'
        }
    },
    esvaziarCarrinho: function (el) {
        let confCarrinho = confirm("Deseja esvaziar o carrinho?")
        //Se o cliente confirmar a exclusão de todos os itens no carrinho
        if (confCarrinho == true) {
            //Mostra o carrinho vazio
            el.innerHTML = "<p>O carrinho está vazio :(</p>"
            //Remove o campo de quantidade do carrinho
            somaqtde.remove();
            //Remove todos os produtos dos objetos
            this.filmes = ""
            this.novoValorProduto = ""
            //Zera o valor do carrinho
          
            this.calculaTotal(this.novoValorProduto)
            document.querySelector("#cupom").style.display = 'none'
            document.querySelector("#apagarCupom").style.display = 'none'
        }
    },
    multiplicarTelas: function (inputTelas, produtoAtual, indexObjeto) {
        //Calcula os 7% em cima do valor do produto atual, o input - 1 porque 1 tela não conta
        porcentagemTelas = produtoAtual * Math.pow(1.07, inputTelas - 1)
        //A cópia do array recebe o valor do produto atualizado
        novoValorProduto[indexObjeto].valor = porcentagemTelas
        //Chama o metódo para recalcular o total com os novos valores
        this.calculaTotal(novoValorProduto)
        //Atualiza o campo "Preço" do produto no html
        let divPrecoProduto = document.querySelectorAll('.preco')
        divPrecoProduto[indexObjeto].innerHTML = porcentagemTelas.toFixed(2).replace(".", ",")
        document.querySelector("#cupom").style.display = 'none'
        document.querySelector("#apagarCupom").style.display = 'none'
    },
    calculaTotal: function (objetoFilmes) {
        //Zera o valor total atual do carrinho
        totalValor = 0
        //Percorre o objeto que contém todos produtos atuais no carrinho e soma os preços
        for (key in objetoFilmes) {
            totalValor += objetoFilmes[key].valor
        }
        //Atualiza no HTML
        this.imprimeTotal(totalValor)
        //Informa ao método que aplica o desconto do cupom o novo total do carrinho
        cupom.aplicarDesconto(totalValor)
    },
    imprimeTotal: function (valorFinal) {
        total.innerHTML = 'Total: R$ ' + valorFinal.toFixed(2).replace(".", ",")
    }
}

let cupom = {
    //Objeto com os códigos e valores dos cupons
    cupons: [{ cod: '123', value: 0.10 }, { cod: '456', value: 0.20 }, { cod: '789', value: 0.20 }],
    //Recebe o valor total atual do carrinho
    aplicarDesconto: function (soma) {
        //Se o botão aplicar do desconto for clicado
        document.querySelector('#btAplicar').onclick = () => {
            //Recupera os campos do HTML
            let codCupom = document.querySelector('#aplicarCupom').value;
            let campoCupom = document.querySelector('#cupom');
            let btApagar = document.querySelector('#apagarCupom');

            //Chama o metódo apagar, caso cliquem no botão "-"
            this.apagarCupom(btApagar, campoCupom, soma)
            // De acordo com o cód.cupom é inserido a porcentagem de 10% ou 20%
            switch (codCupom) {
                case this.cupons[0].cod: calculaDesconto(this.cupons[0].value);
                    break;
                case this.cupons[1].cod:
                case this.cupons[2].cod: calculaDesconto(this.cupons[1].value);
                    break;
                //Se o código não for nenhum dos anteriores significa que é um cupom inválido
                default:
                    alert("Cupom inválido")
            }

            function calculaDesconto(desconto) {
                //Se tiver um cupom aplicado "visivel" no carrinho, informa que já existe
                if (campoCupom.style.display == '') {
                    alert('Já existe um cupom no carrinho')
                }
                //Se o valor total do carrinho for 0 não tem como aplicar desconto
                else if (totalValor == 0) {
                    alert('O carrinho não possui produtos')
                }
                //Se todas as opções anteriores de validação não forem verdadeiras
                //Aplica o desconto
                else {
                    //Verifica o a porcentagem sobre o valor total atual
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

    apagarCupom: function (btApagar, campoCupom, totalSemDesconto) {
        //Verifica se o botão "-" do cupom foi clicado
        btApagar.onclick = () => {
            //Vai deixar o campo que aparece o cupom e o botão - "invisível"
            campoCupom.innerHTML = "Desconto R$: ";
            campoCupom.style.display = "none";
            btApagar.style.display = "none";
            //Chama o método para atualizar o valor total sem o desconto novamente
            carrinho.imprimeTotal(totalSemDesconto);
        }
    }
}

function rendenrizaCarrinho() {
    for (let i = 0; i < carrinho.filmes.length; i++) {
        //Cria uma div
        let conteudo = document.createElement('div')
        //Inseri a classe row do bootstrap na div criada
        conteudo.className = 'row border-bottom'

        //Cria as variáveis que recebem os valores do objeto filmes
        let imagem = `<div class="col-sm-3 mt-4 mb-4"><img src="../imagens/${carrinho.filmes[i].imagem}" class="img-thumbnail"/></div>`
        let qtde = `<div class="col-sm-2 mt-4 mb-4">${carrinho.filmes[i].quantidade}</div>`
        let preco = `<div class="col-sm-2 mt-4 mb-4" id="${i}"><p class="preco">${carrinho.filmes[i].valor.toFixed(2).replace(".", ",")}</p></div>`
        let tela = `<div class="col-sm-2 mt-4 mb-4"><input onKeyPress="return false" type="number" min="1" max="5" class="tela"></div>`
        let apagarItem = `<div class="col-sm-2 mt-4 mb-4"> <button class="button btApagarItem"> remover</button></div>`


        //totalValor acumula o valor anterior + quantidade * valor 
        totalValor += Number(carrinho.filmes[i].quantidade) * Number(carrinho.filmes[i].valor)

        //Inseri os dados das variáveis na div conteúdo
        conteudo.innerHTML += imagem
        conteudo.innerHTML += qtde
        conteudo.innerHTML += preco
        conteudo.innerHTML += tela
        conteudo.innerHTML += apagarItem

        //Inseri todo conteúdo com os elementos do carrinho dentro da div tabela
        tabela.appendChild(conteudo)
        //totalqtde acumula os valores da quantidade
        //converte para número para realizar a soma
        totalqtde += Number(carrinho.filmes[i].quantidade)

        //Inseri a soma da quantidade na página html
        somaqtde.innerHTML = totalqtde + ' produtos'

        //Chama o método para calcular o total
        carrinho.calculaTotal(carrinho.filmes)
    }
}
rendenrizaCarrinho()
//Faz uma cópia sem referência dos produtos atuais do carrinho
novoValorProduto = JSON.parse(JSON.stringify(carrinho.filmes))

//Seleciona todos os botões de apagar item e verifica qual o id do elemento clicado
document.querySelectorAll('.btApagarItem').forEach(item => {
    item.addEventListener('click', () => {
        for (key in carrinho.filmes) {
            if (key == item.parentNode.previousSibling.previousSibling.id) {
                carrinho.excluirItem(item, key)
            }
        }
    })
})
//Ao clicar no link esvaziar carrinho, chama o método
document.querySelector("#esvaziarCarrinho").onclick = function () {
    carrinho.esvaziarCarrinho(document.querySelector("#tabela"))
}

//Ao mudar o valor do número de telas, verifica qual é o id do elemento clicado e chama o metódo
document.querySelectorAll('.tela').forEach(item => {
    item.addEventListener('change', () => {
        for (key in carrinho.filmes) {
            if (key == item.parentNode.previousSibling.id) {
                carrinho.multiplicarTelas(item.value, carrinho.filmes[key].valor, key)
            }
        }
    })
})
