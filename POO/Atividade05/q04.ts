let numeros : number[] = [4, 73, 12, 8];
function lista(numeros : number[]) : string {
    let frase : string = "" + numeros[0];
    for (var i = 1; i < numeros.length; i++) {
        frase += "-" + numeros[i];
    }
    return frase;
}
console.log(lista(numeros));