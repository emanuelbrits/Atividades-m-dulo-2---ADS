import {input} from "../../io_utils.js"

function main(){

    let n = 0
    let soma = 0
    let qtd_n = 0
    const numeros = []

    while(n != -1){
        n = Number(input('Valor: '))

        if(n != -1){
            soma += n
            qtd_n ++

            numeros.push(n)
        }
    }

    const media = soma / qtd_n

    let somatorio = 0

    for(let i = 0; i < numeros.length; i++){
        somatorio += (numeros[i] - media) ** 2
    }

    const desvio_padrao = Math.sqrt(somatorio / qtd_n)

    console.log(`Média = ${media.toFixed(2)}`)
    console.log(`Desvio Padrão: ${desvio_padrao}`)
}

main()