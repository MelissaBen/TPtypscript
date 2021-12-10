import Champions from "./champions.class";

export default class Chevalier extends Champions{

    score: number;
    name: string;

    constructor(score: number, name: string) {
        super(score, name);
        this.name = name;
        this.score = score;
    }
 
    // si le chevelier est protégé , il ne subit aucun degat sinon il perd 10 points 
    encaisser() {
        if (!this.protection) {
            this.score -= this.demage
        }
    }

}