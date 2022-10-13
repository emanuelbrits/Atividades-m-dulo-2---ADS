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
			return -1;
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
	int mat,cont,achou,conrem,resp;
	int i = -1;
	do{
		printf("\nRemover aluno\n\n");printf("\nMatricula: ");
		scanf("%d", &mat);
		achou=procura(mat);
		if(achou != -1){
			mostrar(achou);
			printf("\nDeseja remover: 1-SIM 2-NAO: ");
			scanf("%d",&resp);
			if(resp == 1){

				while(lista[i].mat != NULL){
					i++;
					printf("\n%d", i);
				}

				lista[achou] = lista[i];

				printf("\nAluno removido");
		} else {
			printf("\nAluno nao foi removido");
			break;
		} 
		} else {
			printf("\nAluno nao encontrado");
		}

		printf("\nRemover outro aluno: 1-SIM, 2-NAO: ");
		scanf("%d", &cont);
	} while(cont == 1);
}

//estrategia 2: mover TODOS os elementos que estao APOS  o elemento que deve ser removido UMA POSICAO A FRENTE.
void remover01(){
	int mat,cont,achou,conrem,resp;
	int i = -1;
	do{
		printf("\nRemover aluno\n\n");printf("\nMatricula: ");
		scanf("%d", &mat);
		achou=procura(mat);
		if(achou != -1){
			mostrar(achou);
			printf("\nDeseja remover: 1-SIM 2-NAO: ");
			scanf("%d",&resp);
			if(resp == 1){

				while (i < achou){
					i++;
				}

				while(i < MAX-1){
					lista[i].mat = lista[i + 1].mat;
					lista[i].nome = lista[i + 1].nome;
				}
				

				printf("\nAluno removido");
		} else {
			printf("\nAluno nao foi removido");
			break;
		} 
		} else {
			printf("\nAluno nao encontrado");
		}

		printf("\nRemover outro aluno: 1-SIM, 2-NAO: ");
		scanf("%d", &cont);
	} while(cont == 1);
}

int main(){
	aluno *a1 = new aluno();
	
	incluirDesordenado(*a1);

	printf("\n\n\n\n\n\n\n\n\n\n\n\n\n");
	mostrar(0);
	remover01();
	mostrar(0);
	mostrar(1);
	mostrar(2);

	return 0;
}