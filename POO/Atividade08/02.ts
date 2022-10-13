class Hora {
    constructor(private hora: number, private minuto: number, private segundo: number){
        this.hora = hora
        this.minuto = minuto
        this.segundo = segundo
    }

    public get_hora():number {
        return this.hora
    }
    
    public get_minuto():number {
        return this.minuto
    }
    
    public get_segundo():number {
        return this.segundo
    }

    public mostrar_hora(): void{
        console.log(`${this.hora}:${this.minuto}:${this.segundo}`)
    }
}

let h1: Hora = new Hora(12, 40, 15)

h1.mostrar_hora()