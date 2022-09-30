var Equipamento = /** @class */ (function () {
    function Equipamento(ligado) {
        this.ligado = ligado;
    }
    Equipamento.prototype.liga = function () {
        if (!this.ligado) {
            this.ligado = true;
        }
    };
    Equipamento.prototype.desliga = function () {
        if (this.ligado) {
            this.ligado = false;
        }
    };
    Equipamento.prototype.inverte = function () {
        if (this.ligado === true) {
            this.ligado = false;
        }
        else {
            this.ligado = true;
        }
    };
    Equipamento.prototype.estaLigado = function () {
        return this.ligado;
    };
    return Equipamento;
}());
var e = new Equipamento(false);
e.liga();
console.log(e.ligado);
e.liga();
console.log(e.ligado);
e.desliga();
console.log(e.ligado);
console.log(e.estaLigado());
e.inverte();
console.log(e.ligado);
