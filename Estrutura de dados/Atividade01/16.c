#include <stdio.h>

int main() {
    float km;
    printf("Km: ");
    scanf("%f", &km);
    printf("%.2f km = %.2f m", km, km * 1000);
}