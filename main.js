import { iniciarPaginaJogo } from "./assets/js/html.js";

const botaoJogar = document.querySelector("#botaoJogar")
// ajax
botaoJogar.addEventListener("click", function (elem) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this + " this");
            console.log(this.readyState + " readyState");
            console.log(this.status + " status");
            console.log(this.responseText + " responseText");
            document.body.innerHTML = this.responseText;

            // depois de carregar a pagina xhttp.open() chama a função iniciarPaginaJogo()
            iniciarPaginaJogo();
      }
    };
    xhttp.open("GET", "./assets/paginas/jogar_cartas.html", true);
    xhttp.send();
});
