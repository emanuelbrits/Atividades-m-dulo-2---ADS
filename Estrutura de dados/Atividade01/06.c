#include <stdio.h>

int main() {
	float salario;
	printf("Salario atual: ");
	scanf("%f", &salario);
	printf("Novo salario: %.2f", salario + salario * 0.25);
}