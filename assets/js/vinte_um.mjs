import { Baralho } from "./Baralho.mjs";

const baralho_vinte_um = new Baralho();
let jogando = true

export function vinte_um_Botao(){     
    const vu_player_stop = document.querySelector("#vu-player_stop");
    const vu_player_draw = document.querySelector("#vu-player_draw");

    vu_player_draw.addEventListener("click", function (elem) {
        if (!jogando) return;
        add_cartas_mao(1, "#vu-player_hand")
    })

    vu_player_stop.addEventListener("click", function (elem) {
        jogando = false;
})

}
function add_cartas_mao(j, elemento_id, carta = baralho_vinte_um.carta){
    if (j === 0 || j < 0) return "mao pronta";
    document.querySelector(`${elemento_id}`).innerHTML += `<img id="${carta.id}" class="${carta.classes.join(" ")}" src="${carta.imagem}"></img>`;
    add_cartas_mao(j-1, elemento_id);
}

export function comecar_jogo(){
    add_cartas_mao(2, "#vu-player_hand");
    add_cartas_mao(2, "#vu-dealer_hand");
}
