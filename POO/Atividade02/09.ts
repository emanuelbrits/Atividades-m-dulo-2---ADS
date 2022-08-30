class SituacaoFinaceira {
    valorCreditos : number = 0
    valorDebitos : number = 0

    saldo() : number {
        return this.valorCreditos - this.valorDebitos
    }
}

let situacaoFinaceira : SituacaoFinaceira
situacaoFinaceira = new SituacaoFinaceira()

situacaoFinaceira.valorCreditos = 1000
situacaoFinaceira.valorDebitos = 700

console.log(`Saldo: ${situacaoFinaceira.saldo()}`)