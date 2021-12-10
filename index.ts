import Archer from "./champions/archer.class";
import Champions from "./champions/champions.class";
import Chevalier from "./champions/chevalier.class";
import Mage from "./champions/mage.class";

let chevalier = new Chevalier(100, 'chevalier');
let mage = new Mage(100, 'mage');
let archer = new Archer(100, 'archer');
let champions = new Champions(100, 'champions');


chevalier.attack(mage);

archer.protected();

archer.attack(chevalier);
archer.attack(mage, true);
mage.soigner();
archer.attack(mage, true);
mage.soigner();
archer.attack(mage, true);
mage.soigner();
archer.attack(mage, true);
mage.soigner();
archer.attack(mage, true);

mage.soigner();
mage.protected();


chevalier.getScore()
mage.getScore()
archer.getScore()
champions.getScore()