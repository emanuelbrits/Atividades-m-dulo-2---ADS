#include <stdio.h>
#include <stdlib.h>


#define fmt "%d"
typedef int Item;
typedef struct no{
    Item item;
    struct no *prox;
    
} *Lista;

    Lista no(Item x, Lista p) {
    Lista n = malloc(sizeof(struct no));
    n->item = x;
    n->prox = p;
    return n;
}

