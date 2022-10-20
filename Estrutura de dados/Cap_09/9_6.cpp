#include <stdio.h>
#include <stdlib.h>

bool substitui(Item a, Item b, Lista l){

    if (l == NULL){
        return -1;
    }else {
        if(l->item == a){
            l->item = b;
        }
        return substitui(a,b,l);
    }
    return false;
}
