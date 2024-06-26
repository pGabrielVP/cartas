import Baralho from "./assets/js/Baralho.js"

const h1 = document.querySelector(".pontos");
const mesa = document.querySelector(".mesa");
const mao = document.querySelector(".mao");
const controles = document.querySelector(".controle");
const botao_carta = document.querySelector("#jogar_carta");

const baralho_jogo = new Baralho();

function addEventListener_cartas(){
    let lista_cartas = document.querySelectorAll(".carta")
    lista_cartas.forEach(function (elem) { elem.addEventListener("click", function onclick(params) {
        if ( this.classList.contains("selecionada") ) 
            { this.classList.remove("selecionada") }
         else { this.classList.add("selecionada") }
    }) })
}

function addEventListener_botao(){
    botao_carta.addEventListener("click", function (elem) {
        document.querySelectorAll(".selecionada").forEach(function (elem) {elem.remove()})
    })
}

function add_cartas_mao(j, carta = baralho_jogo.carta){
    if (j === 0 || j < 0) return "mao pronta"
    mao.innerHTML += `<img id="${carta.id}" class="${carta.classes.join(" ")}" src="${carta.imagem}"></img>`
    add_cartas_mao(j-1);
}

add_cartas_mao(3);
addEventListener_cartas();
addEventListener_botao();
