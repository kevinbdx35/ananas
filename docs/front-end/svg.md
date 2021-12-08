---
sidebar_position: 7
---

# SVG

* [**SVG W3C**](https://www.w3.org/Graphics/SVG/)
* [**SVG Working Group**](https://svgwg.org)

Scalable Vector Graphics, le format `svg` est un format qui permet une qualité constante de l'image, sans pixelisation même lorsque tu zoomes à l'infini.
 
Il est très pratique pour tous les éléments graphiques de ton site web, il est de petite taille contrairement aux formats `jpg` et `png`. Il faut donc l'utiliser dès que possible dans tes sites quand tu as des éléments graphiques, il sera aussi beaucoup plus facile de mettre en place la responsivité.

Avec le format `svg`, tu as un tas de fonctionnalités que tu peux utiliser, la gestion des couleurs, des animations, de la forme, de la taille,...

Tu peux créer un format `svg` soit en le codant directement mais c'est assez fastidieux et laborieux ou utiliser un logiciel d'edition graphics, qui lui te permettra de dessiner l'élément directement et de génerer son code. Bien entendu sur l'Internet, tu trouveras également des fichiers directement téléchargeables. 

```html title="Tu peux mettre une image svg ou coder directement ton svg"
<img src = "image.svg" alt = "SVG Image">

<svg width = "500" height = "500">
    <rect width = "300" height = "100" fill = "blue"></rect>
</svg>    
```
Dans le premier cas, tu importes et intègres directement un image `svg`.
Dans le deuxième cas, tu dessines un carré de 500 par 500 qui sera en quelque sorte ta feuille où va venir se dessiner ton svg. Ensuite via `rect` tu viens dessiner un rectangle de 300 par 100 de couleur bleu.

```html title="Tu vas ici créer un texte blanc en svg sur un fond bleu "
<svg width = "500" height = "500" style= "background : rgb(10, 50, 100)">
    <text x = "250" y = "250" fill = "white">Ananas en SVG</text>
</svg>    
```
![Texte](/img/tutorial/texte.png)

```html title="Tu vas ici tracer une ligne rouge sur un fond bleu "
<svg width = "500" height = "500" style= "background : rgb(10, 50, 100)">
    <line x1 = "250" y1 = "250" x2 = "500" y2 = "500" stroke = "red" stroke-width = "5">
</svg>    
```
![Ligne](/img/tutorial/line.png)

```html title="Tu vas ici dessiner un cercle jaune sur un fond bleu "
<svg width = "500" height = "500" style= "background : rgb(10, 50, 100)">
    <circle cx = "300" cy = "100" r = "50" fill = "yellow" stroke = "pink" stroke-width = "5"></circle>
</svg>    
```
![Cercle](/img/tutorial/circle.png)

```html title="Tu vas ici dessiner un rectangle vert sur un fond bleu "
<svg width = "500" height = "500" style= "background : rgb(10, 50, 100)">
    <rect x = "50" y = "250" width = "100" height = "50" fill = "green"></rect>
</svg>    
```
![Rectangle](/img/tutorial/recta.png)

```html title="Tu vas ici dessiner une ellipse rose sur un fond bleu "
<svg width = "500" height = "500" style= "background : rgb(10, 50, 100)">
    <ellipse cx = "50" cy = "250" rx = "100" ry = "50" fill = "pink"></ellipse>
</svg>    
```
![Elipse](/img/tutorial/elipse.png)

```html title="Tu vas ici dessiner un polygone orange sur un fond bleu "
<svg width = "500" height = "500" style= "background : rgb(10, 50, 100)">
    <polygon points = "200,10 250,100 160,210 110,250" fill = "orange"></polygon>
</svg>    
```
![Polygon](/img/tutorial/polygon.png)
