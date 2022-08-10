import {input} from "../../io_utils.js"

function main(){

    const n1 = Number(input('Número 1: '))
    const n2 = Number(input('Número 2: '))

    const numeros = []

    for(let i = n1; i < n2; i++){
        numeros.push(i)
    }

    console.log(numeros)
}

main()