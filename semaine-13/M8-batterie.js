// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M8 — La batterie qui se décharge (Niveau 2 — Moyen)

Objectif : écrire une boucle while avec une condition d'arrêt sûre et un compteur.
Contexte : pendant un délestage, ton téléphone perd 15 % de batterie par heure.

Consignes :
1. Pars de batterie = 100 et d'un compteur heures = 0.
2. Tant que la batterie est au-dessus de 20 %, retire 15 % et ajoute une heure.
3. Affiche le résultat final.
4. Teste en partant de 15 % : combien de tours fait la boucle ?

Résultat attendu :
Après 6 h, batterie à 10 % : branche ton téléphone !

Recherche (à rédiger dans RECHERCHES.md) :
Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

let batterie = 100;
let heures = 0;

while (batterie > 20) {
  batterie -= 15;
  heures++;
}

console.log(`Après ${heures} h, batterie à ${batterie} % : branche ton téléphone !`);

// étape 4 : en partant de 15 %, la boucle ne fait aucun tour (15 n'est pas > 20)
let batterie2 = 15;
let heures2 = 0;

while (batterie2 > 20) {
  batterie2 -= 15;
  heures2++;
}

console.log(`Après ${heures2} h, batterie à ${batterie2} % : branche ton téléphone !`);
