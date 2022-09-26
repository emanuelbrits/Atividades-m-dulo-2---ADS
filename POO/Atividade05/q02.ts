let x : number = 13;
function primo(a : number) : boolean {
    let p = false;
    for (let i = 0; i < x; i++) {
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