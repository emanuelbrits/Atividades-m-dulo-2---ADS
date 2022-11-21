//dupla: Emanuel Brito, Italo Probo

#define troca(a,b) {int x=a; a=b; b=x; };

int particiona(int v[], int p, int u) {
    int x = v[p];
    p--;
    u++;
    while( p<u ) {
        do u--; while( v[u]>x );
        do p++; while( v[p]<x );
        if( p<u ) troca(v[p], v[u]); 
    }
    return u;
}

void quick_sort(int v[], int p, int u) {
    if( p>=u ) return;
    int m = particiona(v, p, u);
    quick_sort(v,p,m);
    quick_sort(v,m+1,u);
}

int main() {
    return 0;
}