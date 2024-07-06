// import { Cartas } from "./Cartas.mjs";

export class Baralho{
    static cards_path = "./assets/cartas/card_";
    static id_carta = 0;

    constructor() {
        // this.cartas = Cartas.cartas_vinte_um();

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
    
    // static nomeTemporario(obj) {
    //     // recupera a lista de cartas do objeto
    //     let keys = Object.keys(obj);
    //     // retorna um valor aleatorio da lista
    //     return keys[Math.floor(Math.random() * keys.length)]
    // }

    static *id_Generator(){
        while(true){ yield Baralho.id_carta += 1; }
    };

    static naipeDisponivel(obj){
        while(true){
            // escolhe um naipe aleatorio.
            let naipe_atual = obj.naipes[Math.floor(Math.random() * obj.naipes.length)];

            // testa se o naipe ainda tem alguma carta que não foi utilizada.
            if (obj.cartas_usadas[naipe_atual].length < obj.cartas_disponiveis.length) { 
                // retorna o valor para naipe
                return naipe_atual;
            }
        }
    }

    static valorDisponivel(obj, naipeNovo){
        while (true) {
            // escolhe uma carta aleatorio.
            let valor_atual = obj.cartas_disponiveis[Math.floor(Math.random() * obj.cartas_disponiveis.length)]

            // procura a carta na lista de cartas já utilizadas.
            if (obj.cartas_usadas[naipeNovo].find((procura) => procura === valor_atual) === undefined) { 
                // adiciona a carta na lista de cartas já utilizadas.
                obj.cartas_usadas[naipeNovo].push(valor_atual);
                // retorna o valor da carta.
                return valor_atual ;
            }
        }
    }

    get carta(){
        let naipe = Baralho.naipeDisponivel(this)
        let valor = Baralho.valorDisponivel(this, naipe)

        let id = this.carta_ID
        let imagem = this.path + naipe + "_" + valor + ".png"

        let classes = [valor, naipe, "carta"]

        // teste
        console.log(Baralho.nomeTemporario(this.cartas));

        return { id, valor, naipe, imagem, classes }
    }

    get path(){
        return Baralho.cards_path
    }

    get carta_ID(){
        return "carta_" + Baralho.id_Generator().next().value
    }
};
