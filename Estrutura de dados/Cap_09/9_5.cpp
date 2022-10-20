#include <stdio.h>
#include <stdlib.h>

int soma(Lista l){

    if (l != NULL) {
        return l->item + soma(l->prox);
    } 
    else {
        return 0;
    }

}
