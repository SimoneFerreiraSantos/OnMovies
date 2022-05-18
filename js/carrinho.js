//Array de produtos - 3 linhas e 4 colunas
let produtos = [
    ["Up,Altas Aventuras", "animacao.jpg", 0, 20.90],
    ["De Repente 30", "romance.jpg", 0, 40.90],
    ["A Janela Secreta", "suspense.jpg", 3, 70.90]
]

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
    
    // cria as variáveis que recebem os valores do array e o html
    let imagem = '<div class="col-sm-3 mt-4 mb-4">'+ '<img src="../imagens/' + produtos[i][1] + '" class="img-thumbnail"/>' +'</div>'
    let qtde ='<div class="col-sm-3 ml-1 mt-4 mb-4">'+ produtos[i][2] + '</div>'
    let preco = '<div class="col-sm-3 ml-1 mt-4 mb-4">' + produtos[i][3].toFixed(2).replace(".",",") +'</div>'   

    //inseri os dados das variáveis na div criada
    totalValor = produtos[i][2] * produtos[i][3] + totalValor

    conteudo.innerHTML += imagem
    conteudo.innerHTML += qtde
    conteudo.innerHTML += preco
    //inseri todo conteudo da div dentro da div com id tabela (<div id="tabela"></div>)
 
    tabela.appendChild(conteudo)  

    //acumula os valores da quantidade na variável totalqtde
    totalqtde = produtos[i][2] + totalqtde
    

    //inseri a soma da quantidade na página html
    somaqtde.innerHTML = totalqtde + ' produtos'

    //acumula os valores do preço na variável totalValor
    // totalValor = produtos[i][3] + totalValor
 
    //inseri a soma dos valores na página html
    total.innerHTML = 'Total: R$' + totalValor.toFixed(2).replace(".",",")

    aplicarDesconto(totalValor);
}

function aplicarDesconto(soma)
{
    let btAplicar = document.querySelector('#btAplicar').onclick = () => {
    let codCupom = document.querySelector('#aplicarCupom').value;
    let campoCupom = document.querySelector('#cupom');
    let btApagar = document.querySelector('#apagarCupom');
    let cupom = ["123", "456"];

        if (!cupom.includes(codCupom))
        {
             alert ('Cupom inválido');
        }
        else if (campoCupom.style.display == '')
        {
            alert('Cupom já utilizado');
        }else{
            codCupom == cupom[0] ? cupom = 0.10 : cupom = 0.20;

            let calculaPorcentagem = soma * cupom;
            let somaComDesconto =  soma - calculaPorcentagem;
            campoCupom.style.display = "";
            btApagar.style.display = "";
            campoCupom.innerHTML += calculaPorcentagem.toFixed(2).replace(".", ",");
            total.innerHTML = '';
            total.innerHTML = 'Total: R$' + somaComDesconto.toFixed(2).replace(".",",");
        }
        apagarCupom(btApagar, campoCupom);
    }
}

function apagarCupom(btApagar, campoCupom)
{
    btApagar.onclick = () => 
    {
        campoCupom.innerHTML = "Desconto R$: ";
        campoCupom.style.display = "none";
        btApagar.style.display = "none";
        total.innerHTML = 'Total: R$' + totalValor.toFixed(2).replace(".",",");
    }
}