import {input} from "../../io_utils.js"

function main(){

    const frase = input('Frase: ')
    const sem_acentos = frase.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    console.log(sem_acentos)
}

main()