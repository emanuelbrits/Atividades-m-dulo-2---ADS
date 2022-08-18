#include <stdio.h>

int main() {
    float velocidade;
    printf("Digite a velocidade: ");
    scanf("%f", &velocidade);
    printf("%.2f km/h = %.2f m/s", velocidade, velocidade / 3.6);
}