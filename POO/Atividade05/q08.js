var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function eh_par(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
var filtrar = function (array) { return array.filter(eh_par); };
console.log(filtrar(array));
