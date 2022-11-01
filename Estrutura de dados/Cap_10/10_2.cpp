#include <stdio.h>
#include <stdlib.h>
#include "lista.h"

int main() {
    Lista l = NULL;
    
    int x;

    while(x != 0){
        scanf("%d", &x);
        inserir(x,&l);
    }

    exibirDec(l);
}