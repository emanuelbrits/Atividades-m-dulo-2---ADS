#include <stdio.h>

typedef struct {char nome[50], int idade, char cpf[14];} Pessoa;

int main() {
	Pessoa nome = {"Emanuel Brito"};
	Pessoa idade = 18;
	Pessoa cpf = {"082.036.823-75"};
	
	printf(nome.Pessoa, idade.Pessoa, cpf.Pessoa);
}