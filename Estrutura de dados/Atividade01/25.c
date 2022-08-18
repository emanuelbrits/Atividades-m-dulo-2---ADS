#include <stdio.h>

int main() {
    int dias;
    
    printf("Quantos dias voce tem: ");
    scanf("%d", &dias);
    
    int resto = 0;
    
    int anos = dias / 365;
    resto = dias % 365;
    int meses = resto / 12 - 2;
    resto = resto % 12;
    
    printf("%d anos, %d meses e %d dias", anos, meses, resto);
}
