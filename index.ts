import Archer from "./champions/archer.class";
import Champions from "./champions/champions.class";
import Chevalier from "./champions/chevalier.class";
import Mage from "./champions/mage.class";

let Abdoul = new Chevalier(100, 'Abdoul');
let Melissa = new Mage(100, 'Melissa');
let Takwa = new Archer(100, 'Takwa');
let Pierre = new Mage(100, 'Pierre');




// Abdoul.protege();

Takwa.attaque(Abdoul);

Pierre.protege();

Takwa.attaque(Pierre);
Takwa.attaque(Melissa, true);
Melissa.soigner();
Takwa.attaque(Melissa, true);
Melissa.soigner();
Takwa.attaque(Melissa, true);
Melissa.soigner();
Takwa.attaque(Melissa, true);
Melissa.soigner();
Takwa.attaque(Melissa, true);
Takwa.attaque(Melissa, true);
Takwa.attaque(Melissa, true);
Takwa.attaque(Melissa, true);
Takwa.attaque(Melissa, true);
Melissa.soigner();
Melissa.protege();


Takwa.toString()
Abdoul.toString()
Pierre.toString()
Melissa.toString()