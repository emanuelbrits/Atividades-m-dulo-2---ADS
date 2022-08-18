#include <stdio.h>

int main() {
	float valor;
	printf("Valor em R$: ");
	scanf("%f", &valor);
	printf("%.2f", valor * 0.7);
}