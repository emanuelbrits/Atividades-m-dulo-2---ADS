#include <stdio.h>
#include <stdlib.h>

int tam(Lista a) {
    if( a == NULL ) return 0;
    return 1 + (a->prox); 
}

Item enesimo(int x, Lista a){
    for (int i = 0; i < tam(a); i++)
    {
        if (i == x - 1) break;
        a = a -> prox;
    }
    return a->item;
}
