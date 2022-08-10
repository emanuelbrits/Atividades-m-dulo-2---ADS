import {input} from "../../io_utils.js"

function main(){

    const n1 = Number(input('Número 1: '))
    const n2 = Number(input('Número 2: '))
    const n3 = Number(input('Número 3: '))

    console.log(`Maior: ${maior(n1, n2, n3)}`)
    console.log(`Menor: ${menor(n1, n2, n3)}`)
}

function maior(n1, n2, n3){

    let maior = n1

    if(n2 > n1){
        maior = n2
    }if(n3 > maior){
        maior = n3
    }

    return maior
}

function menor(n1, n2, n3){

    let menor = n1

    if(n2 < n1){
        menor = n2
    }if(n3 < menor){
        menor = n3
    }

    return menor
}

main()