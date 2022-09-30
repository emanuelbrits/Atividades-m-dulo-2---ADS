var Triangulo = /** @class */ (function () {
    function Triangulo(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Triangulo.prototype.checar = function () {
        var modulo = this.b - this.c;
        if (modulo < 0) {
            modulo *= -1;
        }
        if (modulo < this.a && this.a < this.b + this.c) {
            return true;
        }
        else {
            return false;
        }
    };
    Triangulo.prototype.ehIsoceles = function () {
        if (!this.checar()) {
            return false;
        }
        else if ((this.a === this.b && this.a !== this.c) || (this.b === this.c && this.b !== this.a) || (this.c === this.a && this.c !== this.b)) {
            return true;
        }
        else {
            return false;
        }
    };
    Triangulo.prototype.ehEscaleno = function () {
        if (!this.checar()) {
            return false;
        }
        else if (this.a !== this.b && this.b !== this.c && this.a !== this.c) {
            return true;
        }
        else {
            return false;
        }
    };
    Triangulo.prototype.ehEquilatero = function () {
        if (!this.checar()) {
            return false;
        }
        else if (this.a === this.b && this.b === this.c) {
            return true;
        }
        else {
            return false;
        }
    };
    return Triangulo;
}());
var t = new Triangulo(3, 4, 5);
console.log(t.checar());
console.log(t.ehEquilatero());
console.log(t.ehEscaleno());
console.log(t.ehIsoceles());
