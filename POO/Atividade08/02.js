var Hora = /** @class */ (function () {
    function Hora(hora, minuto, segundo) {
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }
    Hora.prototype.get_hora = function () {
        return this.hora;
    };
    Hora.prototype.get_minuto = function () {
        return this.minuto;
    };
    Hora.prototype.get_segundo = function () {
        return this.segundo;
    };
    Hora.prototype.mostrar_hora = function () {
        console.log("".concat(this.hora, ":").concat(this.minuto, ":").concat(this.segundo));
    };
    return Hora;
}());
var h1 = new Hora(12, 40, 15);
h1.mostrar_hora();
