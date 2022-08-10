import {input} from "../../io_utils.js"

function main(){

    const v = Number(input("Valor: "))
    const t = Number(input('Juros: '))

    const array = calculo(v, t)

    console.log(array)
}

function calculo(v, t){

    let juros = v

    const valores = []

    for(let i = 0; i < 12; i++){
        juros += juros * (t/100)
        valores.push(juros.toFixed(2))
    }

    return valores
}

main()