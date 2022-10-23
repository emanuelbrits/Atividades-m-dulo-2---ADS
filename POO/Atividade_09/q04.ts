class Conta {
    private numero: string
    private saldo: number

    constructor(numero: string, saldo: number) {
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

    get _saldo(): number {
        return this.saldo
    }

    get _numero(): string{
        return this.numero
    }
}

class Poupanca extends Conta {
    private taxaJuros: number;
    
    constructor(numero: string, saldo: number, taxaJuros: number){
        super(numero, saldo)
        this.taxaJuros = taxaJuros
    }

    public renderJuros(): void {
        this.depositar( this._saldo * this.taxaJuros/100);
    }
    
    depositar(valor: number): void {
        super.depositar(valor)
    }

    sacar(valor: number): void {
        super.sacar(valor)
    }

    consultarSaldo(): number {
        return this.consultarSaldo()
    }

    transferencia(contaDestino: Poupanca, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    equals(conta: Poupanca): boolean {
        return (this._numero == conta._numero);
    }
}

class ContaImposto extends Conta {
    private taxaDesconto: number;
    
    constructor(numero: string, saldo: number,taxaDeDesconto: number) {
    super(numero, saldo)
    this.taxaDesconto = taxaDeDesconto
    }
    
    debitar(valor: number): void {
        let total = valor + valor * (this.taxaDesconto/100)
        super.sacar(total)
    }
}

class Banco {

    private contas: Conta[] = [];
    private poupancas: Poupanca[] = []
    private contasImposto: ContaImposto[] = []

    inserir(conta: Conta): void {
        let contaConsultada = this.consultar(conta);
        if (contaConsultada == null) {
            this.contas.push(conta);
        } else {
            console.log("Conta já existe.")
        }
    }

    inserirPoupanca(poupanca: Poupanca): void {
        let contaConsultada = this.consultar(poupanca)
        let poupancaProcurada = this.consultarPoupanca(poupanca)
        if (contaConsultada != null && poupancaProcurada == null) {
            this.poupancas.push(poupanca);
        } else {
            console.log("Não foi possível adicionar poupança!")
        }
    }

    inserirImposto(imposto: ContaImposto): void {
        let contaConsultada = this.consultar(imposto)
        let impostoProcurado = this.consultarImposto(imposto)
        if (contaConsultada != null && impostoProcurado == null) {
            this.contasImposto.push(imposto);
        } else {
            console.log("Não foi possível adicionar Imposto!")
        }
    }

    excluir(numero: string): void {
        for(let c of this.contas){
            if(numero == c._numero){
                this.contas.pop()
            }
        }
    }
    
    consultar(conta: Conta): Conta {
        let contaProcurada !: Conta

        for(let c of this.contas){
            if(conta == c){
                contaProcurada = conta
                break
            }
        }
        return contaProcurada
    }

    consultarPoupanca(poupanca: Poupanca): Poupanca {
        let poupancaProcurada !: Poupanca

        for(let p of this.poupancas){
            if(poupanca == p){
                poupancaProcurada = poupanca
                break
            }
        }
        return poupancaProcurada
    }

    consultarImposto(imposto: ContaImposto): ContaImposto {
        let impostoProcurado !: ContaImposto

        for(let p of this.contasImposto){
            if(imposto == p){
                impostoProcurado = imposto
                break
            }
        }
        return impostoProcurado
    }

    consultarNumero(numero: string): Conta {
        let contaProcurada !: Conta

        for(let c of this.contas){
            if(c._numero == numero){
                contaProcurada = c
                break
            }
        }
        return contaProcurada
    }

    consultarNumeroPoupanca(numero: string): Poupanca {
        let poupancaProcurada !: Poupanca

        for(let p of this.poupancas){
            if(p._numero == numero){
                poupancaProcurada = p
                break
            }
        }
        return poupancaProcurada
    }

    sacar(numero: string, valor: number): void {
        for(let conta of this.contas) {
            if(numero === conta._numero) {
                conta.sacar(valor)
            }
        }
    }

    depositar(numero: string, valor: number): void {
        for(let conta of this.contas) {
            if(numero === conta._numero) {
                conta.depositar(valor)
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
            soma+= conta._saldo
        }

        return soma
    }

    mediaSaldo(): number{
        return this.dinheiroDepositado() / this.quantidadeContas()
    }

    renderJuros(numero: string): void {
        let poupancaProcurada = this.consultarNumero(numero)
        
        if(poupancaProcurada != null && poupancaProcurada instanceof Poupanca){
            (<Poupanca> poupancaProcurada).renderJuros()
        } else {
            console.log("Não foi possível render juros!")
        }
    }
}

let C: Conta = new Conta("762", 0)
let P: Poupanca = new Poupanca("214", 1000, 0.5)
let I: ContaImposto = new ContaImposto("123", 0, 0.5)
let B: Banco = new Banco()