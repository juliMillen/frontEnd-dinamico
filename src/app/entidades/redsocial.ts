export class Redsocial {
    id?:number;
    nombre:string;
    iconoR:string;
    urlR: string;


    constructor(nombre:string,iconoR:string, urlR:string){
       this.nombre=nombre;
       this.iconoR= iconoR;
       this.urlR=urlR;
    }
}
