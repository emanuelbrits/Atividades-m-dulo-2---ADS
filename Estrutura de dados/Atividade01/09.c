#include <stdio.h>

int main() {
	float base;
	float altura;
	printf("Base: ");
	scanf("%f", &base);
	printf("ALtura: ");
	scanf("%f", &altura);
	printf("Area do triangulo: %.2f", (base * altura) / 2);
}