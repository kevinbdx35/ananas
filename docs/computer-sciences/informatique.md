---
sidebar_position: 1
---

# Qu'est-ce que l'informatique?

L'informatique résout fondamentalement des problèmes.

Nous pouvons considérer la résolution de problèmes comme le processus consistant à prendre des informations (détails sur notre problème) et à générer des informations (la solution à notre problème). La **boîte noire** au milieu est l'informatique.

![Informatique Boite Noire](/img/tutorial/informatique-boite-noire.jpg)

Nous avons besoin d'un moyen de représenter les entrées, de telle sorte que nous puissions stocker et travailler avec des informations de manière standard.

## Binaire -  Base 2

Un ordinateur, au niveau le plus bas, stocke les données en **binaire**, un système numérique dans lequel il n'y a que deux chiffres, `0` et `1`.

Lorsque nous avons appris à compter pour la première fois, nous aurions pu utiliser un doigt pour représenter une chose. Ce système est appelé unaire.

Lorsque nous avons appris à écrire des nombres avec les chiffres de 0 à 9, nous avons appris à utiliser la décimale.

Par exemple, nous savons que ce qui suit représente cent vingt-trois.

Le `3`est dans la colonne des unités, le `2` est dans la colonne des dizaines et le `1` est dans la colonne des centaines.

Donc, `123` c'est 100 × 1 + 10 × 2 + 1 × 3 = 100 + 20 + 3 = 123.

Chaque place pour un chiffre représente une puissance de dix, car il y a dix chiffres possibles pour chaque place.

En binaire, avec seulement deux chiffres, nous avons des puissances de deux pour chaque valeur de position :

Si nous voulions représenter 8, nous aurions besoin d'un autre chiffre :

```
8421
1000
```
Et le binaire a du sens pour les ordinateurs car nous les alimentons en électricité, qui peut-être comme interrupteur d'une lampe 💡, allumée ou éteinte. Dans un ordinateur, il existe des millions ou des milliards d'interrupteurs appelés transistors qui peuvent stocker de l'électricité et en représenter un peu en étant «allumés» ou «éteints».

Avec suffisamment de bits ou de chiffres binaires, les ordinateurs peuvent compter jusqu'à n'importe quel nombre.

8 bits constituent un **Octet / Byte**.

## Représenter des données

Pour représenter des lettres, tout ce que nous devons faire est de décider comment les nombres correspondent aux lettres. Il y a de nombreuses années, a été décidé collectivement d'une cartographie standard appelée [**ASCII**](https://en.wikipedia.org/wiki/ASCII). 

La lettre «A», par exemple, est le nombre 65, et «B» est 66, et ainsi de suite.

**[ASCII TABLE](https://www.asciichart.com)**
![ASCII TABLE](/img/tutorial/ascii-table.png)

Le mappage comprend également la ponctuation et d'autres symboles. D'autres caractères, comme les lettres accentuées et les emoji, font partie d'une norme appelée **[Unicode](https://en.wikipedia.org/wiki/Unicode)** qui utilise plus de bits que l'ASCII pour accueillir tous ces caractères.

* **[Unicode site officiel populaire](https://home.unicode.org)**

* **[Unicode site officiel technique](https://www.unicode.org/main.html)**

Lorsque nous recevons un emoji, notre ordinateur ne reçoit en fait qu'un nombre décimal comme `128514`( `11111011000000010` en binaire, si vous pouvez le lire plus facilement) qu'il mappe ensuite sur l'image de l'emoji.

Une image est également composée de nombreux petits carrés, ou pixels, dont chacun peut être représenté en binaire avec un système appelé RGB, avec des valeurs pour la lumière rouge, verte et bleue dans chaque pixel. En mélangeant différentes quantités de chaque couleur, nous pouvons représenter des millions de couleurs :

Les programmes informatiques savent, en fonction du contexte de son code, si les nombres binaires doivent être interprétés comme des nombres, des lettres ou des pixels.
Les vidéos ne sont que de nombreuses images affichées les unes après les autres, à un certain nombre d'images par seconde. La musique peut également être représentée par les notes jouées, leur durée et leur volume.

## Algorithmes

La boîte noire précédente contiendra des algorithmes, des instructions étape par étape pour résoudre un problème :

![Informatique Boite Noire](/img/tutorial/informatique-boite-noire.jpg)

Disons que nous voulions trouver un ami, Mike Smith, dans un annuaire téléphonique.
Nous pourrions commencer par le feuilleter, une page à la fois, jusqu'à ce que nous trouvions Mike Smith ou atteignions la fin du livre.
Nous pourrions également le feuilleter deux pages à la fois, mais si nous allons trop loin, nous devons pouvoir revenir en arrière.
Mais un moyen encore plus efficace serait d'ouvrir l'annuaire téléphonique au milieu, de décider si Mike Smith sera dans la moitié gauche ou droite du livre (parce que le livre est alphabétisé) et de jeter immédiatement la moitié du problème. Nous pouvons le répéter en divisant le problème en deux à chaque fois. Avec 1024 pages pour commencer, nous n'aurions besoin que de 10 étapes de division en deux avant de ne plus avoir qu'une page à vérifier.
En fait, nous pouvons représenter l'efficacité de chacun de ces algorithmes avec un graphique :

Notre première solution, une page à la fois, est comme la ligne rouge : notre temps de résolution augmente linéairement à mesure que la taille du problème augmente.
La deuxième solution, deux pages à la fois, est comme la ligne jaune : notre pente est moins raide, mais toujours linéaire.
Notre solution finale, est comme la ligne verte : logarithmique, puisque notre temps de résolution augmente de plus en plus lentement à mesure que la taille du problème augmente. En d'autres termes, si l'annuaire téléphonique passait de 1000 à 2000 pages, nous aurions besoin que d'une étape de plus pour trouver Mike. Si la taille doublait à nouveau de 2000 à 4000 pages, nous n'aurions encore besoin que d'une étape de plus.