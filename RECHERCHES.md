# RECHERCHES — Semaine 13

> Pour chaque exercice : reformule avec tes mots (pas de copier-coller), ajoute un test que tu as exécuté toi-même,
> et cite une source précise (une page, pas juste « Google »). MDN en français est la référence.
> Si tu as utilisé une IA, indique ton prompt et vérifie sa réponse sur MDN.
> Ne modifie pas les titres `## F1 — …` : ils servent à l'évaluation automatique.

## F1 — Ma carte d'apprenant

**Question :** Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
typeof null renvoie "object" à cause d'une particularité historique de javaScript.
...

**Mon test dans la console :**
const ancienneFormation = null;

console.log(typeof ancienneFormation);
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```object

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F2 — Le convertisseur de saisie

**Question :** Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
NaN (Not a Number), c'est une valeur spéciale de type number que javascript utilise lorsqu'un calcul ou une conversion numerique ne produit pas un résultat numérique valide.
...
Pourquoi NaN === NaN renvoie-t-il false ?
selon les règles de javaScript, NaN n'est égal à aucune valeur, y compris lui-même.

Quelle fonction utiliser pour détecter NaN?
utilise Number.isNaN

**Mon test dans la console :**
const montant = Number("abc");
console.log(Number.isNaN(montant));
console.log(number.isNaN(2500));
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F3 — Pair ou impair : le tirage des tickets

**Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
l'opérateur % renvoie le reste de la division. En javascript, ce reste conserve le signe du dividende (ici, -7).
...

**Mon test dans la console :**
console.log(-7 % 2);
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
-1

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F4 — Le contrôleur du bus

**Question :** Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
oui, on peut enchaîner plusieurs opérateurs ternaires en javascript, mais il faut faire attention à la lisibilité du code.
...

**Mon test dans la console :**
const age = 16;

const tarif = age < 5
    ? "Gratuit"
    : age < 18
       ?"500 FC"
       : "1 000 FC";
console.log(tarif);
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
500 FC

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F5 — Ma première fonction fléchée

**Question :** Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
les parenthèses peuvent être enlever uniquement lorsqu'il y a un seul paramètre.
...

**Mon test dans la console :**
const carre = nombre => nombre * nombre;
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F6 — Le compte à rebours

**Question :** À quoi sert le mot-clé continue ? Quelle différence avec break ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
le mot-clé continue saute le reste du tour actuel et passe au tour suivant de la boucle.
...
break arrête complètement la boucle alors que continue saute le reste du tour actuel et passe au tour suivant.
**Mon test dans la console :**
for (let i = 5; i >= 1; i--) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
5
4
2
1
**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M1 — FizzBuzz kinois

**Question :** Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
parce qu'il permet de vérifier si un candidat maîtrise les bases de la programmation, notamment les boucles, les conditions et le modulo(%).
...

**Mon test dans la console :**
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
.toLocaleString() nous permet d'afficher 75000 sous la forme 75 000, avec un séparateur de milliers.
...

**Mon test dans la console :**
const montant = 75000;

console.log(montant.tolocaleString("fr-fr"));
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
75 000
**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :** Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
il existe 8 valeurs falsy principales. ce sont les valeurs qui sont considérées comme fausses lorsqu'elles sont utilisées dans une condition.
...
valeur              signification

false                 Booléen faux
0                     Zéro de type Number
-0                    Zéro neegatif
on                    Zéro de type Bigint
""                    chaîne vide
null                  absence volontaire de valeur
undefined             valeur non définie
NaN                   Résultat numérique invalide

**Mon test dans la console :**
const valeur = "";

if (valeur) {
    console.log("Truthy");
} else {
    console.log("Falsy")
}
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
Falsy
**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
il permet de donner une valeur par défaut uniquement lorsque la valeur de gauche est null ou undefined.
...
la différence essentielle : ?? vérifie l'absence de valeur, tandis que || vérifie si la valeur est falsy.
**Mon test dans la console :**
const scrore = 0;

console.log(score ?? "aucun");
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
0
**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
En javascript moderne, on recommande gènéralement d'utiliser const et let plutôt que var, parce que var possède des règles de portée et de hoisting qui peuvent provoquer des bugs difficiles à comprendre.
...
la portée d'une variable ?
la portée(scope) détermine où une variable peut être utilisée dans le code.

hoisting : est un comportement de javaScript qui fait que certaines déclarations sont préparées avant l'exécution normale du code.
**Mon test dans la console :**
unction tester() {
    if (true){
        var ville = "Kinshasa";
    }
    console.log(ville);
}
tester();
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
Kinshasa
**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M6 — Le détective du return

**Question :** Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
lorsqu'on écris return puis un saut de ligne, javaScript considère que l'instruction return est terminée et renvoie undefined.
...
solution : écrit return et la valeur sur la même ligne : return \Mbote$;
**Mon test dans la console :**
const saluer = (prenom) => {
    return
    'Mbote ${prenom}';
};
console.log(saluer("Ney"));
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
undefined
**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M7 — La tirelire numérique

**Question :** Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
opérateur       signification           exemple  Résult
+=              additionner             x += 5      15
                et affecter     
-=              soustraire              x -= 5      5
                et affecter
*=              Multipilier             x *= 5      50
                et affecter
/=              Diviser                 x /= 5      2
                et affecter
%=              calculer le reste       x %= 3      1
                et affecter
**=             Élever à une puissance  x **= 2     100
                et affecter
...

**Mon test dans la console :**
let solde = 10000;
solde += 2000;
console.log(solde);

solde -= 3000;
console.log(solde);

solde *= 2;
console.log(solde);

solde /= 3;
console.log(solde);

solde %= 4000;
console.log(solde);
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M8 — La batterie qui se décharge

**Question :** Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
while vérifie la condition avant d'exécuter le code tansdisque do...while exécute le code une première fois, puis vérifie la condition.
...

**Mon test dans la console :**
let batterie = 15;
let heures = 0;

do {
    batterie -= 15;
    heures++;
}  while (batterie > 20);

console.log('Batterie : ${batterie} %');
console.log('Nombre de tours : ${heures}');
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
batterie : 0%
Nombre de tours :1
**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A1 — Kadea Express v2 : le calculateur de livraison

**Question :** Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
En javascript, les nombres décimaux sont généralement stockés au format IEEE 754(virgule flottante en double précision).
...

**Mon test dans la console :**
console.log(0.1 + 0.2);
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
0.300000000000000000004
**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A2 — Le moteur de paie v2

**Question :** La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
la méthode .reduce() permet de parcourir un tableau et de réduire ses élément à une seule valeur : une somme, un produit ou un résultat calculé
...

**Mon test dans la console :**
const totalHrures = heuresSemaine.reduce(function(total, heures) {
    return total + heures;
}, 0);

console.log("Total :", totalHeures, "h");
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
Total : 48h
**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Avec console.table(),tu peux sélectionner les colonnes à afficher en passant leurs noms dans.
.find() renvoie undefined,tandis que  .filter() renvoie untableau vide [].
...

**Mon test dans la console :**
console.table(produits, ["nom", "stock"]);
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```(index)	nom	stock
0	        Clé USB 32 Go	    25
1	        Sac à dos Kadea	    0
2	        Souris sans fil 	12
3	        Gourde isotherme	8
4	        Casque audio    	0
5	        Carnet de notes	   40

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Pour classer les élėves de la meilleure à la moins bonne moyenne, utilise .sort() avec une fonction de comparaison.
...
.sort() trie directement le tableau sur lequel elle est apelée. Elle modifie donc l'ordre des élèments du tableau original.

la méthode recommandée pour éviter de modifier le tableau d'origine est slice() : sans argument crée une copie superficielle du tableau.
**Mon test dans la console :**
bulletin.sort(function(a, b) {
return b.moyen - a.moyenne;
});

console.table(bulletin)
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
Nom               Moyenne           Mention
1 bijou           17                Excellent
2 Exaucé          16.7              Excellent
3 Amani           15                Admis
4 Divine          12                Admis
5 Christian        9.3              Rattrapage

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A5 — Le nombre mystère

**Question :** Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
la recherche dichotomique est une méthode qui consiste à chercher une valeur en divisant à chaque étape l'intervalle de recherche en deux.

...
Pourquoi 7 essais: au départ, il existe 100 nombres possibles.
si tu choisis toujours le milieu de l'intervalle restant, le nombre de possibilités est approximativement divisé par deux à chaque essai.

**Mon test dans la console :**
let minimum = 1;
let maximum = 100;

const milieu = Math.floor((minimum + maximum))

console.log("Essaie le nombre :", milieu);
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
dans le navigateur
**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non
