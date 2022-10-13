class Pessoa {
    constructor(public nome: string) {
        this.nome = nome;
    }
}

class Conta {

    constructor(private numero: string, private saldo: number, private cliente: Pessoa) {
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
    
    get _numero(): string {
        return this.numero
    }
    
    get _saldo(): number {
        return this.saldo
    }
    
    get _cliente(): Pessoa {
        return this.cliente
    }
}

class Banco {
    constructor(public nomeBanco: string) {
        this.nomeBanco = nomeBanco
    }

    private contas: Conta[] = [];

    public inserir(conta: Conta): void {
        
        if(this.contas[0] === undefined){
            this.contas.push(conta)
        }else if(this.consultar(conta)) {
            this.contas.push(conta)
        } else {
            console.log(`Número ${conta._numero} já existe`)
        }
    }

    public alterar(conta: Conta): void {}
    
    public excluir(numero: string): void {
        let index: number = this.consultarIndex(numero);
        if (index != -1) {
            for (let i: number = index; i < this.contas.length; i++) {
            this.contas[i] = this.contas[i + 1];
        }
            this.contas.pop();
        }
    }
    
    public consultar(Tconta: Conta): boolean {
            for(let conta of this.contas) {
                if(Tconta._numero === conta._numero) {
                break
            }

            return true
        }
        
        return false
    }

    private consultarIndex(numero: string): number {
        let index: number = -1;
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i]._numero === numero) {
            index = i;
            break;
            }
        }
        return index;
    }

    public sacar(numero: string, valor: number): void {
        for(let conta of this.contas) {
            if(numero === conta._numero) {
                conta.sacar(valor)
            }
        }
    }

    public depositar(numero: string, valor: number): void {
        for(let conta of this.contas) {
            if(numero === conta._numero) {
                conta.depositar(valor)
            }
        }
    }

    public transfeir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        this.sacar(numeroOrigem, valor)
        this.depositar(numeroDestino, valor)
    }

    public quantidadeContas(): number {
        return this.contas.length
    }

    public dinheiroDepositado(): number {
        let soma: number = 0

        for(let conta of this.contas) {
            soma+= conta._saldo
        }

        return soma
    }

    public mediaSaldo(): number{
        return this.dinheiroDepositado() / this.quantidadeContas()
    }
}

let p1: Pessoa = new Pessoa("Emanuel")
let p2: Pessoa = new Pessoa("Italo")

let c1: Conta = new Conta("10", 1000, p1)
let c2: Conta = new Conta("24", 0, p2)

let b1: Banco = new Banco("Banco")



b1.inserir(c1)
b1.inserir(c1)
b1.inserir(c2)

b1.sacar("10", 100)
b1.depositar("10", 200)

b1.transfeir("24", "10", 1000)

console.log(b1.quantidadeContas())
console.log(b1.dinheiroDepositado())
console.log(b1.mediaSaldo())
