#include <stdio.h>

int main(){
	float preco;
	
	printf("Preco da mercadoria: ");
	scanf("%f", &preco);
	
	printf("Uma entrada de RS %.2f e duas prestacoes de R$ %.2f", preco / 3, preco / 3);
}