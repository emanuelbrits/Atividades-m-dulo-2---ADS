var Retangulo = /** @class */ (function () {
    function Retangulo() {
        this.l1 = 0;
        this.l2 = 0;
    }
    Retangulo.prototype.calcularArea = function () {
        return this.l1 * this.l2;
    };
    Retangulo.prototype.calcularPerimetro = function () {
        return this.l1 * 2 + this.l2 * 2;
    };
    return Retangulo;
}());
var retangulo;
retangulo = new Retangulo();
retangulo.l1 = 23;
retangulo.l2 = 10;
console.log(retangulo.calcularPerimetro());
