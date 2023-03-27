// var + nom de la variable: type de la variable = "contenu de la vaiable"
// any signifie n'importe quel type.
var testVariable: any;

//Exemples:
//Pour une string
var lantern: string ='Green Lantern';
//Ou pour un number:
var healthPoint: number = 100;


class Heros {
    nameLantern: string;
    healthPoint: number;
 
  
    constructor(nameLantern: string, healthPoint: number) {
      this.nameLantern = nameLantern;
      this.healthPoint = healthPoint;
    }
  }
//On peut déclarer nos propre type
var greenLantern: Heros = new Heros (lantern, healthPoint)



