#include <stdio.h>

int main() {
    float custo_fabrica;
    
    printf("Custo de fabrica do carro: ");
    scanf("%f", &custo_fabrica);
    
    printf("Custo para o consumidor = %.2f", custo_fabrica * 0.28 + custo_fabrica * 0.45 + custo_fabrica);
}
