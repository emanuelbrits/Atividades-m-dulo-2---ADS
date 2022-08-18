#include <stdio.h>

int main() {
	
	float reais;
	printf("Quantos R$ deseja trocar ? ");
	scanf("%f", &reais);
	printf("R$ %.2f equivalem a U$ %.2f", reais, reais * 5.08);
}