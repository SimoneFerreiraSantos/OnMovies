var recuperaChamadosArray = [];
var listaResult = [];

  for(var i=0; i < localStorage.length; i++){
      if(localStorage.key(i).includes('Chamado')){
      let recuperaChamados = localStorage.key(i) + ',' + localStorage.getItem(localStorage.key(i));
      recuperaChamadosArray.unshift(recuperaChamados.split(','));
      }
  }
console.log(recuperaChamadosArray)

  function users() {
    let totalPendentes= document.querySelector('#totalPendentes');
    totalPendentes.innerHTML = recuperaChamadosArray.length > 0 ? '<p id="totalAtendidos">Total: '+ (recuperaChamadosArray.length) +'</p>' :
    '<p id="totalAtendidos">Todos os clientes foram atendidos</p>'
    document.querySelector('#proximoCliente').innerHTML = "";
    for(var i =0; i <recuperaChamadosArray.length; i++)
    {

       document.querySelector('#proximoCliente').innerHTML += recuperaChamadosArray[i][1]
    }
    recuperaChamadosArray.length > 0 ? document.querySelector('#proximoCliente').innerHTML = recuperaChamadosArray[0][1]: null;
}
users();

document.querySelector('#btConfirmar').onclick = () =>
{ darBaixa() }
    function darBaixa(){
    if(recuperaChamadosArray.length > 0){
    document.querySelector('#clientesAtendidos').innerHTML = "";
    listaResult.push(recuperaChamadosArray[0]);
    for(var i =0; i <listaResult.length; i++)
    {

        let totalAtendidos = document.querySelector('#totalAtendidos');
        let divRowClientesAtendidos = document.createElement('div')
        divRowClientesAtendidos.className = 'row text-center'

        let nome = '<p class="col-sm-3">' +listaResult[i][1] +'</p>'
        let email = '<p class="col-sm-3">' +listaResult[i][2] +'</p>'
        let telefone = '<p class="col-sm-3">' +listaResult[i][3] +'</p>'
        let assunto = '<p class="col-sm-3">' +listaResult[i][4].substring(0,15) + '...</p>'

        divRowClientesAtendidos.innerHTML += nome;
        divRowClientesAtendidos.innerHTML += email;
        divRowClientesAtendidos.innerHTML += telefone;
        divRowClientesAtendidos.innerHTML += assunto;
        document.querySelector('#clientesAtendidos').appendChild(divRowClientesAtendidos); 
        document.querySelector('#clientesAtendidos').innerHTML += '<hr style="background-color:#e8673f;">'
        totalAtendidos.innerHTML =  '<p id="totalAtendidos">Total: '+ (listaResult.length) +'</p>'
        localStorage.removeItem(recuperaChamadosArray[0][0]);
    }
    recuperaChamadosArray.shift();
    users();
    } else{
       // document.querySelector('#next').innerHTML = "<b>Todos os clientes foram atendidos</b>"
        console.log(recuperaChamadosArray);
    }
}