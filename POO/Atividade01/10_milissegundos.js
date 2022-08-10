import {input} from "../../io_utils.js"

function main(){

    const t = Number(input('Tempo em milissegundos: '))

    converter(t)
}

function converter(t){

    let milissegundos = t

    let segundos = 0
    let minutos = 0
    let horas = 0
    let dias = 0

    while(milissegundos >= 1000){
        milissegundos = milissegundos - 1000
        segundos++
    }

    while(segundos >= 60){
        segundos = segundos - 60
        minutos++
    }

    while(minutos >= 60){
        minutos = minutos - 60
        horas++
    }

    while(horas >= 24){
        horas = horas - 24
        dias ++
    }

    console.log(`${dias} dias ${horas}:${minutos}:${segundos}`)
}

main()