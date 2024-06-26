export default class Baralho{
    static cards_path = "./assets/cartas/card_";
    static id_carta = 0;

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
    // note for me. Static inheritance, using Baralho.id_carta instead of this.id_carta
    *id_Generator(){
        while(true){ yield Baralho.id_carta += 1; }
    };

    get carta(){
        let id = this.carta_ID
        let valor = this.cartas_disponiveis[ Math.floor(Math.random() * this.cartas_disponiveis.length) ]
        let naipe = this.naipe
        let imagem = this.path + naipe + "_" + valor + ".png"
        let classes = [valor, naipe, "carta"]
        return {id, valor, naipe, imagem, classes}
    }

    get path(){
        return Baralho.cards_path
    }

    get carta_ID(){
        return "carta_" + this.id_Generator().next().value
    }

    get naipe(){
        // retorna um naipe aleatorio
        return this.naipes[ Math.floor(Math.random() * this.naipes.length) ]
    }
}