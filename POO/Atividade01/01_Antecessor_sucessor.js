import {input} from "../../io_utils.js"

function main(){

    const numero = Number(input('Digite um número: '))

    console.log(`Antecessor: ${Math.trunc(numero) - 1}\nSucessor: ${Math.trunc(numero) + 1}`)
}

main()