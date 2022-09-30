var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        if (this.saldo - valor > 0) {
            this.saldo = this.saldo - valor;
            return true;
        }
        else {
            return false;
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        if (this.sacar(valor) === true) {
            contaDestino.depositar(valor);
        }
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return Conta;
}());
var c1 = new Conta("123", 400);
var c2 = new Conta("321", 300);
c1.sacar(600);
c1.transferir(c2, 600);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
