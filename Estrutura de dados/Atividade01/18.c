#include <stdio.h>

int main() {
    float m;
    printf("M: ");
    scanf("%f", &m);
    printf("%.2f m = %.2f cm", m, m * 100);
}