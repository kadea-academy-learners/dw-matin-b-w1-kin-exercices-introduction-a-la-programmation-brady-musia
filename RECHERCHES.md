# RECHERCHES — Semaine 13

> Pour chaque exercice : reformule avec tes mots (pas de copier-coller), ajoute un test que tu as exécuté toi-même,
> et cite une source précise (une page, pas juste « Google »). MDN en français est la référence.
> Si tu as utilisé une IA, indique ton prompt et vérifie sa réponse sur MDN.
> Ne modifie pas les titres `## F1 — …` : ils servent à l'évaluation automatique.

## F1 — Ma carte d'apprenant

**Question :** Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

null n'est pas un objet, c'est une valeur qui veut dire « vide exprès ». Si typeof null donne 'object', c'est à cause d'une erreur dans les débuts de JavaScript, qui n'a jamais été corrigée pour que les vieux sites continuent de marcher. Il ne faut pas le confondre avec undefined, qui veut dire « pas encore de valeur ». Pour tester null, on utilise valeur === null.

**Mon test dans la console :**

```js
typeof null          // 'object'
typeof undefined     // 'undefined'
null === null        // true
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/typeof

**IA utilisée ? (prompt + vérification sur MDN) :** oui, pour m'aider à comprendre — prompt : « Explique simplement pourquoi typeof null donne 'object' ». J'ai ensuite lu la partie « typeof null » sur MDN et j'ai tapé les tests moi-même dans la console du navigateur pour vérifier.

## F2 — Le convertisseur de saisie

**Question :** Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

NaN signifie « pas un nombre ». On l'obtient quand JavaScript n'arrive pas à transformer quelque chose en nombre, comme Number('abc'), ou avec un calcul impossible comme 0 / 0. C'est une valeur spéciale qui n'est jamais égale à rien, même à un autre NaN, donc on ne peut pas la tester avec ===. Il faut utiliser Number.isNaN(valeur).

**Mon test dans la console :**

```js
Number('abc')                // NaN
NaN === NaN                  // false
Number.isNaN(Number('abc'))  // true
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN

**IA utilisée ? (prompt + vérification sur MDN) :** oui, pour m'aider à comprendre — prompt : « Explique simplement ce qu'est NaN et comment le détecter ». J'ai ensuite lu la page NaN sur MDN et j'ai tapé les tests moi-même dans la console du navigateur pour vérifier.

## F3 — Pair ou impair : le tirage des tickets

**Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

En JavaScript, -7 % 2 renvoie -1. Le signe du reste suit celui du nombre de départ, donc un impair négatif donne -1 et pas 1. Avec % 2 === 1, -7 serait considéré comme pair, ce qui est faux. En testant % 2 !== 0 (« le reste n'est pas zéro »), on détecte tous les impairs, positifs ou négatifs.

**Mon test dans la console :**

```js
-7 % 2            // -1
-7 % 2 === 1      // false
-7 % 2 !== 0      // true
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Remainder

**IA utilisée ? (prompt + vérification sur MDN) :** non, car c'est une leçon que je connais déjà grâce à mes recherches.

## F4 — Le contrôleur du bus

**Question :** Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Oui, c'est possible : on peut écrire condition1 ? a : condition2 ? b : c. Le problème, c'est que tout est sur une seule ligne et qu'on ne voit plus bien quelle condition donne quel résultat. Pour plus de deux choix, un if / else if / else est beaucoup plus clair et plus facile à corriger.

**Mon test dans la console :**

```js
const age = 70;
age < 5 ? 'gratuit' : age < 18 ? '500 FC' : '1000 FC'   // '1000 FC'
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator

**IA utilisée ? (prompt + vérification sur MDN) :** oui, pour m'aider à comprendre — prompt : « Peut-on enchaîner plusieurs ternaires en JavaScript et pourquoi c'est déconseillé ? ». J'ai ensuite lu la page de l'opérateur conditionnel sur MDN et j'ai testé l'exemple moi-même dans la console.

## F5 — Ma première fonction fléchée

**Question :** Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Les parenthèses peuvent disparaître seulement s'il y a exactement un paramètre : x => x * 2 marche, mais () => ... et (a, b) => ... doivent les garder. Pour les accolades et le return, on peut les enlever si la fonction ne fait qu'une chose : renvoyer un résultat sur une ligne. Dès qu'il y a plusieurs instructions, il faut remettre les accolades et écrire return.

**Mon test dans la console :**

```js
const double = x => x * 2;
double(4)   // 8
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F6 — Le compte à rebours

**Question :** À quoi sert le mot-clé continue ? Quelle différence avec break ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

continue sert à sauter un tour : quand JavaScript le rencontre, il ignore le reste du code de ce tour et passe au suivant. break, lui, sort complètement de la boucle, et plus aucun tour n'est fait. Si j'avais mis break à la place de continue sur le 5, le compte à rebours se serait arrêté à 6, puis Décollage ! se serait affiché directement, sans les nombres de 4 à 1.

**Mon test dans la console :**

```js
for (let i = 1; i <= 5; i++) { if (i === 3) continue; console.log(i); }  // 1 2 4 5
for (let i = 1; i <= 5; i++) { if (i === 3) break; console.log(i); }     // 1 2
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/continue

**IA utilisée ? (prompt + vérification sur MDN) :** non, car c'est une notion que je connais déjà.

## M1 — FizzBuzz kinois

**Question :** Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :** Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M6 — Le détective du return

**Question :** Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M7 — La tirelire numérique

**Question :** Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M8 — La batterie qui se décharge

**Question :** Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A1 — Kadea Express v2 : le calculateur de livraison

**Question :** Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A2 — Le moteur de paie v2

**Question :** La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A5 — Le nombre mystère

**Question :** Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non
