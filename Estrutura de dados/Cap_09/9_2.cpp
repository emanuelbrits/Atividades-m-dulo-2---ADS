#include <stdio.h>
#include <stdlib.h>

int ocorrencia(Item x, Lista l){
    int count = 0;
    while (l != NULL) {
        if (l->item == x){
            count++;
        } 
        l = l->prox;
    }
    return count;
}
