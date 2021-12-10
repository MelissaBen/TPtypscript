import Archer from "./champions/archer.class";
import Champions from "./champions/champions.class";
import Chevalier from "./champions/chevalier.class";
import Mage from "./champions/mage.class";

let chevalier = new Chevalier(100, 'chevalier');
let mage = new Mage(100, 'mage');
let archer = new Archer(100, 'archer');
let champions = new Champions(100, 'champions');


console.log("le score des joueurs au début : ")

console.log("le jeu commence")


chevalier.getScore()
mage.getScore()
archer.getScore()
champions.getScore()


chevalier.attack(mage)
archer.attack(chevalier, true)
archer.attack(mage, true)
archer.attack(champions, true)
mage.soigner();
mage.soigner();
champions.attack(chevalier)
archer.attack(mage, true)
archer.attack(mage, true)
mage.soigner();
archer.attack(mage, true)
archer.attack(mage, true)
archer.attack(mage, true)
archer.attack(chevalier, true)
archer.attack(chevalier, true)
archer.attack(chevalier, true)
chevalier.protected()


console.log("FIN")

console.log("le score des joueurs à la fin  : ")

chevalier.protected()
chevalier.getScore()
mage.getScore()
archer.getScore()
champions.getScore()