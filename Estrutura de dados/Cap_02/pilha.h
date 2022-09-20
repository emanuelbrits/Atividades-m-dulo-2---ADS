#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct pilha {
	int value;
	struct pilha* prox;	
} Pilha;

Pilha* Criar_item(int valor) {
	Pilha* item = (Pilha*) malloc(sizeof(Pilha));
	item->value = valor;
	item->prox = NULL;

	return item;
}

void push(int novo_valor, Pilha* pilha) {
	Pilha* Novo_item = Criar_item(novo_valor);
	if(pilha->prox == NULL) {
		pilha->prox = Novo_item;
	} else {
		Novo_item->prox = pilha->prox;
		pilha->prox = Novo_item;
	}
}

Pilha* criar_pilha() {
	Pilha* nova_pilha = Criar_item(0);

	return nova_pilha;
}

bool vazia(Pilha* pilha) {
	return pilha->prox == NULL;
}

int pop(Pilha* pilha) {
	if(!vazia(pilha)) {
		Pilha* t = pilha->prox;
		int value = t->value;
		pilha->prox = pilha->prox->prox;
		free(t);
		return value;
	}

	return '\0';
}
		
int mostrar_topo(Pilha* pilha){
	if(vazia(pilha)) {
		return '\0';
	}

	return pilha->prox->value;
}