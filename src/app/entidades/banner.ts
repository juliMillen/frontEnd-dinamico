export class Banner {
    id?: number;
    urlBanner: string;
    presentacion: string;
    constructor(urlBanner:string, presentacion:string){
        this.urlBanner=urlBanner;
        this.presentacion=presentacion;
    }
}
