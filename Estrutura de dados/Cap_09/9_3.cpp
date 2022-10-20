#include <stdio.h>
#include <stdlib.h>

Item ultimo(Lista l){

    while(l != NULL){
        if(l->prox == NULL){
            return l->item;
        }
        l = l->prox;
    }

}
