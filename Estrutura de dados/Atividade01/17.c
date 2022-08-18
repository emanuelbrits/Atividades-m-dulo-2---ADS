#include <stdio.h>

int main() {
    float kg;
    printf("Kg: ");
    scanf("%f", &kg);
    printf("%.2f kg = %.2f g", kg, kg * 1000);
}