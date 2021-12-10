export default class Champions {
    score: number;
    name: string;
    protection: boolean;
    demage: number;
    dead: boolean;

    constructor(score: number, name: string) {
        this.protection = false;
        this.demage = 10
        this.name = name;
        this.score = score;
        this.dead = false;
    }

    attack(adversaire: this) {
        if (adversaire.dead) {
            console.log(adversaire.name + ' est déjà mort(e) !')
        } else {
            console.log(this.name + ' attack ' + adversaire.name)
            adversaire.encaisser();   
        }
    }

    encaisser() {
        if (this.protection) {
            this.encaisseOuMeurt(this.demage/2)
        } else {
            this.encaisseOuMeurt(this.demage)
        }
    }

    encaisseOuMeurt(demage: number) {
        if (!this.canDead(demage)) {
                this.score -= demage
        } else {
            this.score = 0;
            this.dead = true
            console.log(this.name, 'est mort(e)')
        }
    }

    protected() {
        if (this.dead) {
            console.log(this.name + ' est déjà mort(e) !')
        } else {
            console.log(this.name, 'Se protege!')
            this.protection = true;
        }
    }

    canDead(value: number) {
        if (this.score <= value) {
            console.log(value)
            return true;
        }
        return false;
    }

    // le score des joueurs 

    getScore() {
        console.log('le score de ', this.name, 'est ', this.score)
    }

}