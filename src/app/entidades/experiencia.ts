export class Experiencia {
    id?: number;
    logo: string;
    institucion: string;
    nombre:string;
    fechaI:String;
    fechaFin: string;


    constructor(logo:string, institucion:string, nombre:string, fechaI:string, fechaFin:string){
        this.logo= logo;
        this.institucion=institucion;
        this.nombre=nombre;
        this.fechaI=fechaI;
        this.fechaFin=fechaFin;
    }
}
