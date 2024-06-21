let h1 = document.querySelector(".pontos");
let mesa = document.querySelector(".mesa");
let mao = document.querySelector(".mao");

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

function escolher_carta(naipe) {
    let carta = 0;

    while (true) {
        valor = Math.random() * (13 - 0) + 0;
        valor = Math.floor(valor);

        // escolhe uma carta para teste. A carta é escolhida de forma aleatorio usando a variavel 'valor'.
        carta_atual_teste = baralho_jogo.cartas_disponiveis[valor];
        // testa a carta e retorna uma string se essa carta ainda não tiver sido utilizada.
        if (
            baralho_jogo.cartas_usadas[naipe].find(
                (procura) => procura === carta_atual_teste
            ) === undefined
        ) {
            baralho_jogo.cartas_usadas[naipe].push(
                baralho_jogo.cartas_disponiveis[valor]
            );
            carta = `<img id="${id_carta}" class="${carta_atual_teste} ${naipe} carta" src="${caminho_cartas}${naipe}_${carta_atual_teste}.png" alt=""></img>`;
            // valor para id unico da carta. Definido fora da função começando com o valor 0 e sendo incrementado em 1 a cada carta que passar no teste.
            id_carta += 1;
            return carta;
        }
    }
}

function drawHand(numero_cartas) {
    // sortea um numero aleatorio para o naipe da carta a ser sorteada.
    for (let i = 0; i < numero_cartas; i++) {
        naipe = Math.random() * (4 - 0) + 0;
        naipe = Math.floor(naipe);  

        // adicionada uma carta ao dom.
        switch (naipe) {
            case 0:
                mao.innerHTML = mao.innerHTML + escolher_carta("hearts");
                break;
            case 1:
                mao.innerHTML = mao.innerHTML + escolher_carta("diamonds");
                break;
            case 2:
                mao.innerHTML = mao.innerHTML + escolher_carta("clubs");
                break;
            case 3:
                mao.innerHTML = mao.innerHTML + escolher_carta("spades");
                break;
            default:
                console.log("DrawHand !1~4");
                break;
        }
        mao.innerHTML = mao.innerHTML + " | ";
    }
}

function comecarJogo() {
    mao.innerHTML = mao.innerHTML + "| ";
    drawHand(7);
}

let id_carta = 0;
comecarJogo();
