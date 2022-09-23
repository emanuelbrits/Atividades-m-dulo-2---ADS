#include "../pilha.h"
#include "stdio.h"

void ordenarpilha(int x, Pilha* a, Pilha* b) {

	if(vazia(a) == 0) {
		empilhar(b, desempilhar(a));
		ordenarpilha(x, a, b);
	} else {
		empilhar(a, x);
		return;
	}

	empilhar(a, desempilhar(b));
	
}
		


int main() {
	Pilha *a = (Pilha*)malloc(sizeof(Pilha));
	criarpilha(a);
	
	Pilha *b = (Pilha*)malloc(sizeof(Pilha));
	criarpilha(b);
	
	int x;
	scanf("%d", &x);
	
	while(x != 0) {
		ordenarpilha(x, a, b);
		scanf("%d", &x);	
	}

	printf("\nsequencia:\n");
	                                 
	while(vazia(a) == 0) {
		printf("%d\n", desempilhar(a));
	}  
	
	return 0;
}                       

	
	                                 