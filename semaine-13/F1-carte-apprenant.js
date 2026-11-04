// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
F1 — Ma carte d'apprenant (Niveau 1 — Facile)

Objectif : choisir le bon mot-clé (const ou let) et reconnaître les 5 types primitifs.
Contexte : Kadea prépare les badges de la promo et a besoin de ta fiche.

Consignes :
1. Déclare prenom, age, commune, estInscrit, surnom (sans valeur) et ancienneFormation (valeur null).
2. Choisis const ou let pour chacune et justifie ton choix en commentaire.
3. Affiche ta fiche avec un seul gabarit littéral (une seule chaîne construite par interpolation).
4. Affiche le typeof de chaque variable.

Résultat attendu :
Je m'appelle Grâce, j'ai 22 ans et j'habite à Lemba.
puis : string, number, string, boolean, undefined, object

Recherche (à rédiger dans RECHERCHES.md) :
Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)



// const : la variable ne sera pas réaffectée.
const prenom = "Grâce"; // const : le prénom reste identique.
const age = 22; // const : l'âge ne sera pas réaffecté.
const commune = "Lemba"; // const : la commune reste identique.
const estInscrit = true; // const : la valeur booléenne reste identique.

// let : la variable est déclarée sans valeur et pourra être réaffectée.
let surnom; // let : sa valeur pourra être définie plus tard.

// const : la variable contient null et ne sera pas réaffectée.
const ancienneFormation = null;

// Afficher la fiche avec un seul gabarit littéral.
console.log(`Je m'appelle ${prenom}, j'ai ${age} ans et j'habite à ${commune}.`);

// Afficher le type de chaque variable.
console.log(typeof prenom);
console.log(typeof age);
console.log(typeof commune);
console.log(typeof estInscrit);
console.log(typeof surnom);
console.log(typeof ancienneFormation);


