#include <stdio.h>

int main() {
	float base;
	float altura;
	printf("Base do triangulo: ");
	scanf("%f", &base);
	printf("Altura do triangulo: ");
	scanf("%f", &altura);
	printf("%.2f", base * altura);
}