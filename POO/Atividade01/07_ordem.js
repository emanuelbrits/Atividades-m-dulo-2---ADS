import {input} from "../../io_utils.js"

function main(){

    const numeros = [7, 3, 6, 2, 9]
    console.log(numeros)
    const tamanho = numeros.length
    const ordem_crescente = numeros

    let valor_a_trocar1
    let k = 0

    for(let i = 0; i < tamanho -1; i++){

        for(let j = 0; j < tamanho - 1 - k; j++){
            if(ordem_crescente[j] > ordem_crescente[j + 1]){

                valor_a_trocar1 = ordem_crescente[j]
                ordem_crescente[j] = ordem_crescente[j + 1]
                ordem_crescente[j + 1] = valor_a_trocar1
            }
        }

        k++
    }

    console.log(ordem_crescente)

    const ordem_decrescente = numeros

    let valor_a_trocar2
    let l = 0

    for(let i = 0; i < tamanho -1; i++){

        for(let j = 0; j < tamanho - 1 - l; j++){
            if(ordem_decrescente[j] < ordem_decrescente[j + 1]){

                valor_a_trocar2 = ordem_decrescente[j]
                ordem_decrescente[j] = ordem_decrescente[j + 1]
                ordem_decrescente[j + 1] = valor_a_trocar2
            }
        }

        l++
    }

    console.log(ordem_decrescente)
}

main()