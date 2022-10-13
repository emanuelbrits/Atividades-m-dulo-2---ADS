class Calculadora {
    constructor(private operando1: number,private operando2: number){
        this.operando1 = operando1
        this.operando2 = operando2
    }

    public somar(): number{
        return this.operando1 + this.operando2
    }
    
    public subtrair(): number{
        return this.operando1 - this.operando2
    }
}

let op1 : Calculadora = new Calculadora(4, 6)

console.log(op1.somar());
console.log(op1.subtrair());