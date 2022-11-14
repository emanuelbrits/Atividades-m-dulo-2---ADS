import { Banco, Conta, ContaImposto, Poupanca } from "./banco";

let prompt = require('prompt-sync')();

let b : Banco = new Banco()

function menu(){
    console.log(`    1 - Inserir conta     2 - Inserir Poupança     3 - Inserir Conta Imposto\n
    4 - excluir           5 - sacar                6 - depositar\n
    7 - transferir        8 - Render juros         0 - Sair`)
}

let opcao = -1

do {
    menu()

    opcao = prompt("Opção: ")

    if(opcao == 1) {
        criarConta()
    } else if (opcao == 2) {
        criarContaPoupanca()
    }else if (opcao == 3) {
        criarContaImposto()
    }else if (opcao == 4) {
        b.excluir(prompt("Número da conta: "))
    } else if (opcao == 5) {
        b.sacar(prompt("Número da conta: "), prompt("Valor do saque: "))
    }else if (opcao == 6) {
        b.depositar(prompt("Número da conta: "), prompt("Valor do depósito: "))
    }else if (opcao == 7) {
        b.transfeir(prompt("Número da conta a transferir: "), prompt("Número da conta a receber: "), prompt("Valor: "))
    }else if (opcao == 8) {
        b.renderJuros(prompt("Número da conta: "))
    }
}

while(opcao != 0)

function criarConta(){
    let c : Conta = new Conta(prompt("Número da conta: "), prompt("Saldo: "))
    b.inserir(c)
}

function criarContaPoupanca(){
    let c : Poupanca = new Poupanca(prompt("Número da conta: "), prompt("Saldo: "), prompt("Taxa de juros: "))
    b.inserirPoupanca(c)
}

function criarContaImposto(){
    let c : ContaImposto = new ContaImposto(prompt("Número da conta: "), prompt("Saldo: "), prompt("Taxa de desconto: "))
    b.inserirImposto(c)
}