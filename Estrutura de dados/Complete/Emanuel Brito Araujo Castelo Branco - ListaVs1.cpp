#include <stdio.h>
#include <iostream>
#define MAX 5
using namespace std;

typedef struct aluno{
	int mat;
	string nome;	
}Aluno;

Aluno lista[MAX];


void incluirDesordenado(Aluno e){
	int qa = 0; int cont;

	printf("\nInserir novo aluno");
	do {
		if(qa < MAX){
			printf("\nMatricula do aluno: ");
			scanf("%d", &lista[qa].mat);
			printf("\nNome do aluno: ");
			scanf("%s", &lista[qa].nome);
			qa++;
		} else {
			printf("\nLista Cheia!");
			break;
		}

		printf("\nInserir outro aluno: 1-SIM, 2-NAO: ");
		scanf("%d", &cont);
	}while (cont == 1);	
}

//retorna a posicao do elemento procurado
int procura(int mat){	
	for(int i = 0; i < MAX; i++){
		if(mat == lista[i].mat){
			return i;
			break;
		} else {
			return 0;
		}
	}
}

//recebe a posicao e imprime o elemento na tela
void mostrar(int pos){
	for(int i = 0; i < MAX; i++){
		if(i == pos){
			printf("\nNome: %s", &lista[i].nome);
			cout<<"\nMatricula: ", cout<<lista[i].mat<< endl;
			break;
		}else if(lista[i].mat == NULL){
			printf("\nElemento nao encontrado!");
			break;
		}
	}
}

//procura o elemento e depois mostra o elemento encontrado (se nao for encontrado informa q ele nao existe)
void consultar(int mat){	
	for(int i = 0; i < MAX; i++){
		if(mat == lista[i].mat){
			mostrar(i);
			break;
		}else if(lista[i].mat == NULL){
			printf("\nElemento nao encontrado!");
			break;
		}
	}
}

//estrategia 1: colocar o ultimo elemento da lista na posicao do elemento removido
void remover00(){
	
}

//estrategia 2: mover TODOS os elementos que estao APOS  o elemento que deve ser removido UMA POSICAO A FRENTE.
void remover01(){
}

int main(){
	aluno *a1 = new aluno();
	
	incluirDesordenado(*a1);

	mostrar(3);

	consultar(1);

	return 0;
}