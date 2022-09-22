#include <stdio.h>
#include <stdlib.h>

typedef struct Pilha {

	int topo;
	int max;
	int *pElem;

} Pilha;

void criarpilha( struct Pilha *p, int m ){

   p->topo = -1;
   p->max = m;
   p->pElem = (int*) malloc (m * sizeof(int));

}
int vazia ( struct Pilha *p ){

   if( p-> topo == -1 )

      return 1;

   else

      return 0;

}

int cheia ( struct Pilha *p ){

	if (p->topo == p->max - 1)

		return 1;

	else

		return 0;

}

void empilhar ( struct Pilha *p, int v){

	p->topo++;
	p->pElem [p->topo] = v;

}

int desempilhar ( struct Pilha *p ){

   int aux = p->pElem [p->topo];
   p->topo--;
   return aux;

}

int retornatopo ( struct Pilha *p ){

   return p->pElem [p->topo];

}
		
