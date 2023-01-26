export class Persona {
    id?:number;
    nombre: string;
    apellido:string;
    profesion:string;
    imagen:string;
    descripcion:string;


    constructor(nombre:string,apellido:string,profesion:string,imagen:string,descripcion:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.profesion=profesion;
        this.imagen=imagen;
        this.descripcion=descripcion;
    }

    
}
