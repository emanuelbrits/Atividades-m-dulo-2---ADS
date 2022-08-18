#include <stdio.h>
#include <conio.h>

int main() {
	
	long num, inverso = 0, digitado, lembrar;
	
	printf("Digite um numero: ");
	scanf("%ld", &num);
	digitado = num;
	
	for ( ; num > 0; ) {
		
		lembrar = num % 10;
		inverso = inverso * 10 + lembrar;
		num /= 10;
	}
	
	printf("Numero digitado: %ld\n", digitado);
	printf("Numero inverso: %ld", inverso);
	
}