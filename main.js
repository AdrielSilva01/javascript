
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    ligar() {
        throw new Error("Método 'ligar()' deve ser implementado pelas classes filhas.");
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, cor) {
        super(marca, modelo);
        this.cor = cor;
    }

    ligar() {
        return `O ${this.marca} ${this.modelo} está ligado.`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    ligar() {
        return `A ${this.marca} ${this.modelo} de ${this.cilindradas}cc está ligada.`;
    }
}

const carro1 = new Carro("Toyota", "Corolla", "Prata");
const moto1 = new Moto("Honda", "CBR600RR", 600);
const carro2 = new Carro("Ford", "Fiesta", "Preto");

console.log(carro1.ligar()); 
console.log(moto1.ligar()); 
console.log(carro2.ligar()); 