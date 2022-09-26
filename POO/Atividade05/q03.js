var nome = "João";
var pronome = "";
function saudacao(nome, pronome) {
    var frase = "";
    if (pronome === "") {
        frase = "Sr." + " " + nome;
    }
    else {
        frase = pronome + " " + nome;
    }
    return frase;
}
console.log(saudacao(nome, pronome));
