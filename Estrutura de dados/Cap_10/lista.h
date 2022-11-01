#include <stdio.h>
#include <stdlib.h>
#define fmt "%d"

typedef int Item; 
typedef struct no {
    Item item;
    struct no *prox;

} *Lista;     

Lista incluir(Item x, Lista l) {
    Lista n = (Lista)malloc(sizeof(Lista));
    n->item = x;
    n->prox = l;
    return n;
}

void exibir(Lista l) {
    while( l != NULL ) {
        printf(fmt, l->item);
        l = l->prox;
    }
}

void inserir(Item x, Lista *l) {
    while( *l != NULL && (*l)->item < x) l = &(*l)->prox;
    *l = incluir(x,*l);
}

void exibirDec(Lista l){
    if (l == NULL) return;
    exibirDec(l->prox);
    printf(fmt, l->item);
}