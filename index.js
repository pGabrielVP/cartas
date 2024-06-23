const h1 = document.querySelector(".pontos");
const mesa = document.querySelector(".mesa");
const mao = document.querySelector(".mao");
const controles = document.querySelector(".controle");
const botao_carta = document.querySelector("#jogar_carta");

const caminho_cartas = "./assets/cartas/card_";

class baralho {
    constructor() {
        this.cartas_usadas = {
            hearts: [],
            diamonds: [],
            clubs: [],
            spades: [],
        };
        this.cartas_disponiveis = [
            "A",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "J",
            "Q",
            "K",
        ];
        this.naipes = ["hearts", "diamonds", "clubs", "spades"];
    }
}
const baralho_jogo = new baralho();

function escolher_naipe() {
    let naipe = Math.floor(Math.random() * 4);

    switch (naipe) {
        case 0:
            return "hearts"
        case 1:
            return "diamonds"
        case 2:
            return "clubs"
        case 3:
            return "spades"
    }
}

function escolher_carta(naipe) {
    while (true) {
        // escolhe um valor para a carta.
        valor = Math.random() * (13 - 0) + 0;
        valor = Math.floor(valor);
        carta_atual = baralho_jogo.cartas_disponiveis[valor];

        // testa se uma carta do mesmo naipe e valor ja foi usada.
        if (
            baralho_jogo.cartas_usadas[naipe].find(
                (procura) => procura === carta_atual
            ) === undefined
        ) {
            // adiciona a carta na lista de cartas ja usadas.
            baralho_jogo.cartas_usadas[naipe].push(carta_atual);
            id_carta += 1;

            return `<img id="carta_${id_carta}" class="${carta_atual} ${naipe} carta" src="${caminho_cartas}${naipe}_${carta_atual}.png" alt=""></img>`;
        }
    }
}

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

function drawHand(numero_cartas) {
    for (let i = 0; i < numero_cartas; i++) {
        mao.innerHTML = mao.innerHTML + escolher_carta(escolher_naipe());
    }

    addEventListener_cartas();
}

function comecarJogo() {
    drawHand(7);
    addEventListener_botao();
}

let id_carta = 0;
comecarJogo();
