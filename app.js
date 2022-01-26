

function buscarCep(){
            
    let cep = document.querySelector('input').value

    if(cep === ''){
        return erro()
    }


    let url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url)
    .catch(erro())
    .then((res) => res.json())
    .then((res) => {
        emprimir(res)
    })
}


function emprimir(cep){
    let resultado = document.querySelector('span')

    resultado.innerHTML = `localidade: ${cep.localidade}<br> bairro: ${cep.bairro}<br> complemento: ${cep.complemento} <br> logradouro: ${cep.logradouro}`
    
    sucesso()
}


function erro(){
    let input = document.querySelector('input').style.borderBottom = 'solid 1px red'
}

function sucesso(){
    let input = document.querySelector('input').style.borderBottom = 'solid 1px green'
}
