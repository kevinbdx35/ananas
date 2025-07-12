---
sidebar_position: 4
---

# CSS Avancé - Layouts et Positionnement 🎯

Maîtrise les techniques avancées de CSS pour créer des layouts modernes et responsives. Cette section couvre le positionnement, Flexbox, Grid et les sélecteurs avancés.

## 📍 Positionnement CSS

### Les différents types de position

```css
/* Position static (par défaut) */
.element-static {
    position: static;
    /* top, right, bottom, left n'ont aucun effet */
}

/* Position relative */
.element-relative {
    position: relative;
    top: 10px;    /* Décalage par rapport à sa position normale */
    left: 20px;
    z-index: 1;
}

/* Position absolute */
.element-absolute {
    position: absolute;
    top: 0;       /* Par rapport au parent positionné le plus proche */
    right: 0;
    z-index: 10;
}

/* Position fixed */
.element-fixed {
    position: fixed;
    bottom: 20px; /* Par rapport à la viewport */
    right: 20px;
    z-index: 1000;
}

/* Position sticky */
.element-sticky {
    position: sticky;
    top: 0;       /* Devient fixed quand il atteint cette position */
    z-index: 100;
}
```

### Exemples pratiques

#### Header fixe

```css
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: #333;
    color: white;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.main-content {
    margin-top: 60px; /* Compenser la hauteur du header fixe */
    padding: 20px;
}
```

#### Modal centré

```css
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    position: relative;
    background: white;
    border-radius: 8px;
    padding: 30px;
    max-width: 500px;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.modal-close {
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
}
```

#### Notification sticky

```css
.notification {
    position: sticky;
    top: 20px;
    background: #4CAF50;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    margin: 20px 0;
    z-index: 500;
}

.notification.error {
    background: #f44336;
}

.notification.warning {
    background: #ff9800;
}
```

### Z-index et contexte d'empilement

```css
/* Contexte d'empilement */
.stacking-context {
    position: relative;
    z-index: 0; /* Crée un nouveau contexte d'empilement */
}

/* Hiérarchie des z-index recommandée */
:root {
    --z-dropdown: 1000;
    --z-sticky: 1020;
    --z-fixed: 1030;
    --z-modal-backdrop: 1040;
    --z-modal: 1050;
    --z-popover: 1060;
    --z-tooltip: 1070;
    --z-toast: 1080;
}

.dropdown { z-index: var(--z-dropdown); }
.modal { z-index: var(--z-modal); }
.tooltip { z-index: var(--z-tooltip); }
```

## 🌊 Float et Clearfix (Legacy)

### Utilisation des floats

```css
/* Float basique */
.float-left {
    float: left;
    width: 200px;
    margin: 0 20px 20px 0;
}

.float-right {
    float: right;
    width: 200px;
    margin: 0 0 20px 20px;
}

/* Clearfix pour contenir les floats */
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

/* Alternative moderne */
.container {
    display: flow-root; /* Contient automatiquement les floats */
}
```

### Layout avec floats (pour comprendre l'historique)

```css
/* Layout 3 colonnes avec floats */
.container {
    max-width: 1200px;
    margin: 0 auto;
}

.sidebar-left {
    float: left;
    width: 200px;
    background: #f0f0f0;
    min-height: 500px;
}

.main-content {
    float: left;
    width: calc(100% - 400px); /* 100% - (200px + 200px) */
    padding: 0 20px;
    min-height: 500px;
}

.sidebar-right {
    float: right;
    width: 200px;
    background: #f0f0f0;
    min-height: 500px;
}

/* Clear pour éviter les débordements */
.footer {
    clear: both;
    background: #333;
    color: white;
    padding: 20px;
}
```

## 🎯 L'art du centrage

### Centrage horizontal

```css
/* Méthode 1: margin auto (éléments block avec largeur définie) */
.center-margin {
    width: 300px;
    margin: 0 auto;
}

/* Méthode 2: text-align (éléments inline/inline-block) */
.center-container {
    text-align: center;
}

.center-inline {
    display: inline-block;
    text-align: left; /* Remettre l'alignement normal */
}

/* Méthode 3: Flexbox */
.center-flex {
    display: flex;
    justify-content: center;
}

/* Méthode 4: Grid */
.center-grid {
    display: grid;
    justify-content: center;
}
```

### Centrage vertical

```css
/* Méthode 1: line-height (une seule ligne de texte) */
.center-line-height {
    height: 100px;
    line-height: 100px;
    text-align: center;
}

/* Méthode 2: Flexbox */
.center-flex-vertical {
    display: flex;
    align-items: center;
    height: 300px;
}

/* Méthode 3: Grid */
.center-grid-vertical {
    display: grid;
    align-items: center;
    height: 300px;
}

/* Méthode 4: Position + transform */
.center-absolute {
    position: relative;
    height: 300px;
}

.center-absolute .centered {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
```

### Centrage horizontal ET vertical

```css
/* Méthode 1: Flexbox (recommandée) */
.center-flex-both {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Méthode 2: Grid */
.center-grid-both {
    display: grid;
    place-items: center;
    height: 100vh;
}

/* Méthode 3: Position + transform */
.center-absolute-both {
    position: relative;
    height: 100vh;
}

.center-absolute-both .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* Méthode 4: Margin auto avec flexbox */
.center-margin-flex {
    display: flex;
    height: 100vh;
}

.center-margin-flex .centered {
    margin: auto;
}
```

## 🧰 Flexbox - Le Layout Moderne

### Concepts de base

```css
/* Container flex */
.flex-container {
    display: flex; /* ou inline-flex */
    
    /* Direction principale */
    flex-direction: row; /* row | row-reverse | column | column-reverse */
    
    /* Retour à la ligne */
    flex-wrap: nowrap; /* nowrap | wrap | wrap-reverse */
    
    /* Raccourci pour direction + wrap */
    flex-flow: row wrap;
    
    /* Alignement sur l'axe principal */
    justify-content: flex-start; /* flex-start | flex-end | center | space-between | space-around | space-evenly */
    
    /* Alignement sur l'axe secondaire */
    align-items: stretch; /* stretch | flex-start | flex-end | center | baseline */
    
    /* Alignement des lignes (avec wrap) */
    align-content: stretch; /* stretch | flex-start | flex-end | center | space-between | space-around */
    
    /* Espacement */
    gap: 20px; /* gap entre les éléments */
    row-gap: 20px;
    column-gap: 10px;
}

/* Éléments flex */
.flex-item {
    /* Ordre d'affichage */
    order: 0; /* entier, 0 par défaut */
    
    /* Croissance */
    flex-grow: 0; /* 0 = ne grandit pas, 1 = grandit proportionnellement */
    
    /* Rétrécissement */
    flex-shrink: 1; /* 1 = peut rétrécir, 0 = ne rétrécit pas */
    
    /* Taille de base */
    flex-basis: auto; /* auto | taille (px, %, em...) */
    
    /* Raccourci pour grow shrink basis */
    flex: 0 1 auto; /* flex: none | auto | initial | <grow> <shrink> <basis> */
    
    /* Alignement individuel */
    align-self: auto; /* auto | flex-start | flex-end | center | baseline | stretch */
}
```

### Exemples pratiques Flexbox

#### Navigation horizontale

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background: #333;
    color: white;
}

.nav-logo {
    font-size: 24px;
    font-weight: bold;
}

.nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 30px;
}

.nav-menu a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    transition: background 0.3s;
}

.nav-menu a:hover {
    background: rgba(255,255,255,0.1);
    border-radius: 5px;
}

.nav-actions {
    display: flex;
    gap: 10px;
}
```

#### Cards responsive

```css
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
}

.card {
    flex: 1 1 300px; /* grow shrink basis */
    min-width: 250px;
    max-width: 400px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 20px;
}

.card-title {
    margin: 0 0 10px 0;
    font-size: 18px;
}

.card-description {
    color: #666;
    line-height: 1.5;
}
```

#### Sidebar + contenu

```css
.app-layout {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    flex: 0 0 250px; /* Ne grandit pas, ne rétrécit pas, 250px de base */
    background: #2c3e50;
    color: white;
    padding: 20px;
}

.main-content {
    flex: 1; /* Prend tout l'espace restant */
    padding: 20px;
    overflow-y: auto;
}

/* Version responsive */
@media (max-width: 768px) {
    .app-layout {
        flex-direction: column;
    }
    
    .sidebar {
        flex: 0 0 auto;
        order: 2; /* Sidebar en bas sur mobile */
    }
    
    .main-content {
        order: 1;
    }
}
```

#### Centrage parfait

```css
.hero-section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 20px;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}
```

## 🎨 CSS Grid - Layout 2D Puissant

### Concepts de base

```css
/* Container grid */
.grid-container {
    display: grid; /* ou inline-grid */
    
    /* Définir les colonnes */
    grid-template-columns: 200px 1fr 100px; /* 3 colonnes: fixe, flexible, fixe */
    grid-template-columns: repeat(3, 1fr); /* 3 colonnes égales */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* responsive */
    
    /* Définir les lignes */
    grid-template-rows: 60px 1fr 40px; /* header, contenu, footer */
    grid-template-rows: repeat(3, 100px); /* 3 lignes de 100px */
    
    /* Zones nommées */
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    
    /* Espacement */
    gap: 20px; /* espacement entre tous les éléments */
    row-gap: 20px; /* espacement vertical */
    column-gap: 10px; /* espacement horizontal */
    
    /* Alignement des éléments dans leurs cellules */
    justify-items: stretch; /* start | end | center | stretch */
    align-items: stretch; /* start | end | center | stretch */
    place-items: center; /* raccourci pour align-items + justify-items */
    
    /* Alignement de la grille dans le container */
    justify-content: start; /* start | end | center | stretch | space-around | space-between | space-evenly */
    align-content: start;
    place-content: center; /* raccourci */
}

/* Éléments grid */
.grid-item {
    /* Positionnement par lignes */
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
    
    /* Raccourcis */
    grid-column: 1 / 3; /* de la ligne 1 à 3 */
    grid-row: 2 / 4;
    grid-area: 2 / 1 / 4 / 3; /* row-start / col-start / row-end / col-end */
    
    /* Avec span */
    grid-column: span 2; /* s'étend sur 2 colonnes */
    grid-row: span 3; /* s'étend sur 3 lignes */
    
    /* Zone nommée */
    grid-area: sidebar;
    
    /* Alignement individuel */
    justify-self: center; /* centre horizontalement dans sa cellule */
    align-self: end; /* aligne en bas dans sa cellule */
    place-self: center; /* centre dans sa cellule */
}
```

### Unités de Grid

```css
.grid-units {
    display: grid;
    
    /* fr - fraction de l'espace disponible */
    grid-template-columns: 1fr 2fr 1fr; /* 25% 50% 25% */
    
    /* minmax() - valeur min/max */
    grid-template-columns: minmax(200px, 1fr) 2fr;
    
    /* auto - taille du contenu */
    grid-template-columns: auto 1fr auto;
    
    /* fit-content() - max entre auto et valeur */
    grid-template-columns: fit-content(200px) 1fr;
    
    /* repeat() - répétition */
    grid-template-columns: repeat(12, 1fr); /* 12 colonnes égales */
    grid-template-columns: repeat(auto-fit, 200px); /* colonnes de 200px qui s'adaptent */
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* responsive parfait */
}
```

### Exemples pratiques Grid

#### Layout de site complet

```css
.site-layout {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    grid-template-columns: 200px 1fr 150px;
    grid-template-rows: 60px 1fr 40px;
    min-height: 100vh;
    gap: 20px;
    padding: 20px;
}

.site-header {
    grid-area: header;
    background: #333;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 20px;
}

.site-sidebar {
    grid-area: sidebar;
    background: #f5f5f5;
    padding: 20px;
}

.site-main {
    grid-area: main;
    background: white;
    padding: 20px;
}

.site-aside {
    grid-area: aside;
    background: #f5f5f5;
    padding: 20px;
}

.site-footer {
    grid-area: footer;
    background: #333;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Responsive */
@media (max-width: 768px) {
    .site-layout {
        grid-template-areas: 
            "header"
            "main"
            "sidebar"
            "aside"
            "footer";
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto auto auto;
    }
}
```

#### Galerie responsive

```css
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.gallery-item {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.gallery-item:hover {
    transform: scale(1.05);
}

.gallery-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.gallery-item-content {
    padding: 15px;
}

/* Items spéciaux qui prennent plus de place */
.gallery-item.featured {
    grid-column: span 2;
}

.gallery-item.tall {
    grid-row: span 2;
}
```

#### Dashboard avec widgets

```css
.dashboard {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 100px);
    gap: 15px;
    padding: 20px;
}

.widget {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.widget-small {
    grid-column: span 3;
    grid-row: span 2;
}

.widget-medium {
    grid-column: span 6;
    grid-row: span 3;
}

.widget-large {
    grid-column: span 8;
    grid-row: span 4;
}

.widget-full {
    grid-column: 1 / -1; /* de la première à la dernière colonne */
    grid-row: span 2;
}
```

## 🎭 Sélecteurs CSS Avancés

### Sélecteurs de pseudo-classes

```css
/* États des éléments */
a:hover { color: red; }
a:active { color: blue; }
a:visited { color: purple; }
a:focus { outline: 2px solid blue; }

/* État des formulaires */
input:focus { border-color: blue; }
input:valid { border-color: green; }
input:invalid { border-color: red; }
input:required { border-left: 3px solid orange; }
input:optional { border-left: 3px solid gray; }
input:disabled { opacity: 0.5; }
input:checked { /* pour checkboxes/radio */ }

/* Sélecteurs structurels */
li:first-child { font-weight: bold; }
li:last-child { margin-bottom: 0; }
li:nth-child(2n) { background: #f0f0f0; } /* éléments pairs */
li:nth-child(odd) { background: white; } /* éléments impairs */
li:nth-child(3n+1) { color: red; } /* tous les 3 éléments à partir du 1er */
li:nth-last-child(2) { /* avant-dernier */ }

/* Sélecteurs de type */
p:first-of-type { margin-top: 0; }
p:last-of-type { margin-bottom: 0; }
h2:nth-of-type(2) { /* deuxième h2 */ }

/* Autres */
:empty { display: none; } /* éléments vides */
:not(.special) { color: gray; } /* qui n'ont pas la classe .special */
:target { background: yellow; } /* élément ciblé par un lien ancre */
```

### Sélecteurs de pseudo-éléments

```css
/* Contenu généré */
.quote::before {
    content: """;
    font-size: 2em;
    color: #ccc;
}

.quote::after {
    content: """;
    font-size: 2em;
    color: #ccc;
}

/* Première ligne/lettre */
p::first-line {
    font-weight: bold;
    color: #333;
}

p::first-letter {
    font-size: 3em;
    float: left;
    line-height: 0.8;
    margin-right: 8px;
}

/* Sélection de texte */
::selection {
    background: #3498db;
    color: white;
}

/* Placeholder des inputs */
input::placeholder {
    color: #999;
    font-style: italic;
}
```

### Sélecteurs d'attributs

```css
/* Présence d'attribut */
a[title] { text-decoration: underline dotted; }

/* Valeur exacte */
input[type="text"] { border: 1px solid #ddd; }
input[type="email"] { border: 1px solid blue; }

/* Contient la valeur */
a[href*="example.com"] { color: green; }
img[src*="thumbnail"] { border: 2px solid #ccc; }

/* Commence par */
a[href^="https://"] { color: green; }
a[href^="http://"] { color: orange; }
a[href^="mailto:"] { color: red; }

/* Finit par */
a[href$=".pdf"] { background: url('pdf-icon.png') no-repeat left center; }
a[href$=".zip"] { background: url('zip-icon.png') no-repeat left center; }

/* Mot entier dans une liste */
.tag[data-categories~="javascript"] { background: yellow; }

/* Commence par (avec tiret) */
[lang|="en"] { /* lang="en" ou lang="en-US" */ }
```

### Combinateurs avancés

```css
/* Descendant direct (enfant) */
.nav > li { /* li qui sont enfants directs de .nav */ }

/* Frère adjacent */
h2 + p { /* p qui suit immédiatement h2 */ }

/* Frères suivants */
h2 ~ p { /* tous les p qui suivent h2 au même niveau */ }

/* Combinaisons complexes */
.article h2:not(.title) + p::first-line {
    /* première ligne des p qui suivent un h2 sans classe .title dans .article */
    font-weight: bold;
}
```

## 🎯 Exercices pratiques

### Exercice 1 : Navigation responsive avec Flexbox

Crée une navigation qui :
- Affiche les liens horizontalement sur desktop
- Se transforme en menu hamburger sur mobile
- Utilise Flexbox pour l'alignement

```html
<nav class="navbar">
    <div class="nav-brand">Logo</div>
    <button class="nav-toggle">☰</button>
    <ul class="nav-menu">
        <li><a href="#home">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
```

### Exercice 2 : Layout Dashboard avec Grid

Crée un dashboard avec :
- Header fixe en haut
- Sidebar sur la gauche
- Zone principale avec widgets en Grid
- Footer en bas
- Responsive sur mobile (sidebar devient un drawer)

### Exercice 3 : Galerie avec positionnement avancé

Développe une galerie photo avec :
- Images en Grid responsive
- Overlay au hover avec position absolute
- Modal en position fixed pour voir en grand
- Boutons de navigation sticky

### Solutions CSS avancées

#### Sticky footer

```css
.page-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.main-content {
    flex: 1; /* Prend tout l'espace disponible */
}

.footer {
    flex-shrink: 0; /* Ne rétrécit jamais */
}
```

#### Centrage vertical responsive

```css
.center-container {
    display: grid;
    place-items: center;
    min-height: 100vh;
    padding: 20px;
}

.centered-content {
    max-width: 500px;
    width: 100%;
    text-align: center;
}
```

#### Layout adaptatif sans media queries

```css
.adaptive-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.sidebar {
    min-width: 250px;
}

.main {
    min-width: 0; /* Permet la réduction */
}
```

## 🔗 Ressources pour approfondir

### Documentation officielle
- [MDN - CSS Flexbox](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [MDN - CSS Grid](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout)
- [MDN - CSS Position](https://developer.mozilla.org/fr/docs/Web/CSS/position)

### Outils interactifs
- [Flexbox Froggy](https://flexboxfroggy.com/) - Jeu pour apprendre Flexbox
- [Grid Garden](https://gridgarden.io/) - Jeu pour apprendre Grid
- [CSS Grid Generator](https://grid.layoutit.com/) - Générateur visuel
- [Flexbox Generator](https://flexbox.help/) - Générateur Flexbox

### Guides visuels
- [Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS Selectors Reference](https://www.w3schools.com/cssref/css_selectors.asp)

---

:::success Félicitations ! 🎉
Tu maîtrises maintenant les techniques avancées de CSS ! **Flexbox** et **Grid** sont les outils modernes pour créer des layouts. Le positionnement et les sélecteurs avancés te donnent un contrôle total sur tes designs. Continue à pratiquer avec des projets concrets !
:::

## 🎯 Conseils pour la suite

1. **Pratique régulière** - Crée des layouts différents chaque semaine
2. **Expérimente** - Teste les nouvelles propriétés CSS
3. **Inspire-toi** - Regarde des sites modernes et analyse leur CSS
4. **Outils** - Utilise les DevTools pour comprendre les layouts existants
5. **Communauté** - Partage tes créations et demande des retours

Le CSS moderne offre des possibilités infinies pour créer des interfaces exceptionnelles ! 🚀