function Futebol(time, corCamisa, AnoFundacao,) {
    this.time = time;
    this.cor = corCamisa;
    this.AnoFundacao = AnoFundacao;
    this.gol =function() {
        console.log("gol"); 

    }

}

const TimeJoao = new Futebol("Flamengo", "vermelho", 1985);
const TimeMaria = new Futebol("Vasco", "branco", 1898);


console.log(TimeJoao);
console.log(TimeMaria);