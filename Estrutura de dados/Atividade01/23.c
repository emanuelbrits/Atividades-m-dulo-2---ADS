#include <stdio.h>

int main() {
    float n1, n2, n3;
    
    printf("Digite um numero: ");
    scanf("%f", &n1);
    
	printf("Digite outro numero: ");
    scanf("%f", &n2);
    
	printf("Digite o ultimo numero: ");
    scanf("%f", &n3);
    
    printf("A media eh igual a: %.1f", (n1 + n2 + n3) / 3);
}
