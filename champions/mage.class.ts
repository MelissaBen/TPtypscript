import Champions from "./champions.class";

export default class Mage extends Champions{

    pointDeVie: number;
    name: string;

    constructor(pointDeVie: number, name: string) {
        super(pointDeVie, name);
        this.name = name;
        this.pointDeVie = pointDeVie;
    }


    soigner() {
        if (this.dead) {
            console.log(this.name + ' est déjà mort(e) !')
        } else {
            console.log(this.name, 'Se soigne !')
            this.pointDeVie += this.degat/2
        }
    }

}