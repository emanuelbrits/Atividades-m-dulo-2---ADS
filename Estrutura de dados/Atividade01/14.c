#include <stdio.h>

int main() {
    int c;
    printf("Temperatura em C: ");
    scanf("%d", &c);
    printf("%dC equivalem a %dF.", c, (9 * c + 160) / 5);
}