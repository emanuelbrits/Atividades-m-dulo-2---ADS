class Equipamento {

    constructor (public ligado: boolean) {}

    liga(): void {
        if(!this.ligado) {
            this.ligado = true
        }
    }

    desliga(): void {
        if(this.ligado) {
            this.ligado = false
        }
    }

    inverte(): void {

        if(this.ligado === true) {
            this.ligado = false
        } else {
            this.ligado = true
        }
    }

    estaLigado(): boolean {
        return this.ligado
    }
}

let e: Equipamento = new Equipamento(false)

e.liga()
console.log(e.ligado)
e.liga()
console.log(e.ligado)
e.desliga()
console.log(e.ligado);
console.log(e.estaLigado())
e.inverte()
console.log(e.ligado);
