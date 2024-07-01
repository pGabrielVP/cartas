import Baralho from "./Baralho.mjs";

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
    document.querySelector("#jogar_carta").addEventListener("click", function (elem) {
        document.querySelectorAll(".selecionada").forEach(function (elem) {elem.remove()})
    })
}

function add_cartas_mao(j, carta = baralho_jogo.carta){
    if (j === 0 || j < 0) return "mao pronta"
    document.querySelector(".mao").innerHTML += `<img id="${carta.id}" class="${carta.classes.join(" ")}" src="${carta.imagem}"></img>`
    add_cartas_mao(j-1);
}

export function iniciarPaginaJogo(){
    add_cartas_mao(7);
    addEventListener_cartas();
    addEventListener_botao();
}


// export const wrapper_element = document.querySelector("#wrapper");

// export class CriarElemento{
//     e;
//     constructor(elem, textContent, id, classList){
//         this.e = CriarElemento.novo_elemento(elem, textContent, id, classList);
//     }

//     static novo_elemento(elem, textContent, id, classList){
//         let e = document.createElement(elem);
//         e.textContent = textContent;
//         e.className = classList.join(" ");
//         e.id = id;
//         return e
//     }
// }

// let titulo = new CriarElemento("h1", "Lorem, ipsum.", "", ["jogo"]);
// let div = new CriarElemento("div", "", "", ["mao"]);
// let div_mesa = new CriarElemento("div", "", "", ["mesa"]);
// let div_controle = new CriarElemento("div", "", "", ["controle"]);
// let botao_jogar = new CriarElemento("button", "jogar", "jogar_carta", ["botao"]);

// div_controle.e.appendChild(botao_jogar.e)

// wrapper_element.appendChild(titulo.e)
// wrapper_element.appendChild(div_mesa.e)
// wrapper_element.appendChild(div.e)
// wrapper_element.appendChild(div_controle.e)
