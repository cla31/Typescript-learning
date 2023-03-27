// var + nom de la variable: type de la variable = "contenu de la vaiable"
// any signifie n'importe quel type.
var testVariable;
//Exemples:
//Pour une string
var lantern = 'Green Lantern';
//Ou pour un number:
var healthPoint = 100;
var Heros = /** @class */ (function () {
    function Heros(nameLantern, healthPoint) {
        this.nameLantern = nameLantern;
        this.healthPoint = healthPoint;
    }
    return Heros;
}());
//On peut déclarer nos propre type
var greenLantern = new Heros(lantern, healthPoint);
