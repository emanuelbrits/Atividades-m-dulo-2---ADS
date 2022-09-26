let nome: string = "João";
let pronome : string = "";

function saudacao(nome : string, pronome : string) : string {
    let frase : string = "";
    if (pronome === "") {
        frase = "Sr." + " " + nome;
    }
    else {
        frase = pronome + " " + nome;
    }
    return frase;
}

console.log(saudacao(nome, pronome));