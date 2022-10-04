#include "../pilha2.h"
#include "stdio.h"
#include "stdbool.h"
#include "string.h"

bool is_valid(char* operacao) {

    Pilha* pilhaA = create_stack();
	Pilha* pilhaB = create_stack();

	for(int i = 0; i < strlen(operacao); i++){

        if(operacao[i] == '(' || operacao[i] == '[' || operacao[i] == '{') {
            push(operacao[i], pilhaA);
        } else {
            char element = pop(pilhaA);
            if(element == '(' && operacao[i] != ')') {
                return false;
            } else if(element == '[' && operacao[i] != ']') {
                return false;
            } else if(element == '{' && operacao[i] != '}') {
                return false;
            } else if(element == '\0') {
                return false;
            }
        }

    }

    if(strlen(operacao) % 2 != 0) {
        return false;
    }

    return true;
	
}

int main() {

	char* expression[100];
	scanf("%s", expression);

	printf("\n%s", is_valid(expression) ? "eh uma operacao valida" : "operacao invalida");

	return 0;
}