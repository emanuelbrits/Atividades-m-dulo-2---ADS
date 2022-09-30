class Saudacao {

    constructor (public texto: string, public destinatario: string) {}

    obterSaudacao(): void {
        console.log(this.texto + " " + this.destinatario);
    }
}

let saudacao: Saudacao = new Saudacao("Bom dia,", "Emanuel")
saudacao.obterSaudacao()