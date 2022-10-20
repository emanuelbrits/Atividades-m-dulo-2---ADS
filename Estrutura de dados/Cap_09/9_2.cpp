#include <stdio.h>
#include <stdlib.h>

int ocorrencia(Item x, Lista list){
    int count = 0;
    while (list != NULL) {
        if (list->item == x){
            count++;
        } 
        list = list->prox;
    }
    return count;
}
