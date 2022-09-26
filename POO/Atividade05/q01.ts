let valor : number = 9;
function par_impar(valor : number) : boolean {
    if (valor % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(par_impar(valor));