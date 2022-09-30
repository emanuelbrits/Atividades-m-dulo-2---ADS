var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pontos) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }
    Jogador.prototype.calcularAtaque = function () {
        return this.forca * this.nivel;
    };
    Jogador.prototype.atacar = function (atacado) {
        if (atacado.estaVivo() === true) {
            atacado.pontos -= this.calcularAtaque();
        }
        else {
            console.log("Esse jogador j\u00E1 est\u00E1 morto\n");
        }
    };
    Jogador.prototype.estaVivo = function () {
        if (this.pontos > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Jogador.prototype.toString = function () {
        var atributos = "Força: " + this.forca + " Nível: " + this.nivel + " Pontos de vida: " + this.pontos;
        return atributos;
    };
    return Jogador;
}());
var j1 = new Jogador(2, 4, 60);
var j2 = new Jogador(4, 2, 40);
j1.atacar(j2);
console.log("J1: " + j1.toString());
console.log("J2: " + j2.toString() + "\n");
j2.atacar(j1);
console.log("J1: " + j1.toString());
console.log("J2: " + j2.toString() + "\n");
j2.atacar(j2);
console.log("J1: " + j1.toString());
console.log("J2: " + j2.toString() + "\n");
j1.atacar(j2);
console.log("J1: " + j1.toString());
console.log("J2: " + j2.toString() + "\n");
j2.atacar(j1);
console.log("J1: " + j1.toString());
console.log("J2: " + j2.toString() + "\n");
j1.atacar(j2);
console.log("J1: " + j1.toString());
console.log("J2: " + j2.toString() + "\n");
j2.atacar(j1);
console.log("J1: " + j1.toString());
console.log("J2: " + j2.toString() + "\n");
j1.atacar(j2);
console.log("J1: " + j1.toString());
console.log("J2: " + j2.toString() + "\n");
j2.atacar(j1);
console.log("J1: " + j1.toString());
console.log("J2: " + j2.toString() + "\n");
j1.atacar(j2);
console.log("J1: " + j1.toString());
console.log("J2: " + j2.toString() + "\n");
