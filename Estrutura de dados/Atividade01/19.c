#include <stdio.h>

int main() {
    int m;
    printf("M: ");
    scanf("%d", &m);
    printf("%d m = %d km", m, m / 1000);
}