export class Cartas{
    static cartas_padrao = [
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
    static usos = {
        hearts: 0,
        diamonds: 0,
        clubs: 0,
        spades: 0,
    }

    constructor(){}

    static cartas_vinte_um() {
        let lista = [];
        let pontos = 0;

        Cartas.cartas_padrao.forEach(valor => {
            switch (valor) {
                case "A":
                    pontos = 1
                    break;
                case "J":
                    pontos = 10
                    break;
                case "Q":
                    pontos = 10
                    break;
                case "K":
                    pontos = 10
                    break;

                default:
                    pontos = parseInt(valor)
                    break;
            }
            lista.push({ valor, pontos, usos: Cartas.usos })
        });

        return lista
    }
}
