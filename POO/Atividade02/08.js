var Circulo = /** @class */ (function () {
    function Circulo() {
        this.raio = 0;
    }
    Circulo.prototype.calcularArea = function () {
        return 3.14 * (Math.pow(this.raio, 2));
    };
    Circulo.prototype.calcularPerimetro = function () {
        return 2 * 3.14 * this.raio;
    };
    return Circulo;
}());
var circulo;
circulo = new Circulo();
circulo.raio = 4;
console.log("Area: ".concat(circulo.calcularArea()));
console.log("Per\u00EDmetro: ".concat(circulo.calcularPerimetro()));
