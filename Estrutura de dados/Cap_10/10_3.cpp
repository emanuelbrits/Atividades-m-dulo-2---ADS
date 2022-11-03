#include <stdio.h>
#include "../9_list/list.h"

void inserirORD(Item x, Lista *L) {
    while( *L != NULL && (*L)->item < x ) L = (*L)->prox;
    *L = no(x, *L); 
}

void insSR(Item x, Lista *L) {
    while( *L != NULL && (*L)->item < x ) L = &(*L)->prox;
    if (*L == NULL || (*L)->item != x){
        *L = no(x, *L); 
    }
}
