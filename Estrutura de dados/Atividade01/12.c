#include <stdio.h>

int main() {
	float raio;
	printf("Raio da circunferencia: ");
	scanf("%f", &raio);
	printf("Comprimento: %.2f", 2 * 3.14 * raio);
}