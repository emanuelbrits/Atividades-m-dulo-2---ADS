class Triangulo {

    constructor (public a: number, public b: number, public c: number) {}

    checar(): boolean {
        
        let modulo = this.b - this.c

        if(modulo < 0){
            modulo *= -1
        }

        if(modulo < this.a && this.a < this.b + this.c){
            return true
        } else {
            return false
        }
    }

    ehIsoceles(): boolean {
        if(!this.checar()) {
            return false
        }else if((this.a === this.b && this.a !== this.c) || (this.b === this.c && this.b !== this.a) || (this.c === this.a && this.c !== this.b)){
            return true
        } else {
            return false
        }
    }

    ehEscaleno(): boolean {
        if(!this.checar()) {
            return false
        }else if(this.a !== this.b && this.b !== this.c && this.a !== this.c) {
            return true
        } else {
            return false
        }
    }

    ehEquilatero(): boolean {
        if(!this.checar()) {
            return false
        }else if(this.a === this.b && this.b === this.c) {
            return true
        } else {
            return false
        }
    }
}

let t: Triangulo = new Triangulo(3, 4, 5)
console.log(t.checar())
console.log(t.ehEquilatero())
console.log(t.ehEscaleno())
console.log(t.ehIsoceles())