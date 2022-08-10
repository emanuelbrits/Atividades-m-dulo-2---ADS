import {input} from "../../io_utils.js"

function main(){

    const reais = Number(input('Quantos reais ? '))

    console.log(`${(reais * 0.0000084).toFixed(8)} bitcoins`)
}

main()