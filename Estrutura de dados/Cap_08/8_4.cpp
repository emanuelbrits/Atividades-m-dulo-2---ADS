//dupla: Emanuel Brito e Italo Probo

#define troca(a,b) {int x=a; a=b; b=x; };

int seleciona(int v[],int n) {
    int i = 0;
    for(int j=1; j<n ; j++)
        if(v[i]<v[j]) i = j;
    return i;
}

void selection_sort(int v[], int n) {
    while(n>1) {
        troca( v[seleciona(v,n)], v[n-1]);
        n--;
    }
}

int main(){
    return 0;
}
