// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
A5 — Le nombre mystère (Niveau 3 — Avancé)

Objectif : construire un jeu complet avec while, prompt(), Number(), conditions et compteur.
Contexte : le jeu de la pause déjeuner : deviner un nombre entre 1 et 100 en 7 essais maximum.

Consignes :
1. Tire un nombre entier aléatoire entre 1 et 100 avec Math.random() et Math.floor().
2. Tant que le joueur n'a pas trouvé et qu'il lui reste des essais, demande un nombre avec prompt().
3. Refuse une saisie qui n'est pas un nombre (sans compter l'essai).
4. Réponds « plus grand », « plus petit » ou « trouvé en X essais ! ».
5. Si les 7 essais sont épuisés, révèle le nombre.

Résultat attendu :
un jeu jouable dans la console du navigateur, qui ne plante jamais, même si on tape « abc ».

Recherche (à rédiger dans RECHERCHES.md) :
Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)



const nombreSecret = Math.floor(Math.random() * 100) + 1;

let essais = 0;
const maximumEssais = 7;
let trouve = false;

while (essais < maximumEssais && !trouve) {
    const saisie = prompt(
        `Devine un nombre entre 1 et 100.\n` +
        `Essai ${essais + 1} sur ${maximumEssais}`
    );

    // Le joueur clique sur Annuler
    if (saisie === null) {
        console.log("Partie annulée.");
        break;
    }

    // Vérifier que la saisie n'est pas vide
    if (saisie.trim() === "") {
        alert("Saisie vide ! Entre un nombre.");
        continue;
    }

    const nombre = Number(saisie);

    // Refuser les saisies non numériques
    if (!Number.isFinite(nombre)) {
        alert("Saisie invalide ! Entre un nombre.");
        continue;
    }

    // Refuser les nombres hors de l'intervalle
    if (!Number.isInteger(nombre) || nombre < 1 || nombre > 100) {
        alert("Entre un nombre entier entre 1 et 100.");
        continue;
    }

    // Un essai est compté uniquement si la saisie est valide
    essais++;

    if (nombre === nombreSecret) {
        trouve = true;
        alert(`Bravo ! Trouvé en ${essais} essai(s) !`);
    } else if (nombre < nombreSecret) {
        alert("Plus grand !");
    } else {
        alert("Plus petit !");
    }
}

// Révéler le nombre si les 7 essais sont épuisés
if (!trouve && essais === maximumEssais) {
    alert(`Perdu ! Le nombre secret était ${nombreSecret}.`);
}

console.log("Nombre secret :", nombreSecret);
console.log("Essais utilisés :", essais);


