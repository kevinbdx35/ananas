---
sidebar_position: 5
---

# Les unités en CSS

Il y existe des tonnes d'unités en CSS, mais si tu as une bonne compréhension de `rem`, `em`, `%` , `ch`, `vh` et `vw`, vous serez une star 🤩 du CSS.

:::info
Rappeles-toi comme en Mathématique; il y a toujours une exception à toutes les règles que tu peux rencontrer ci-dessous.
:::

## Absolute vs relative

Il existe des unités absolutes et des unités relatives. Les unités absolutes sont des valeurs fixes et la valeurs relatives sont des valeurs qui s'adaptent et se recalculent en permanence.

Il faut prévilégier les unités relatives pour la responsivité de ton site.

![Unites](/img/tutorial/unite.png)

## L'aspect responsive d'un site commence par sa font

Quand tu souhaites créer un site web responsive, tu t'orientes automatiquement vers l’aspect responsive **grid** de ta future application sans prendre réellement en compte la taille de la police du texte contenue dans ces éléments.

Pourtant cette taille de police est cruciale lors de l’élaboration d’une stratégie responsive d’une application, puisque celle-ci dépend principalement de la préférence utilisateur.

En effet, certains utilisateurs vont préférer avoir une taille de police assez grande alors que d’autres préféreront avoir une taille de police assez petite.

L’objectif est également d’adapter ton application à ces tailles de polices. C’est ici que les unités de mesures `rem` et `em` entrent en jeu!

## EM / REM: définition

**em** et **rem** sont toutes deux des unités de mesure flexibles et scalables traduites par le navigateur en pixel, qui dependent de la taille de police utilisée par ton système.

* [Em (typography)](https://en.wikipedia.org/wiki/Em_(typography))
* [Em W3C](https://www.w3.org/Style/LieBos3e/em)

La taille de police par défaut dans un navigateur est de **16px**.

Ce qui traduit donc que `1rem` = `16px` par défaut et `1em` = `16px` par défaut.

À priori, les unités de mesures `rem` et `em` font exactement la même chose. Elles permettent d’avoir des unités flexibles offrant plus de responsivité et de lisibilité à tes applications.

## Comment sont traduites ces unités de mesure en pixel ?

Quand tu utilises l’unité de mesure `rem`, le navigateur traduit cette mesure en utilisant la taille de police du root element (i.e *html*). La taille de police **root** est multipliée par n’importe quelle valeur avec laquelle tu utilises l’unité de mesure `rem`.

Il est important de savoir que le root element de tes applications web hérite par défaut de la taille de police de ton navigateur si tu ne lui définis aucune font-size.

**Exemple** : le root element de ton application est de `16px` (au passage il hérite de la taille de police de ton navigateur), l’unité de mesure 10rem est équivalente à 10 * 16px = 160px.

Quand tu utilises l’unité de mesure `em` le navigateur traduit cette mesure en utilisant la taille de police de l’élément courant/parent. De la même manière que pour `rem`, la navigateur va multiplier la taille de police de l’élément par n’importe quelle valeur avec laquelle tu utilises l’unité de mesure `em`.

**Exemple** : la taille de police de ta div est de 40px, l’unité de mesure 2em est équivalente à 2 * 40px = 80px.

## Les effets de l'héritage

Utiliser les unités de mesure `em` peut parfois devenir très compliqué à cause de l’héritage. L’héritage impose que chaque élément hérite de la taille de police de son élément parent si et uniquement si la taille de police de l’élément courant n’est pas précisée.

## EM vs REM le résumé

* La conversion en pixels des unités de mesure `rem` est déterminée par la taille de police de l’élément *html*. Cette taille de police est influencée par l’heritage de la taille de police du navigateur si celle-ci n’est pas explicitement déclarée avec une unité de mesure qui n’est pas soumise à la loi de l’héritage (px).

* La conversion en pixels des unités de mesure `em` est déterminée par la taille de police de l’élément courant où est utilisée cette unité de mesure. La taille de police de l’élément courant hérite de la taille de police de l’élément parent si celle-ci n’est pas explicitement déclarée avec une unité de mesure qui n’est pas soumise à la loi de l’héritage (px).

## Pourquoi utiliser les unités de mesure rem?

Ce qui rend très puissant, l’utilisation des unités de mesure `rem` réside dans le fait qu’elles donnent un dimensionnement cohérent quel que soit l’héritage des éléments. Cette unité de mesure te permet de t'assurer que les paramètres de taille de police des utilisateurs influencent chaque aspect de la mise en page d’un site.

Ainsi, l’objectif principal de l’utilisation des unités de mesures `rem` est donc de s’assurer que quelle que soit la taille de police par défaut du navigateur de l’utilisateur, la mise en page s’ajustera correctement pour s’adapter à la taille du texte qu’elle contient.

```css
div{
	/*font-size : 16px;*/
	font-size : 1rem; /*1rem = 16px*/
}
```

L'unité `rem` s'adapte au système de l'utilisateur et aux préférences du navigateur alors que si tu utilises des pixels, tu vas verrouiller les choses et tu vas écraser les préférences d'un utilisateur.

Mais convertir des pixels en `rem` n'est pas toujours évident.

:::tip
Pour cela il existe une astuce, il suffit de forcer la taille de la police racine à 10px, **il est plus simple de convertir des unités rem, si 1rem = 10px**.
:::

Néanmoins cette astuce pose poblème car elle vient verrouiller les préférences du navigateur que chaque utilisateur aura pu définir.

Si tu souhaites pouvoir continuer à prendre en compte les préférences utilisateurs, tu dois  passer en `%` dans la définition de la police racine (root), si tu mets 100%, tu auras donc une police racine égale à 16px par défaut si aucune préférence utilisateur n'a été spécifiée.

:::note
**Pour garder le ratio de 1rem = 10px**, il suffit donc de mettre **la taille de la police racine à 62.5%** cela permet ainsi de prendre en compte les deux points précédents.
:::

```css title="Ici, tu initialises la police racine (root)"
hml{
	font-size : 62.5%; /*1rem = 10px*/
}
```

## L'unité CH

`Character unit` est une unité relative à la largeur du charactère `0` (zéro) de la police utilisée.

Elle permet de définir le nombre de caractères que tu souhaites en largeur de tes textes pour obtenir une bonne lisibilité.

Donc, quelle que soit la largeur du caractère `0` dans une police de caractères donnée, **c'est la mesure d'un ch**. Cela signifie, qu'il existe une différence entre le comportement de l'unité `ch` dans les polices monospace et proportionnelle.

Dans la police monospace, où chaque caractère a la même largeur, vous pouvez utiliser l'unité ch pour vous assurer que 100 caractères tiennent sur une ligne, par exemple. 

Dans les polices proportionnelles, chaque caractère peut avoir une largeur différente, ce qui rend impossible d'ajuster exactement 100 caractères sur une ligne.

## Quelques ressources

* [Valeurs et unités CSS](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Values_and_Units)
* [Unités de mesures: em vs rem](https://medium.com/codeshake/unités-de-mesures-em-vs-rem-eac03dbcb9c7)
* [PX, EM or REM Media Queries?](https://zellwk.com/blog/media-query-units/)

<iframe width="708" height="398" src="https://www.youtube.com/embed/_-aDOAMmDHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="708" height="398" src="https://www.youtube.com/embed/hyAeX0p-uIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

