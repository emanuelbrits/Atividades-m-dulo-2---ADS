const array : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function eh_par(value : number) : boolean {
    if(value % 2 === 0){
        return true
    }else {
        return false
    }
}

let filtrar = (array : number[]) => array.filter(eh_par)

console.log(filtrar(array))