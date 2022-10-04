var input = require("prompt");
input = prompt();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
        this.nome = nome;
    }
    return Pessoa;
}());
var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
        this.numero = numero;
        this.saldo = saldo;
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
        this.nomeBanco = nomeBanco;
        this.contas = [];
        this.nomeBanco = nomeBanco;
    }
    Banco.prototype.inserir = function (numero, valor) {
        console.log("\nCadastrar conta\n");
        Tconta: Conta;
        Tconta = new Conta(numero, 0);
        this.contas.push(Tconta);
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
            if (Tconta.numero === conta.numero) {
                break;
            }
            return true;
        }
        return false;
    };
    Banco.prototype.consultarIndex = function (numero) {
        var index = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === numero) {
                index = i;
                break;
            }
        }
        return index;
    };
    Banco.prototype.sacar = function (numero, valor) {
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (numero === conta.numero) {
                conta.saldo -= valor;
            }
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (numero === conta.numero) {
                conta.saldo += valor;
            }
        }
    };
    Banco.prototype.consultarSaldo = function (numero) {
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (numero === conta.numero) {
                console.log(conta.saldo);
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
            soma += conta.saldo;
        }
        return soma;
    };
    Banco.prototype.mediaSaldo = function () {
        return this.dinheiroDepositado() / this.quantidadeContas();
    };
    return Banco;
}());
var b = new Banco("Banco");
var p1 = new Pessoa("Emanuel");
var Tconta;
var opcao = "-1";
while (opcao != "0") {
    console.log('\nBem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
        '4 - Depositar 5 - Excluir 6 - Transferir\n' +
        '7 – Totalizações' +
        '0 - Sair\n');
    opcao = input("Opção:");
    if (opcao === "1") {
        b.inserir(input('Digite o número da conta:'), Number(input('Digite o valor do saldo:')));
        break;
    }
    else if (opcao === "2") {
        b.consultarSaldo(input('Digite o número da conta que deseja ver o saldo:'));
        break;
    }
    else if (opcao === "3") {
        b.sacar(input('Digite o número da conta que deseja fazer um saque:'), Number(input('Digite o valor do saque:')));
    }
    else if (opcao === "4") {
        b.depositar(input('Digite o número da conta que deseja fazer um depósito:'), Number(input('Digite o valor do depósito:')));
    }
    else if (opcao === "5") {
        b.excluir(input('Digite o número da conta que deseja fazer um saque:'));
    }
    else if (opcao === "6") {
        b.transfeir(input('Digite o número da conta que irá transferir o dinheiro: '), input('Digite o número da conta que irá receber o dinheiro: '), Number(input('Digite o valor da transferência:')));
    }
    else if (opcao === "7") {
        console.log(b.dinheiroDepositado());
    }
    input("Operação finalizada. Digite <enter>");
}
console.log("Aplicação encerrada");
