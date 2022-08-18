#include <stdio.h>

int main() {
    int anos, cigarros;
    float preco;
    
    printf("ha quantos anos vc fuma: ");
    scanf("%d", &anos);
    
    printf("Quantos cigarros por dia: ");
    scanf("%d", &cigarros);
    
    printf("Preco da carteira de cigarros: ");
    scanf("%f", &preco);
    
    int cigarros_fumados = anos * 365 * cigarros;
    
    float gasto = cigarros_fumados / 20 * preco;
    
    printf("Voce gastou R$ %.2f", gasto);
}
