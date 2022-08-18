#include <stdio.h>

int main() {
    int meses;
    printf("Quantos meses: ");
    scanf("%d", &meses);
    
    int anos = 0;
    
    while(meses >= 12) {
    	meses = meses - 12;
    	anos++;
	}
	
	printf("%d anos e %d meses", anos, meses);
}
