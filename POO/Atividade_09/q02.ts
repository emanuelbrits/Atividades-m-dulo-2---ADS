export class Calculadora {
    private op1: number
    private op2: number

    constructor(op1: number, op2: number){
        this.op1 = op1
        this.op2 = op2
    }

    get _op1(): number{
        return this.op1
    }
    
    get _op2(): number{
        return this.op2
    }

    public soma(): number{
        return this.op1 + this.op2
    }
}

let c: Calculadora = new Calculadora(4, 3)
console.log(c.soma());
