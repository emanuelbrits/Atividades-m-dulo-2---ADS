var x = 13;
function primo(a) {
    var p = false;
    for (var i = 0; i < x; i++) {
        if (i > 1 && x % i === 0 && i !== x) {
            p = false;
            break;
        }
        else {
            p = true;
        }
    }
    return p;
}
console.log(primo(x));
