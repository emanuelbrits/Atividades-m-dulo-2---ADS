#include <stdio.h>

int main() {
    float velocidade;
    printf("Digite a velocidade: ");
    scanf("%f", &velocidade);
    printf("%.2f m/s = %.2f km/h", velocidade, velocidade * 3.6);
}