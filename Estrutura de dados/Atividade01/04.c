#include <stdio.h>

int main(){
	int numero1;
	int numero2;
	printf("Primeiro numero: ");
	scanf("%d", &numero1);
	printf("Segundo numero: ");
	scanf("%d", &numero2);
	printf("Quociente = %d\nResto = %d", numero1/numero2, numero1%numero2);
}