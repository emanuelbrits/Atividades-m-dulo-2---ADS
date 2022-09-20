#include "pilha.h"
#include "stdio.h"

void ordenar(int value, Pilha* pilhaA, Pilha* pilhaB) {

	if(!(value <= mostrar_topo(pilhaA) || vazia(pilhaA))) {
		push(pop(pilhaA), pilhaB);
		ordenar(value, pilhaA, pilhaB);
	} else {
		push(value, pilhaA);
		return;
	}

	push(pop(pilhaB), pilhaA);
}

int main() {

	Pilha* pA = criar_pilha();
	Pilha* pB = criar_pilha();

	int value;
	scanf("%d", &value);

	while(value != 0) {
		ordenar(value, pA, pB);
		scanf("%d", &value);
	}

	printf("\nitens organizados:\n");

	while(!vazia(pA)) {
		printf("%d\n", pop(pA));
	}

	return 0;
}