class Pessoa {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}
/*
let p : Pessoa = new Pessoa("ely");
console.log(p.nome);
*/

class Conta {
    numero: string;
    saldo: number;
    cliente: Pessoa;

    constructor(numero: string, saldo: number, cliente: Pessoa) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
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

    nomeCliente() {
        return this.cliente.nome;
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
    nomeBanco: string
    constructor(nomeBanco: string) {
        this.nomeBanco = nomeBanco
    }

    contas: Conta[] = [];

    inserir(conta: Conta): void {
        if(this.consultar(conta)) {
            this.contas.push(conta)
        } else {
            console.log(`Número ${conta.numero} já existe`)
        }
    }

    alterar(conta: Conta): void {}
    excluir(numero: string): void{}
    
    consultar(Tconta: Conta): boolean {
        if(this.contas[0] === undefined) {
            return true
        } else {
            for(let conta of this.contas) {
                if(Tconta.numero === conta.numero) {
                break
            }

            return true
        }
        }  
        return false
    }

    sacar(numero: string, valor: number): void {
        for(let conta of this.contas) {
            if(numero === conta.numero) {
                conta.saldo -= valor
            }
        }
    }
    depositar(numero: string, valor: number): void {}
    transfeir(numeroOrigem: string, numeroDestino: String, valor: number): void {}
}

let p1: Pessoa = new Pessoa("Emanuel")
let p2: Pessoa = new Pessoa("Italo")

let c1: Conta = new Conta("10", 1000, p1)
let c2: Conta = new Conta("24", 0, p2)

let b1: Banco = new Banco("Banco")



b1.inserir(c1)
b1.inserir(c1)
b1.inserir(c2)

console.log(b1.contas);
