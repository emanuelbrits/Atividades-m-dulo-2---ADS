#include <stdio.h>
#include <stdlib.h>
#define MAX 5

typedef struct{
	int topo;
	int item[MAX];
} Pilha;

void criarpilha(Pilha *p){
   p->topo = -1;
}

int vazia (Pilha *p){
   if(p->topo == -1) {
   	return 1;
   } else {
   	return 0;
   }
}

int cheia (Pilha *p){
	if (p->topo == MAX-1)
		return 1;
	else
		return 0;
}

void empilhar (Pilha *p, int x){
	if(cheia(p) == 1){
		printf("Pilha cheia!\n");
	} else {
		p->topo++;
		p->item [p->topo] = x;
	}
}

int desempilhar(Pilha *p){
   int aux;
   
   if(vazia(p) == 1){
		printf("Pilha vazia!\n");
	} else {
		aux = p->item[p->topo];
		p->topo--;
		return aux;
	}
}

int mostrartopo(Pilha *p) {
	return p->item[p->topo];
}