# 📊 Évaluation automatique — Semaine 13 (JavaScript)

> Générée le 2026-11-04 02:14 UTC · commit `a2ac0e1` · évaluation déterministe basée uniquement sur le cahier d'exercices et le barème.

## Note finale : **12 / 15**

Exercices : **85 / 95** · Parfaits : 12 / 19 · Non rendus : 0

## 1. Résultat par exercice

| Exercice | Note /5 | Statut | Tests | Recherche /3 | Commit | Feedback |
|---|:-:|---|:-:|:-:|:-:|---|
| **F1** — Ma carte d'apprenant | **5** | ✅ Parfait | 5/5 | 1 | ✅ | Parfait ! Choix const/let justifiés, 5 types primitifs reconnus et fiche construite avec un seul gabarit littéral.<br>📚 Recherche incomplète : réponse reformulée trop courte ou vide (min. 120 caractères) ; pas de lien précis vers une page source (MDN de préférence). |
| **F2** — Le convertisseur de saisie | **5** | ✅ Parfait | 3/3 | 2 | ✅ | Parfait ! Le piège de la concaténation est identifié, corrigé avec Number() et tes prédictions sont vérifiées.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **F3** — Pair ou impair : le tirage des tickets | **5** | ✅ Parfait | 3/3 | 1 | ✅ | Parfait ! Modulo et égalité stricte maîtrisés, les cas 17, 24 et 0 sont corrects.<br>📚 Recherche incomplète : réponse reformulée trop courte ou vide (min. 120 caractères) ; pas de lien précis vers une page source (MDN de préférence). |
| **F4** — Le contrôleur du bus | **5** | ✅ Parfait | 5/5 | 2 | ✅ | Parfait ! Ternaire simple et conditions à trois branches corrects, bornes respectées.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **F5** — Ma première fonction fléchée | **5** | ✅ Parfait | 4/4 | 1 | ✅ | Parfait ! Fonctions fléchées concises avec retour implicite et gabarit littéral.<br>📚 Recherche incomplète : réponse reformulée trop courte ou vide (min. 120 caractères) ; pas de lien précis vers une page source (MDN de préférence). |
| **F6** — Le compte à rebours | **2** | 🟠 Résultat incorrect | 0/2 | 2 | ✅ | La séquence affichée est fausse : vérifie le départ (10), la condition (>= 1), le pas et le saut du 5.<br>• On attend 10, 9, 8, 7, 6, 4, 3, 2, 1, Décollage ! (le 5 est sauté).<br>• La version qui affiche seulement les pairs (10, 8, 6, 4, 2) est absente.<br>• Saute le 5 avec `continue`, sans changer la condition de la boucle.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **M1** — FizzBuzz kinois | **5** | ✅ Parfait | 3/3 | 2 | ✅ | Parfait ! Conditions ordonnées du cas le plus restrictif au plus général, résultat exact de 1 à 30.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **M2** — Le distributeur automatique (DAB) | **5** | ✅ Parfait | 9/9 | 1 | ✅ | Parfait ! Règles vérifiées dans le bon ordre, cas limites gérés, la fonction renvoie son message.<br>📚 Recherche incomplète : réponse reformulée trop courte ou vide (min. 120 caractères) ; pas de lien précis vers une page source (MDN de préférence). |
| **M3** — Le détecteur de champs vides (Truthy / Falsy) | **5** | ✅ Parfait | 11/11 | 2 | ✅ | Parfait ! Les valeurs truthy / falsy sont maîtrisées, ternaire sans comparaison.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **M4** — Le score par défaut : \|\| contre ?? | **4** | 🟡 Règles non respectées | 5/5 | 2 | ✅ | Les résultats sont justes, mais montre la version `\|\|`, corrige avec `??` et explique le bug en commentaire.<br>• Écris d'abord la version avec `\|\|` pour montrer le bug.<br>• Explique en commentaire pourquoi 0 donne « aucun » avec `\|\|`.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **M5** — La vitre teintée (portée de bloc) | **5** | ✅ Parfait | 3/3 | 2 | ✅ | Parfait ! Portée de bloc respectée, plus aucune ReferenceError et l'arrêt du programme est expliqué.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **M6** — Le détective du return | **5** | ✅ Parfait | 5/5 | 2 | ✅ | Parfait ! return et console.log sont bien distingués, le piège de l'ASI est corrigé et expliqué.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **M7** — La tirelire numérique | **5** | ✅ Parfait | 3/3 | 2 | ✅ | Parfait ! Accumulateur bien initialisé, 12 tours exacts et bonus toutes les 4 semaines : 27000 FC.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **M8** — La batterie qui se décharge | **5** | ✅ Parfait | 3/3 | 2 | ✅ | Parfait ! Boucle while avec condition d'arrêt sûre et compteur : 6 h, 10 %.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **A1** — Kadea Express v2 : le calculateur de livraison | **4** | 🟡 Règles non respectées | 9/9 | 2 | ✅ | Les tarifs sont justes, mais respecte les consignes : fonction fléchée, `estUrgent = false` par défaut, Math.round() et if / else if / else.<br>• `let` jamais réassigné : `total` → utilise `const`.<br>• Mot-clé `function` utilisé (`calculerLivraison` l.30) : écris une fonction fléchée.<br>• `calculerLivraison` doit être une fonction fléchée.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **A2** — Le moteur de paie v2 | **4** | 🟡 Règles non respectées | 7/7 | 2 | ✅ | Les résultats sont justes, mais utilise .forEach(), une boucle for, une fonction fléchée avec `tauxHoraire = 2500` et des gabarits littéraux.<br>• Message construit avec `+` (ligne 78, 78) : utilise un gabarit littéral `...${x}...`.<br>• Mot-clé `function` utilisé (`(anonyme)` l.45, `calculerSalaire` l.50) : écris une fonction fléchée.<br>• Aucun gabarit littéral avec `${...}` : construis tes messages avec des backticks.<br>• `calculerSalaire` doit être une fonction fléchée.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **A3** — L'inventaire en console | **4** | 🟡 Règles non respectées | 7/7 | 2 | ✅ | Les résultats sont justes, mais utilise .filter(), .map(), .find() avec un return dans chaque callback, `const TAUX` et des fonctions fléchées.<br>• Mot-clé `function` utilisé (`(anonyme)` l.54, `(anonyme)` l.62, `(anonyme)` l.73, `chercherProduit` l.72, `(anonyme)` l.88) : écris une fonction fléchée.<br>• `chercherProduit` doit être une fonction fléchée.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **A4** — Le classement de la promo | **3** | 🟠 Résultat incorrect | 6/9 | 2 | ✅ | Un résultat est faux : arrondis la moyenne à une décimale en gardant un nombre (Math.round(x * 10) / 10), et vérifie les seuils 16 et 10 (>=).<br>• Affiche le nombre d'admis (4).<br>• Affiche le premier « Excellent » trouvé avec .find() (Bijou).<br>• Affiche le bulletin avec `console.table()`.<br>• Mot-clé `function` utilisé (`calculerMoyenne` l.36, `(anonyme)` l.49) : écris une fonction fléchée.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **A5** — Le nombre mystère | **4** | 🟡 Règles non respectées | 4/4 | 2 | ✅ | Le jeu fonctionne, mais respecte les consignes : while, Math.random() + Math.floor(), prompt() + Number(), détection de NaN, gabarits littéraux.<br>• Détecte une saisie invalide avec `Number.isNaN()` (ou `isNaN()`).<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |

## 2. Barème officiel (/15)

| Critère | Niveau | Points /3 | Feedback |
|---|---|:-:|---|
| Fondations : variables, types primitifs et conversions | Avancé (91 %) | **3** | const par défaut et let uniquement pour les valeurs réassignées, choix justifiés. typeof (y compris null) et conversions Number(''), Number('abc') maîtrisés. Truthy / falsy expliqués.<br>_Preuves : F1, F2, M3_ |
| Logique conditionnelle et opérateurs | Compétent : Satisfaisant (87 %) | **2** | if / else if / else corrects, égalité stricte === systématique, modulo maîtrisé (pair / impair, multiples). Ternaire simple fonctionnel.<br>_Preuves : F3, F4, M1, M2, M4_ |
| Fonctions, return et portée | Avancé (90 %) | **3** | Fonctions fléchées concises (retour implicite quand c'est pertinent), paramètres par défaut, une fonction pour une responsabilité. Bug de l'ASI et bannissement de var expliqués.<br>_Preuves : F5, M2, M5, M6_ |
| Boucles, accumulateurs et méthodes de tableau | Compétent : Satisfaisant (85 %) | **2** | Boucle for correcte (départ, condition, pas), accumulateur initialisé avant la boucle, while avec une condition d'arrêt sûre. Résultats attendus exacts (27000 FC pour M7, 6 h pour M8).<br>_Preuves : F6, M1, M7, M8 ; niveau Avancé : A2, A3, A4, A5_ |
| Recherche, qualité du code et restitution | Compétent : Satisfaisant (75 %) | **2** | Recherches reformulées et sourcées pour la majorité des exercices. Règles de code respectées (const, ===, fléchées, backticks).<br>_Recherches 60 % · commits par exercice 100 % · règles de code 79 %_ |
| **Total** | | **12 / 15** | |

## Comment lire cette évaluation

| Statut | Signification | Note /5 |
|---|---|:-:|
| ⬜ Non rendu | Fichier absent ou zone de travail vide / non modifiée | 0 |
| ❌ Erreur d'exécution | SyntaxError, ReferenceError, exception ou boucle infinie (> 2 s) | 1 |
| 🟠 Résultat incorrect | Au moins un résultat attendu du cahier n'est pas obtenu | 2 (3 si au moins la moitié des tests passe) |
| 🟡 Règles non respectées | Résultats justes, mais var, ==, concaténation, `function`, `let` inutile ou notion imposée absente | 4 |
| ✅ Parfait | Résultats justes et toutes les règles respectées | 5 |

Recherche /3 : 1 point pour une réponse rédigée (≥ 120 caractères), 1 point pour un test exécuté, 1 point pour un lien source précis. Commit : un commit dont le message cite l'exercice (ex. `feat: M2 dab`).

> ℹ️ L'explication orale de ton code reste évaluée par ton coach. Corrige, commit, merge sur `develop` et push : l'évaluation est relancée automatiquement.
