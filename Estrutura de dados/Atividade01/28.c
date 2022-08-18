#include <stdio.h>

int main() {
	float kg;
	
	printf("Quantidade de latao desejada: ");
	scanf("%f", &kg);
	
	printf("%.2f kg de cobre e %.2f de zinco", kg * 0.7, kg * 0.3);
}