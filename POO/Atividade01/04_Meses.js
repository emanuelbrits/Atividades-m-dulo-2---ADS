import {input} from "../../io_utils.js"

function main(){

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const dias = ['31', '29', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']

    const mes = Number(input('Mês: '))

    console.log(`${meses[mes - 1]}, ${dias[mes - 1]} dias`)
}

main()