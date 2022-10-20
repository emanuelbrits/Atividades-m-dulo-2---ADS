#include <stdio.h>
#include <stdlib.h>

int tam(Lista a) {
    if( a == NULL ) return 0;
    return 1 + (a->prox); 
}


int igual (Lista a, Lista b){
    int count = 0;
    int aux = tam(a);
    while ( a != NULL && b != NULL ) {
        if ( b->item == a->item){
            count++;
        }
        a = a->prox;
        b = b->prox;
    }
    if(count == aux) return 1;
    else return 0;
}
