var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    return Pessoa;
}());
/*
let p : Pessoa = new Pessoa("ely");
console.log(p.nome);
*/
var Conta = /** @class */ (function () {
    function Conta(numero, saldo, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }
    Conta.prototype.sacar = function (valor) {
        this.saldo = this.saldo - valor;
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Object.defineProperty(Conta.prototype, "nomeCliente", {
        get: function () {
            return this.cliente.nome;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.transferencia = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    Conta.prototype.equals = function (conta) {
        return (this.numero == conta.numero);
    };
    return Conta;
}());
var Banco = /** @class */ (function () {
    function Banco(nomeBanco) {
        this.contas = [];
        this.nomeBanco = nomeBanco;
    }
    Banco.prototype.inserir = function (Tconta) {
        for (var i = 0; i < this.contas.length; i++) {
            if (Tconta.nomeCliente === "Italo") {
                console.log("Número já existente");
            }
            else {
                this.contas.push(Tconta);
            }
        }
    };
    Banco.prototype.alterar = function (conta) { };
    Banco.prototype.excluir = function (numero) { };
    //consultar(numero: string): Conta {}
    Banco.prototype.sacar = function (numero, valor) { };
    Banco.prototype.depositar = function (numero, valor) { };
    Banco.prototype.transfeir = function (numeroOrigem, numeroDestino, valor) { };
    return Banco;
}());
var p1 = new Pessoa("Emanuel");
var p2 = new Pessoa("Italo");
var c1 = new Conta("123", 1000, p1);
var c2 = new Conta("123", 0, p2);
var b1 = new Banco("Banco");
b1.inserir(c1);
b1.inserir(c2);
console.log(b1.contas);
console.log(c1.equals(c2));
