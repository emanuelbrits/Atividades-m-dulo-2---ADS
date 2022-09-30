class Jogador {
    constructor (public forca: number, public nivel: number, public pontos: number) {}

    calcularAtaque(): number {
        return this.forca * this.nivel
    }

    atacar(atacado: Jogador): void {
        if(atacado.estaVivo() === true) {
            atacado.pontos -= this.calcularAtaque()
        } else {
            console.log(`Esse jogador já está morto\n`)
        }
    }

    estaVivo(): boolean {
        if(this.pontos > 0) {
            return true
        } else {
            return false
        }
    }

    toString(): string {
        let atributos = "Força: " + this.forca + " Nível: " + this.nivel + " Pontos de vida: " + this.pontos
        return atributos
    }

}

let j1: Jogador = new Jogador(2, 4, 60)
let j2: Jogador = new Jogador(4, 2, 40)

j1.atacar(j2)
console.log("J1: " + j1.toString())
console.log("J2: " + j2.toString() + "\n")
j2.atacar(j1)
console.log("J1: " + j1.toString())
console.log("J2: " + j2.toString() + "\n")
j2.atacar(j2)
console.log("J1: " + j1.toString())
console.log("J2: " + j2.toString() + "\n")
j1.atacar(j2)
console.log("J1: " + j1.toString())
console.log("J2: " + j2.toString() + "\n")
j2.atacar(j1)
console.log("J1: " + j1.toString())
console.log("J2: " + j2.toString() + "\n")
j1.atacar(j2)
console.log("J1: " + j1.toString())
console.log("J2: " + j2.toString() + "\n")
j2.atacar(j1)
console.log("J1: " + j1.toString())
console.log("J2: " + j2.toString() + "\n")
j1.atacar(j2)
console.log("J1: " + j1.toString())
console.log("J2: " + j2.toString() + "\n")
j2.atacar(j1)
console.log("J1: " + j1.toString())
console.log("J2: " + j2.toString() + "\n")
j1.atacar(j2)
console.log("J1: " + j1.toString())
console.log("J2: " + j2.toString() + "\n")