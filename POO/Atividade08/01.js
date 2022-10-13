var Calculadora = /** @class */ (function () {
    function Calculadora(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    Calculadora.prototype.somar = function () {
        return this.operando1 + this.operando2;
    };
    Calculadora.prototype.subtrair = function () {
        return this.operando1 - this.operando2;
    };
    return Calculadora;
}());
var op1 = new Calculadora(4, 6);
console.log(op1.somar());
console.log(op1.subtrair());
