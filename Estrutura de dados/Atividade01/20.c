#include <stdio.h>

int main() {
    int h;
    printf("Quantas horas: ");
    scanf("%d", &h);
    
    int semanas = 0;
    int dias = 0;
    int horas = h;
    
    while(horas >= 24) {
    	horas = horas - 24;
    	dias++;
	}
	
	while(dias >= 7) {
		dias = dias - 7;
		semanas++;
	}
	
	printf("%d semanas, %d dias e %d horas", semanas, dias, horas);
}
