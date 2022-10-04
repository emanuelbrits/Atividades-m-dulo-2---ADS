let input = require("prompt");
input = prompt()

class Pessoa {
    constructor(public nome: string) {
        this.nome = nome;
    }
}

class Conta {

    constructor(public numero: string, public saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferencia(contaDestino: Conta, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    equals(conta: Conta): boolean {
        return (this.numero == conta.numero );
    }
}

class Banco {
    constructor(public nomeBanco: string) {
        this.nomeBanco = nomeBanco
    }

    contas: Conta[] = [];

    inserir(numero: string, valor: number): void {
        
    console.log("\nCadastrar conta\n");
    Tconta: Conta;
    Tconta = new Conta(numero, 0);
    this.contas.push(Tconta);
    }

    alterar(conta: Conta): void {}
    excluir(numero: string): void {
        let index: number = this.consultarIndex(numero);
        if (index != -1) {
            for (let i: number = index; i < this.contas.length; i++) {
            this.contas[i] = this.contas[i + 1];
        }
            this.contas.pop();
        }
    }
    
    consultar(Tconta: Conta): boolean {
            for(let conta of this.contas) {
                if(Tconta.numero === conta.numero) {
                break
            }

            return true
        }
        
        return false
    }

    consultarIndex(numero: string): number {
        let index: number = -1;
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === numero) {
            index = i;
            break;
            }
        }
        return index;
    }

    sacar(numero: string, valor: number): void {
        for(let conta of this.contas) {
            if(numero === conta.numero) {
                conta.saldo -= valor
            }
        }
    }

    depositar(numero: string, valor: number): void {
        for(let conta of this.contas) {
            if(numero === conta.numero) {
                conta.saldo += valor
            }
        }
    }

    consultarSaldo(numero: string): void {
        for(let conta of this.contas) {
            if(numero === conta.numero) {
                console.log(conta.saldo)
            }
        }
    }

    transfeir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        this.sacar(numeroOrigem, valor)
        this.depositar(numeroDestino, valor)
    }

    quantidadeContas(): number {
        return this.contas.length
    }

    dinheiroDepositado(): number {
        let soma: number = 0

        for(let conta of this.contas) {
            soma+= conta.saldo
        }

        return soma
    }

    mediaSaldo(): number{
        return this.dinheiroDepositado() / this.quantidadeContas()
    }
}

let b: Banco = new Banco("Banco");
let p1: Pessoa = new Pessoa("Emanuel")
let Tconta: Conta

let opcao: string = "-1";

while (opcao != "0") {
console.log('\nBem vindo\nDigite uma opção:');
console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
'4 - Depositar 5 - Excluir 6 - Transferir\n' +
'7 – Totalizações' +
'0 - Sair\n');
opcao = input("Opção:")
if(opcao === "1"){
    b.inserir( input('Digite o número da conta:') , Number(input('Digite o valor do saldo:')));
    break
} else if(opcao === "2") {
    b.consultarSaldo( input('Digite o número da conta que deseja ver o saldo:'));
    break
} else if(opcao === "3") {
    b.sacar( input('Digite o número da conta que deseja fazer um saque:'), Number(input('Digite o valor do saque:')))
} else if(opcao === "4") {
    b.depositar( input('Digite o número da conta que deseja fazer um depósito:'), Number(input('Digite o valor do depósito:')))
} else if(opcao === "5") {
    b.excluir( input('Digite o número da conta que deseja fazer um saque:'))
} else if(opcao === "6") {
    b.transfeir( input('Digite o número da conta que irá transferir o dinheiro: '),  input('Digite o número da conta que irá receber o dinheiro: '), Number( input('Digite o valor da transferência:')))
} else if(opcao === "7") {
    console.log(b.dinheiroDepositado())
}

 input("Operação finalizada. Digite <enter>");
}
console.log("Aplicação encerrada");