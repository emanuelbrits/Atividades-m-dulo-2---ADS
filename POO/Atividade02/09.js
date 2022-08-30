var SituacaoFinaceira = /** @class */ (function () {
    function SituacaoFinaceira() {
        this.valorCreditos = 0;
        this.valorDebitos = 0;
    }
    SituacaoFinaceira.prototype.saldo = function () {
        return this.valorCreditos - this.valorDebitos;
    };
    return SituacaoFinaceira;
}());
var situacaoFinaceira;
situacaoFinaceira = new SituacaoFinaceira();
situacaoFinaceira.valorCreditos = 1000;
situacaoFinaceira.valorDebitos = 700;
console.log("Saldo: ".concat(situacaoFinaceira.saldo()));
