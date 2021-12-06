---
sidebar_position: 3
---

# CSS 3 - partie 2

## Box Model : Padding vs. Border vs. Margin

Fondamentalement tous les éléments HTML peuvent être vus comme des boîtes.

Le modèle de boîte permet de définir l'espace entre les éléments et d'ajouter une bordure autour des éléments.

Le modèle de boîte comprend les marges, le padding, les bordures et le contenu réel de la boîte, par exemple du texte.

L'image ci-dessous montre très bien comment fonctionne le modèle de boîte.

* Ainsi le **contenu** est l'endroit où le texte et les images apparaissent, vivent.

* Le **padding** est comme une zone transparente autour du contenu mais à l'intérieur de la boîte.

* La **bordure** de la boîte fait le tour du padding et du contenu, cela peut-être transparent ou non.

* La **marge** est l'espace entre les boîtes.

Ces propriétes CSS peuvent être modifiés globalement ou un par un, **haut, droite, bas, gauche**.

![Box Model](/img/tutorial/box-model.png)

Le modèle de boîte te permet également de définir la **hauteur** et la **largeur** d'un élément.

L'ennui ave le modèle de boîte standard que tu viens de voir est que tu définis simplement la hauteur et la largeur du contenu, pas de la boîte entière elle-même.

Cela signifie que le padding, la marge et la bordure seront ajoutés à la hauteur et à la largeur spécifiées. Ce qui n'est en faite pas ce que tu veux. Mais heureusement tu as une solutions pour cela.

Il y a cette propriété CSS très utile appelée `box-sizing`. Si tu définis la taille de la boîte sur `border-box`, la hauteur et la largeur seront définies pour la totalité de la boîte.

Il faut donc plutôt priviligier cela.

:::tip
Tous les navigateurs ajoutent des marges par défaut si tu n'en spécifies aucune. Pour éviter tout cela, tu peux supprimer les valeurs par défaut. Tu crées des règles qui affecterons tous les éléments de ta page Web, à l'aide de sélecteur astérique `*` le sélecteur universel . Voici comme implémenter tout ça `*{margin:0; padding:0; box-sizing:border-box;}`
:::

```css title="Permet d'initialiser ton css"
*{
    margin : 0;
    padding: 0;
    box-sizing: border-box;
}
```

* [Box Model](http://espezua.github.io/blog/css-concepts.html)
* [Box Model - MDN](https://developer.mozilla.org/fr/docs/Learn/CSS/Building_blocks/The_box_model)

## Display property

En HTML, il y a des éléments de bloc et des éléments en ligne.

Les éléments blocs utilisent toute la largeur du navigateur et imposent des sauts de ligne. Ce qui est important chez eux, c'est que tu peux définir **leur hauteur ou leur largeur**.

Les éléments en ligne ne font rien de tout cela.

### Eléments en bloc par nature (block)

* Paragraphe `<p>`
* Titres `<h1>` à `<h6>`
* Division `<div>`
* Listes `<ol>`, `<ul>`, `<li>`
* Formulaire `<form>`
* ...

[**Les éléments de bloc**](https://developer.mozilla.org/fr/docs/Web/HTML/Block-level_elements)

### Eléments en ligne par nature (inline)

* Span (`<span>`)
* Image (`<img>`)
* Ancre (`<a>`)
* ...

[**Les éléments en ligne**](https://developer.mozilla.org/fr/docs/Web/HTML/Inline_elements)

### Les principaux display

* Block
* Inline
* Inline-block
* None (supprime l'élément comme s'il n'existait pas)

## L'héritage

Il est possible de définir des règles globales pour l'ensemble de la page grâce à l'héritage.

Les éléments enfants héritent des propriétes de leurs éléments parents. A moins d'écraser leur style dans le selecteur propre comme nous le faisons dans l'exemple suivant h1 et h2.

## Exercices