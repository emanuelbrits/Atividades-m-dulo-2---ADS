#include <stdio.h>

int main() {
	float lado;
	printf("Lado do quadrado: ");
	scanf("%f", &lado);
	printf("Area do quadrado: %.2f", lado * lado);
}