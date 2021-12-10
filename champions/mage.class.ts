import Champions from "./champions.class";

export default class Mage extends Champions{

    score: number;
    name: string;

    constructor(score: number, name: string) {
        super(score, name);
        this.name = name;
        this.score = score;
    }

    //Le mage peut se soigner sauf s'il est mort

    soigner() {
        if (this.dead) {
            console.log(this.name + ' est déjà mort(e) !')
        } else {
            console.log(this.name, 'Se soigne !')
            this.score += this.demage/2
        }
    }

}