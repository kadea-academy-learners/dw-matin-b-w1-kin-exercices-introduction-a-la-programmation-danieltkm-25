// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M6 — Le détective du return (Niveau 2 — Moyen)

Objectif : distinguer return et console.log() et traquer les undefined.

Consignes : chacune des trois fonctions de la zone de travail a un bug.
Trouve-le, explique-le en commentaire, corrige-le.

Code fourni :
const doubler = (n) => { n * 2; };
console.log(doubler(4));           // undefined ?!

const calculerTva = (prix) => { console.log(prix * 0.16); };
const total = calculerTva(1000) + 500;
console.log(total);                // NaN ?!

const saluer = (prenom) => {
  return
    \`Mbote \${prenom}\`;
};
console.log(saluer('Ney'));        // undefined ?!

Résultat attendu après correction :
8, 660, Mbote Ney

Recherche (à rédiger dans RECHERCHES.md) :
Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

//const doubler = (n) => { n * 2; };
//console.log(doubler(4));           // undefined ?!

//const calculerTva = (prix) => { console.log(prix * 0.16); };
//const total = calculerTva(1000) + 500;
//console.log(total);                // NaN ?!

//const saluer = (prenom) => {
  //return
  //  `Mbote ${prenom}`;
//};
//console.log(saluer('Ney'));        // undefined ?!


const doubler = (n) => {
    // Bug corrigé : return renvoie le résultat du calcul.
    return n * 2;
};
console.log(doubler(4)); // 8

const calculerTva = (prix) => {
    // Bug corrigé : on renvoie le montant au lieu de seulement l'afficher.
    return prix * 0.16;
};
const total = calculerTva(1000) + 500;
console.log(total); // 660

const saluer = (prenom) => {
    // Bug corrigé : le texte est sur la même ligne que return.
    return `Mbote ${prenom}`;
};
console.log(saluer('Ney')); // Mbote Ney