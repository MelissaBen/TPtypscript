import Champions from "./champions.class";

export default class Archer extends Champions{

    pointDeVie: number;
    name: string;

    constructor(pointDeVie: number, name: string) {
        super(pointDeVie, name);
        this.name = name;
        this.pointDeVie = pointDeVie;
    }

    attaque(victime: Champions, deux?: boolean) {
        if (victime.dead) {
            console.log(victime.name + ' est déjà mort(e) !')
        } else {
            if (deux) {
                console.log(this.name + ' attck 2 fois ' + victime.name)
                victime.encaisser();
                victime.encaisser();
            } else {
                console.log(this.name + ' attck une  fois ' + victime.name)
                victime.encaisser();   
            }
        }
        
    }

}