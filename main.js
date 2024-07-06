import { iniciarPaginaJogo } from "./assets/js/html.js";
import { vinte_um_Botao, comecar_jogo } from "./assets/js/vinte_um.mjs";

const botaoJogar = document.querySelector("#mm-botaoJogar")
// ajax
botaoJogar.addEventListener("click", function (elem) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.body.innerHTML = this.responseText;

            // depois de carregar a pagina xhttp.open(jogar_cartas.html) chama a função iniciarPaginaJogo()
            // iniciarPaginaJogo();
            vinte_um_Botao();
            comecar_jogo();
      }
    };
    xhttp.open("GET", "./assets/paginas/vinte_um.html", true);
    xhttp.send();
});
