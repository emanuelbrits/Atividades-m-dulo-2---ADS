#include <stdio.h>
#include <stdlib.h>
#define MAX 5

typedef struct{
	int topo;
	char item[MAX];
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

void empilhar (Pilha *p, char x){
	if(cheia(p) == 1){
		printf("Pilha cheia!\n");
	} else {
		p->topo++;
		p->item [p->topo] = x;
	}
}

char desempilhar(Pilha *p){
   char aux;
   
   if(vazia(p) == 1){
		printf("Pilha vazia!\n");
	} else {
		aux = p->item[p->topo];
		p->topo--;
		return aux;
	}
}

char mostrartopo(Pilha *p) {
	return p->item[p->topo];
}