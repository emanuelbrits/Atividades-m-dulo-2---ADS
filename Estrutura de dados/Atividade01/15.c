#include <stdio.h>

int main() {
    int f;
    printf("Temperatura em F: ");
    scanf("%d", &f);
    printf("%dF equivalem a %dC", f, (5 * f - 160) / 9);
}