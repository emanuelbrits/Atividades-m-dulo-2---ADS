class Conta {
    constructor (public numero: string, public saldo: number) {}
    
    sacar(valor: number): boolean {
    if(this.saldo - valor > 0) {
        this.saldo = this.saldo - valor
        return true
    } else {
        return false
    }
    }

    depositar(valor: number): void {
    this.saldo = this.saldo + valor;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        
        if(this.sacar(valor) === true) {
            contaDestino.depositar(valor)
        }
    }

    consultarSaldo(): number {
    return this.saldo;
    }
}

let c1: Conta = new Conta("123", 400)
let c2: Conta = new Conta("321", 300)

c1.sacar(600)
c1.transferir(c2, 600)
console.log(c1.consultarSaldo())
console.log(c2.consultarSaldo())