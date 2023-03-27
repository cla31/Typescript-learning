//Pour indiquer à Typescript qu'on a une classe de composant
// et pas une classe lambda
// cf Angular

//Un décorateur avec Typescript
//On peut passer certains paramètres à ce composant
// Pour ajouter des informations sur la classe donnée
//Le décorateur permet d'ajouter des informations à cette classe.
//Et dire à typescript que cette classe est une classe de composant.
//Les décorateurs sont récents dans typescript donc attention
// à la version de typescript qu'on utilise.
// Tous les décorateurs sont préfixés par @
@Component({
    selector:'mon-composant',
    template:'mon-template'
})
class MonComposant{}