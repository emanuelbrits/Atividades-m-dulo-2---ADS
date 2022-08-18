#include <stdio.h>
#include <math.h>

int main() {
	float raio;
	printf("Raio da circunferencia: ");
	scanf("%f", &raio);
	double resultado = pow(raio, 3);
	printf("Volume: %.2f", (4 * 3.14 * resultado) / 3);
}
	