#include <stdio.h>

int main() {
	int rs;
	
	printf("Quantos R$ sacar: ");
	scanf("%d", &rs);
	
	int resto = 0;
	
	int rs200 = rs / 200;
	resto = rs % 200;
	int rs100 = resto / 100;
	resto %= 100;
	int rs50 = resto / 50;
	resto %= 50;
	int rs20 = resto / 20;
	resto %= 20;
	int rs10 = resto / 10;
	resto %= 10;
	int rs5 = resto / 5;
	resto %= 5;
	
	printf("%d notas de R$ 200,00\n%d notas de R$ 100,00\n%d notas de R$ 50,00\n%d notas de R$ 20,00\n%d notas de R$ 10,00\n%d notas de R$ 5,00\n%d notas de R$ 2,00\n", rs200, rs100, rs50, rs20, rs10, rs5, resto);
}