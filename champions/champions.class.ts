export default class Champions {

    pointDeVie: number;
    name: string;
    protection: boolean;
    degat: number;
    dead: boolean;

    constructor(pointDeVie: number, name: string) {
        this.protection = false;
        this.degat = 10
        this.name = name;
        this.pointDeVie = pointDeVie;
        this.dead = false;
    }

    attaque(victime: this) {
        if (victime.dead) {
            console.log(victime.name + ' est déjà mort(e) !')
        } else {
            console.log(this.name + ' attck ' + victime.name)
            victime.encaisser();   
        }
    }

    encaisser() {
        if (this.protection) {
            this.encaisseOuMeurt(this.degat/2)
        } else {
            this.encaisseOuMeurt(this.degat)
        }
    }

    encaisseOuMeurt(degat: number) {
        if (!this.canDead(degat)) {
                this.pointDeVie -= degat
        } else {
            this.pointDeVie = 0;
            this.dead = true
            console.log(this.name, 'est mort(e)')
        }
    }

    toString() {
        console.log('Point de vie de ', this.name, 'est ', this.pointDeVie)
    }

    protege() {
        if (this.dead) {
            console.log(this.name + ' est déjà mort(e) !')
        } else {
            console.log(this.name, 'Se protege !')
            this.protection = true;
        }
    }

    canDead(value: number) {
        if (this.pointDeVie <= value ) {
            return true;
        }
        return false;
    }

}