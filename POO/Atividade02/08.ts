class Circulo {

    raio : number = 0

    calcularArea() : number {
        return 3.14 * (this.raio ** 2)
    }

    calcularPerimetro() : number {
        return 2 * 3.14 * this.raio
    }
}

let circulo : Circulo
circulo = new Circulo()

circulo.raio = 4

console.log(`Area: ${circulo.calcularArea()}`)
console.log(`Perímetro: ${circulo.calcularPerimetro()}`)