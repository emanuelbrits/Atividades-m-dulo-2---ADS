abstract class FiguraGeometrica {
    protected _area: number
    protected _perimetro: number

    abstract getarea(): number
    abstract getperimetro(): number
}

class circulo extends FiguraGeometrica {
    private raio: number

    constructor(raio: number){
        super()
        this.raio = raio
    }

    getarea(): number {
        return 3.14 * this.raio ** 2
    }

    getperimetro(): number {
        return 2 * 3.14 * this.raio
    }
}

class quadrado extends FiguraGeometrica {
    private base: number
    private altura: number

    constructor(base: number, altura: number){
        super()
        this.base = base
        this.altura = altura
    }

    getarea(): number {
        return this.base * this.altura
    }

    getperimetro(): number {
        return this.base * 4
    }
}

class triangulo extends FiguraGeometrica {
    private lado3: number
    private lado1: number
    private lado2: number

    constructor(lado3: number, lado1: number, lado2: number){
        super()
        this.lado3 = lado3
        this.lado1 = lado1
        this.lado2 = lado2
    }

    getarea(): number {
        return 1 / 2 * (this.lado1 + this.lado2 + this.lado3) 
    }

    getperimetro(): number {
        return this.lado3 + this.lado1 + this.lado2
    }
}

let t: triangulo = new triangulo(5, 4, 3)
console.log(t.getarea());
console.log(t.getperimetro());

let q: quadrado = new quadrado(2,2)
console.log(q.getarea());
console.log(q.getperimetro());