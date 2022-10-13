var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
        this.nome = nome;
    }
    return Pessoa;
}());
var Conta = /** @class */ (function () {
    function Conta(numero, saldo, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
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
    Conta.prototype.nomeCliente = function () {
        return this.cliente.nome;
    };
    Conta.prototype.transferencia = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    Conta.prototype.equals = function (conta) {
        return (this.numero == conta.numero);
    };
    Object.defineProperty(Conta.prototype, "_numero", {
        get: function () {
            return this.numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "_saldo", {
        get: function () {
            return this.saldo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "_cliente", {
        get: function () {
            return this.cliente;
        },
        enumerable: false,
        configurable: true
    });
    return Conta;
}());
var Banco = /** @class */ (function () {
    function Banco(nomeBanco) {
        this.nomeBanco = nomeBanco;
        this.contas = [];
        this.nomeBanco = nomeBanco;
    }
    Banco.prototype.inserir = function (conta) {
        if (this.contas[0] === undefined) {
            this.contas.push(conta);
        }
        else if (this.consultar(conta)) {
            this.contas.push(conta);
        }
        else {
            console.log("N\u00FAmero ".concat(conta._numero, " j\u00E1 existe"));
        }
    };
    Banco.prototype.alterar = function (conta) { };
    Banco.prototype.excluir = function (numero) {
        var index = this.consultarIndex(numero);
        if (index != -1) {
            for (var i = index; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    };
    Banco.prototype.consultar = function (Tconta) {
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (Tconta._numero === conta._numero) {
                break;
            }
            return true;
        }
        return false;
    };
    Banco.prototype.consultarIndex = function (numero) {
        var index = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i]._numero === numero) {
                index = i;
                break;
            }
        }
        return index;
    };
    Banco.prototype.sacar = function (numero, valor) {
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (numero === conta._numero) {
                conta.sacar(valor);
            }
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (numero === conta._numero) {
                conta.depositar(valor);
            }
        }
    };
    Banco.prototype.transfeir = function (numeroOrigem, numeroDestino, valor) {
        this.sacar(numeroOrigem, valor);
        this.depositar(numeroDestino, valor);
    };
    Banco.prototype.quantidadeContas = function () {
        return this.contas.length;
    };
    Banco.prototype.dinheiroDepositado = function () {
        var soma = 0;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            soma += conta._saldo;
        }
        return soma;
    };
    Banco.prototype.mediaSaldo = function () {
        return this.dinheiroDepositado() / this.quantidadeContas();
    };
    return Banco;
}());
var p1 = new Pessoa("Emanuel");
var p2 = new Pessoa("Italo");
var c1 = new Conta("10", 1000, p1);
var c2 = new Conta("24", 0, p2);
var b1 = new Banco("Banco");
b1.inserir(c1);
b1.inserir(c1);
b1.inserir(c2);
b1.sacar("10", 100);
b1.depositar("10", 200);
b1.transfeir("24", "10", 1000);
console.log(b1.quantidadeContas());
console.log(b1.dinheiroDepositado());
console.log(b1.mediaSaldo());
