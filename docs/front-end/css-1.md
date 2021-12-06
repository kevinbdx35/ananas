---
sidebar_position: 2
---

# CSS 3 - partie 1

En utilisant `HTML`, tu as maintenant la possibilité  de créer des pages Web avec un certain nombre de composants différents et des balises imbriquées les unes dans les autres pour décrire la structure de toute page Web que tu souhaites créer. Tu vas bien entendu continuer à faire du HTML et progresser dans ce langage.

Tes pages Web sont encore assez simples. 

Elles sont blanches, avec toutes les balises dans le même type de police, tout est aligné sur le côté gauche de l'écran... Et ce que tu aimerais faire maintenant, c'est ajouter du style à ta page Web, la rendre plus esthétique, donner à tes pages Web un aspect plus personnelle dans le design ou plus professionnelle selon le besoin.

CSS va te permettre de faire tout ça et bien plus  encore.

**CSS (Cascading Style Sheets)** signifie feuilles de style en cascade, c'est du code utilisé pour mettre en forme une page Web, en ajoutant des attributs supplémentaires à tes éléments HTML. 

Le HTML est le contenu du site Web et le CSS est le sytle du site Web.

## Généralités

### Style en ligne et interne

Il est possible d'écrire du CSS directement dans la page HTML.

Dans ces deux cas, tu devras écrire le style sur chaque page HTML du site si tu en as plusieurs.

* **Le style en ligne** - Dans la balise même, mais c'est à éviter. Le style en ligne c'est littéralement ajouté à un élément HTML auquel tu souhaites ajouter du style, un attribut de style à l'intérieur duquel se trouvent les propriétés CSS que tu souhaites implémenter.
Supprimer le style en ligne permet aussi de nettoyer un peu ton code HTML. tu peux ainsi vraiment te concentrer sur la structure HTML de ta page Web.

* **Le style interne** - Dans le head (uniquement si tu n'as qu'une page HTML). Tu peux aussi inclure des éléments de style dans la section head de la page Web en ajoutant une balise de style, à l'intérieur de laquelle seront toutes les informations de style pour ce site Web en particulier. Tu pourrais considérer cela comme une prise en compte des informations de style à partir du corps réel de la page où tu as eu ce style en ligne pour mettre à la place les informations de style en haut de la page où les mêmes informations de style peuvent être partagées par plusieurs éléments HTML.
Mettre le style dans la balise head prend de la place et tu pourrais donc essayer de répartir les choses dans un fichier séparé, c'est donc encore une autre façon d'inclure du CSS dans une page HTML.

### Le style externe

Il est donc recommander de créer **une feuille de style**. Il n'y a pas de règle pour nommer la feuille de style mais par convention on l'appelle souvent **style.css**.

```html
<link rel="stylesheet" type="text/css" href="style.css">
```

L'élément `link` permet de lier le fichier HTML vers un autre fichier, par exemple, ta feuille de style, ici dans l'exmple ci-dessus.

Ça évite d'avoir plein de code en entête surtout si tu as plusieurs pages avec le même style.

Il n'y a plus de code réel CSS dans ton HTML, cela permet  donc de mettre toutes les infos CSS dans une feuille de style. C'est beaucoup plus propre et tout le monde fait comme ça maintenant.

**Pourquoi est-ce avantageux?**

Eh bien, d'une part, tu pourrais imaginer  que souvent si tu exécutes un site Web, tu peux avoir plusieurs pages différentes sur ce site Web qui doivent toutes êtres stylés de manière similaire.

Peut-être que la bannière en haut sera de la même couleur, utiliser des polices cohérentes dans toutes les pages Web...

Il serait assez fastidieux et répétitif d'avoir à tout répéter le même code CSS sur toutes tes différentes pages HTML.

Tu peux donc écrire une fois le code CSS et l'utiliser dans tout un tas d'autres pages HTML.

Il est possible de lier aussi plusieurs page CSS différentes si tu as un très gros site.

## Art

Le CSS ne sert pas qu'à faire de jolies boutons pour ton site, mais aussi pour créer de l'art.

![Francine CSS](https://raw.githubusercontent.com/cyanharlow/purecss-francine/master/preview.jpg)

*Francine CSS*

[Art Css](https://css-art.com)

## Anatomie d'une règle CSS

```css
selecteur {propriete : valeur;}
```

```css
header{
	 color: red;
	 propriete: valeur;
}
```

Cette structure s'appelle un ensemble de règles (ou seulement « une règle »). 

Les différentes parties se nomment :

**Sélecteur (qui?)**

C'est le nom de l'élément HTML situé au début de l'ensemble des règles. Il permet de sélectionner les éléments sur lesquels appliquer le style souhaité (en l'occurence, les éléments `p`). Pour mettre en forme un élément différent, il suffit de changer le sélecteur.

**Déclaration**

C'est une règle simple comme `color: red;` qui détermine les propriétés de l'élément que l'on veut mettre en forme.

**Propriétés (quoi?)**

Les différentes façons dont on peut mettre en forme un élément HTML (dans ce cas, `color` est une propriété des éléments `p`). En CSS, tu choisisses les différentes propriétés que tu veux utiliser dans une règle CSS.

**Valeur de la propriété (comment?)**

À droite de la propriété, après les deux points, tu as la valeur de la propriété. Celle-ci permet de choisir une mise en forme parmi d'autres pour une propriété donnée (par exemple, il y a d'autres couleurs que `red` pour la propriété `color`).

Ainsi, si tu veux modifier plusieurs propriétés d'un coup, tu peux utiliser plusieurs déclarations dans une seule règle en les séparant par des points-virgules.

:::info
 Les robots des moteurs de recherche ne scannent que le HTML d'un site et pas le CSS. Il faut donc faire attention aux balises que vous utilisez.
:::

## Commentaires en CSS

Comme dans tout commentaire, il ne faut pas mettre d'information confidentielle dans tes commentaires.
Un commentaire commence toujours par `/*` et fini par `*/`

```css
/* Ceci est un commentaire */
```

![CSS Gif](https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif)

## Class et Id

**Class**

En HTML ⇒ `class ="Nom de la class"`

En CSS ⇒ `.nom de la class`

**Id**

En HTML ⇒ `id="Nom de l'ID"`

En CSS ⇒ `#nom de l'ID`

Par convention on utilise un `id` toujours de manière unique. L'`id` est moins utilisé que les `class`, voir rarement. Les `class` peuvent-être utilisées plusieurs fois et il faut les prévilégiers.

## Changer les tailles du texte

:::caution
C'est une notion qui peut-être complexe à comprendre, il y aura donc un chapitre spécifique aux unités CSS.
:::

Il y a plusieure manière de définir la taille d'un texte :

* La taille absolue
* La taille relative

**En pixels**

L'utilisation des pixels `px` permet d'obtenir un résultat statique, absolu et indépendant du système
d'exploitation et du navigateur. Cependant, cette méthode est déconseillée car elle n'est pas accessible. Ainsi, les utilisateurs ne peuvent pas adapter la taille du texte avec leurs réglages si besoin.

**Words**

Les mots-clés sont une méthode simple et efficace pour déterminer la taille de fonte à utiliser. En utilisant un mot-clé sur l'élément, on peut définir des tailles relatives sur toute la page et réduire ou augmenter la taille de la fonte en conséquence.

**EM**

On peut également définir la taille de la fonte en `em`. La taille d'une valeur exprimée en em est dynamique. Lorsqu'on définit la propriété font-size, un em est équivalent à la taille de fonte appliquée à l'élément parent de l'élément courant. Si cette taille n'a pas été définie pour l'élément parent, elle correspondra à la taille par défaut du navigateur (généralement 16px). Ainsi, si on définit font-size avec une valeur de 20px sur l'élément body, 1em correspondra à 20px et 2em à 40px. Ici, la valeur 2 est un facteur multiplicateur de la taille.

```css title="Exemple de taille en word"
p{
 font-size: small;
}
```

```css title="Exemple de taille en ex"
p{
 font-size: 1em;
}
```

```css title="Exemple de taille en ex"
p{
 font-size: 1ex;
}
```

Il existe beaucoup d'unités en css, le mieux est que tu te réfaires au chapitre dédié sur ce sujet.

[Font-Size](https://developer.mozilla.org/fr/docs/Web/CSS/font-size)

## Changer les polices

```css title="Prototype de construction"
font-family: 'Choix 1', 'choix2', 'Choix 3', generique;
```

Polices génériques : sans-serif, serif, monospace.

Tu ne peux pas mettre une police que le navigateur ne connait pas.
Utilises une police personnalisée ⇒ Télécharges la police

```css title="Téléchargement d'une police"
@font-face{
	 font-family: 'nom';
	 src: url('../..') format('truetype');
}
```

On peut aussi passer par **un service propre** à la fonction polices.

Exemple : google fonts, intégration html + intégration css,  [Google Fonts](https://fonts.google.com) est un service d’hébergement gratuit de polices d’écritures pour le Web, démarré en 2010.
[Design et Typography](https://design.google/library/google-fonts/?utm_source=Google&utm_medium=Fonts&utm_campaign=Article%20Tab)

## Les couleurs

En CSS, les couleurs sont affichées en combinant la lumière rouge, verte et bleue (RGB).

![Hexadecimal Color Wheel](https://i.pinimg.com/originals/91/db/31/91db3125752ae5f150be15a173b2759c.jpg)

Il existe trois manières principales d'implémenter les couleurs.

* Les words
* Les valeurs en hexadécimal
* Les valeurs en rgb(a)

## Gras, italique, sous ligné

```css
font-weight: bold;
```

Tu peux gérer l'épaisseur de 100 à 900 (de 100 en 100) 400 = normal et 700 = bold font-weight: normal;

```css
font-weight: normal;
```

```css
font-style: italic;
```

```css
text-decoration: underline;
text-decoration: none;
text-decoration: line-through;
```

```css
text-align : left;
text-align : center;
text-align : right;
```

## Exercices