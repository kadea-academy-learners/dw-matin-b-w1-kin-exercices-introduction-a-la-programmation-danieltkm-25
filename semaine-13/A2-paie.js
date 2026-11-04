// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
A2 — Le moteur de paie v2 (Niveau 3 — Avancé)

Objectif : parcourir un tableau avec .forEach(), accumuler un total et appliquer une règle d'heures supplémentaires.
Contexte : Kadea Tech paie ses techniciens 2 500 FC de l'heure ; au-delà de 40 h par semaine, chaque heure est payée 1,5 fois.

Consignes :
1. Pars de const heuresSemaine = [8, 9, 10, 8, 7, 6]; (du lundi au samedi).
2. Calcule le total des heures avec .forEach() et un accumulateur.
3. Écris calculerSalaire(heures, tauxHoraire = 2500) qui gère les heures supplémentaires.
4. Avec une boucle for, trouve le jour le plus chargé.

Résultat attendu :
Total : 48 h — Salaire : 130000 FC ; jour le plus chargé : mercredi (10 h).

Recherche (à rédiger dans RECHERCHES.md) :
La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)








const heuresSemaine = [8, 9, 10, 8, 7, 6];

const jours = [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi"
];

// 1. Calculer le total des heures avec forEach()
let totalHeures = 0;

heuresSemaine.forEach(function(heures) {
    totalHeures += heures;
});

// 2. Calculer le salaire avec les heures supplémentaires
function calculerSalaire(heures, tauxHoraire = 2500) {
    const heuresNormales = Math.min(heures, 40);
    const heuresSupplementaires = Math.max(heures - 40, 0);

    const salaireNormal = heuresNormales * tauxHoraire;
    const salaireSupplementaire =
        heuresSupplementaires * tauxHoraire * 1.5;

    return salaireNormal + salaireSupplementaire;
}

// 3. Trouver le jour le plus chargé avec une boucle for
let indexMax = 0;

for (let i = 1; i < heuresSemaine.length; i++) {
    if (heuresSemaine[i] > heuresSemaine[indexMax]) {
        indexMax = i;
    }
}

// 4. Afficher les résultats
const salaire = calculerSalaire(totalHeures);

console.log("Total :", totalHeures, "h");
console.log("Salaire :", salaire, "FC");
console.log(
    "Jour le plus chargé :",
    jours[indexMax],
    "(" + heuresSemaine[indexMax] + " h)"
);