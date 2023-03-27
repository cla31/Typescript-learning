// Lorsqu'on créé la fonction, on désigne aussi la valeur de retour de la fonction
// Origin planet est un paramètre facultatif
function createHeros(name, healthPoint, originPlanet) {
    var heros = new Heros();
    heros.pointDeVie = pointDeVie;
    heros.name = name;
    //Si le param est passé à la fonction, alors nous attribuons une planète d'origine 
    // à notre héros, et sinon, nous ne faisons rien.
    if (originPlanet)
        heros.originPlanet = originPlanet;
    return heros;
}
