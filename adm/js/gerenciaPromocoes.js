let botaoConfirmar = document.querySelector(".button")
let form= document.forms.formPromo
botaoConfirmar.onclick= ()=>{
    if(form.promo_sim.checked == true || form.promo_nao.checked == true){
        alert("Filme atualizado com sucesso!")
        form.submit()
    }else{
        alert("Selecione ao menos uma opção!")
    }

}