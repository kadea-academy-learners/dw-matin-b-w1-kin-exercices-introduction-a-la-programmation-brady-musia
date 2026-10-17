// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M1 — FizzBuzz kinois (Niveau 2 — Moyen)

Objectif : combiner boucle for, modulo et ordre des conditions.
Contexte : un jeu de rapidité pour réveiller la promo le lundi matin.

Consignes :
1. Parcours les nombres de 1 à 30.
2. Multiple de 3 : affiche Malewa. Multiple de 5 : Wewa. Multiple de 3 et de 5 : MalewaWewa. Sinon, le nombre.
3. Explique en commentaire pourquoi l'ordre de tes conditions est important.

Résultat attendu (15 premiers) :
1, 2, Malewa, 4, Wewa, Malewa, 7, 8, Malewa, Wewa, 11, Malewa, 13, 14, MalewaWewa

Recherche (à rédiger dans RECHERCHES.md) :
Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

// Je teste d'abord "3 et 5" parce que 15 est aussi un multiple de 3.
// Si je teste % 3 en premier, 15 affiche Malewa et MalewaWewa n'apparaît jamais.
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('MalewaWewa');
  } else if (i % 3 === 0) {
    console.log('Malewa');
  } else if (i % 5 === 0) {
    console.log('Wewa');
  } else {
    console.log(i);
  }
}
