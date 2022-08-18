#include <stdio.h>

int main() {
    int anos, meses, dias;
    
    printf("Quantos anos voce tem: ");
    scanf("%d", &anos);
    
	printf("Quantos meses voce tem: ");
    scanf("%d", &meses);
    
	printf("Quantos dias voce tem: ");
    scanf("%d", &dias);
    
    printf("Voce tem %d dias", anos * 365 + meses * 30 + dias);
}
