import Champions from "./champions.class";

export default class Archer extends Champions{

    score: number;
    name: string;

    constructor(score: number, name: string) {
        super(score, name);
        this.name = name;
        this.score = score;
    }

    // l'archer a la possibilité d'attaquer deux fois de suite

    attack(adversaire: Champions, deuxCoup?: boolean) {
        if (adversaire.dead) {
            console.log(adversaire.name + ' est déjà mort(e) !')
        } else {
            if (deuxCoup) {
                console.log(this.name + ' attaque 2 fois ' + adversaire.name)
                adversaire.encaisser();
                adversaire.encaisser();
            } else {
                console.log(this.name + ' attaque une  fois ' + adversaire.name)
                adversaire.encaisser();   
            }
        }
        
    }

}