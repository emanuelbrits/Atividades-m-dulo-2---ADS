#include <stdio.h>

int main() {
    int minutos;
    printf("Quantos minutos: ");
    scanf("%d", &minutos);
    
    int horas = 0;
    int dias = 0;
    
    while(minutos >= 60) {
    	minutos -= 60;
    	horas++;
	}
	
	while(horas >= 24) {
		horas -= 24;
		dias++;
	}
	
	printf("%d dias, %d horas e %d minutos", dias, horas, minutos);
}
