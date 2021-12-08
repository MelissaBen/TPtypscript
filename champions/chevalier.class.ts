import Champions from "./champions.class";

export default class Chevalier extends Champions{

    pointDeVie: number;
    name: string;

    constructor(pointDeVie: number, name: string) {
        super(pointDeVie, name);
        this.name = name;
        this.pointDeVie = pointDeVie;
    }


    encaisser() {
        if (!this.protection) {
            this.pointDeVie -= this.degat
        }
    }

}