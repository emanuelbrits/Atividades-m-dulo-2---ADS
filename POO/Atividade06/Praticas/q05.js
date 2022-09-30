var Saudacao = /** @class */ (function () {
    function Saudacao(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    Saudacao.prototype.obterSaudacao = function () {
        console.log(this.texto + " " + this.destinatario);
    };
    return Saudacao;
}());
var saudacao = new Saudacao("Bom dia,", "Emanuel");
saudacao.obterSaudacao();
