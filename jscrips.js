const key = "8b77173c5ae24b2cdc87e531a3b12aee"


function colocarDadosNaTela(dados){
    console.log(dados)
   document.querySelector(".cidade").innerHTML = "Tempo em  " + dados.name 
    document.querySelector(".temp").innerHTML = dados.main.temp
    document.querySelector(".texto-previsao").innerHTML = dados.weather [0] .description
    document.querySelector(".umidade").innerHTML = dados.main.humidity +"%"
    

}
async function buscarCidade(cidade)
{

    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())  
    
    
    colocarDadosNaTela(dados)
    
}

function cliqueiNobotao() {
    const input = document.querySelector(".input-cidade").value


    buscarCidade(input)

}
