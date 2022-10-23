import { Calculadora } from "./q02";

class CalculadoraCientifica extends Calculadora {
    constructor(op1: number, op2: number){
        super(op1, op2)
    }

    public exponenciar(): number{
        return this._op1 ** this._op2
    }
}

let b: CalculadoraCientifica = new CalculadoraCientifica(2, 3)
console.log(b.exponenciar());

//Foi necessário criar um método getna classe Calculadora