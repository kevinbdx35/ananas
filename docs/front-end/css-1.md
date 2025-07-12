---
sidebar_position: 2
---

# CSS 3 - Fondamentaux et Stylisation 🎨

Maintenant que tu maîtrises les bases du HTML, il est temps de donner vie à tes pages web ! Le CSS va transformer tes pages blanches et ennuyeuses en créations visuellement attractives et professionnelles.

## 🎯 Qu'est-ce que le CSS ?

**CSS (Cascading Style Sheets)** ou "Feuilles de Style en Cascade" est le langage qui permet de styliser et mettre en forme tes pages web. Si HTML est le **squelette** de ta page, CSS en est la **peau et les vêtements**.

### Séparation des responsabilités

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│      HTML       │    │       CSS       │    │   JavaScript    │
│   (Structure)   │    │    (Style)      │    │ (Comportement)  │
│                 │    │                 │    │                 │
│ • Contenu       │    │ • Couleurs      │    │ • Interactions  │
│ • Sémantique    │    │ • Polices       │    │ • Dynamisme     │
│ • Hiérarchie    │    │ • Layout        │    │ • Logique       │
│ • Accessibilité │    │ • Animations    │    │ • Données       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Évolution visuelle

**Avant CSS :**
- Pages blanches avec police Times New Roman
- Texte aligné à gauche
- Aucune hiérarchie visuelle
- Aspect années 90

**Avec CSS :**
- Designs modernes et attractifs
- Typographie soignée
- Layouts complexes et responsifs
- Animations et transitions fluides

## 📍 Méthodes d'intégration CSS

### 1. Style en ligne (à éviter)

```html
<!-- ❌ À éviter : mélange HTML et CSS -->
<p style="color: red; font-size: 18px;">Texte rouge</p>
<div style="background: blue; padding: 20px;">Boîte bleue</div>
```

**Problèmes :**
- Code HTML pollu
- Impossible à réutiliser
- Maintenance difficile
- Performance dégradée

### 2. Style interne (pour prototypage)

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* CSS dans le head */
        h1 {
            color: navy;
            text-align: center;
        }
        
        .highlight {
            background: yellow;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h1>Mon titre</h1>
    <p class="highlight">Texte surligné</p>
</body>
</html>
```

**Usage :** Prototypage rapide, page unique

### 3. Style externe (recommandé) ⭐

```html
<!-- dans index.html -->
<head>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="responsive.css">
</head>
```

```css
/* dans style.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

h1 {
    color: #333;
    border-bottom: 2px solid #007bff;
}
```

**Avantages :**
- ✅ Code HTML propre et sémantique
- ✅ Réutilisable sur plusieurs pages
- ✅ Maintenance centralisée
- ✅ Cache navigateur optimisé
- ✅ Collaboration équipe facilitée

## 🧬 Anatomie d'une règle CSS

### Structure de base

```css
/* Sélecteur { Propriété: Valeur; } */
h1 {
    color: #2c3e50;
    font-size: 2.5rem;
    margin-bottom: 1rem;
}
```

### Composants détaillés

```css
/* Sélecteur : QUI cibler */
.navigation {
    /* Propriété : QUOI modifier */
    background-color: /* Valeur : COMMENT modifier */ #3498db;
    padding: 15px 30px;
    border-radius: 8px;
    /* Chaque déclaration se termine par ; */
}

/* Règle avec multiple sélecteurs */
h1, h2, h3 {
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: 600;
}

/* Règle avec sélecteur descendant */
.article p {
    line-height: 1.6;
    margin-bottom: 1em;
}
```

### Règles multiples

```css
.card {
    /* Layout */
    display: flex;
    flex-direction: column;
    
    /* Dimensions */
    width: 300px;
    min-height: 400px;
    
    /* Espacement */
    padding: 20px;
    margin: 10px;
    
    /* Apparence */
    background: white;
    border: 1px solid #ddd;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    
    /* Transition */
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}
```

## 💬 Commentaires CSS

### Syntaxe des commentaires

```css
/* Commentaire sur une ligne */

/*
Commentaire
sur plusieurs
lignes
*/

/* =================================
   SECTION NAVIGATION
   ================================= */
.navbar {
    background: #333;
}

/* TODO: Optimiser pour mobile */
.sidebar {
    width: 250px; /* Largeur fixe temporaire */
}

/*
FIXME: Bug d'affichage sur IE11
Utiliser fallback pour flexbox
*/
.flex-container {
    display: flex;
}
```

### Bonnes pratiques de commentaires

```css
/* =================================
   TABLE DES MATIÈRES
   =================================
   1. Reset & Base
   2. Typography
   3. Layout
   4. Components
   5. Utilities
   6. Media Queries
   ================================= */

/* 1. RESET & BASE
   ================================= */
* {
    box-sizing: border-box;
}

/* 2. TYPOGRAPHY
   ================================= */
body {
    font-family: system-ui, -apple-system, sans-serif;
    /* 16px base pour accessibilité */
    font-size: 1rem;
    line-height: 1.5;
}

/* Component: Button Primary
   Usage: <button class="btn btn--primary">
   ================================= */
.btn--primary {
    background: #007bff;
    color: white;
    /* Respect contrast ratio 4.5:1 minimum */
}
```

## 🎯 Sélecteurs CSS

### Sélecteurs de base

```css
/* Sélecteur d'élément */
p {
    margin-bottom: 1rem;
}

/* Sélecteur de classe (réutilisable) */
.highlight {
    background: yellow;
    padding: 0.2em 0.4em;
}

/* Sélecteur d'ID (unique) */
#header {
    position: fixed;
    top: 0;
    width: 100%;
}

/* Sélecteur universel */
* {
    margin: 0;
    padding: 0;
}
```

### Usage HTML correspondant

```html
<!-- Ciblé par p {} -->
<p>Paragraphe avec marge en bas</p>

<!-- Ciblé par .highlight {} -->
<span class="highlight">Texte surligné</span>
<div class="highlight">Div surligné</div>

<!-- Ciblé par #header {} -->
<header id="header">
    <nav>Navigation fixe</nav>
</header>
```

### Classes vs IDs

| Aspect | Classe (.) | ID (#) |
|--------|-----------|--------|
| **Usage** | Réutilisable | Unique |
| **HTML** | `class="nav"` | `id="header"` |
| **CSS** | `.nav {}` | `#header {}` |
| **Priorité** | Faible | Forte |
| **JavaScript** | Multiple | Un seul |
| **Recommandation** | ✅ À privilégier | ⚠️ Usage limité |

```css
/* ✅ Bon : Classes réutilisables */
.btn { padding: 10px 20px; }
.btn-primary { background: blue; }
.btn-large { font-size: 1.2em; }

/* ⚠️ À éviter : IDs multiples */
#button1 { padding: 10px 20px; }
#button2 { padding: 10px 20px; } /* Duplication */
```

## 🔤 Typographie CSS

### Taille de police

```css
/* ❌ Pixels : Non accessible */
.fixed-size {
    font-size: 16px; /* Ne s'adapte pas aux préférences utilisateur */
}

/* ✅ Unités relatives : Accessibles */
.responsive-size {
    font-size: 1rem;     /* Relatif à la racine (16px par défaut) */
    font-size: 1.2em;    /* Relatif au parent */
    font-size: 110%;     /* Pourcentage du parent */
}

/* ✅ Mots-clés : Simples et sémantiques */
.keyword-sizes {
    font-size: small;    /* Plus petit */
    font-size: medium;   /* Taille normale */
    font-size: large;    /* Plus grand */
    font-size: x-large;  /* Très grand */
    font-size: xx-large; /* Énorme */
}
```

### Échelle typographique harmonieuse

```css
:root {
    /* Échelle modulaire basée sur 1.25 (quarte majeure) */
    --text-xs: 0.8rem;     /* 12.8px */
    --text-sm: 0.9rem;     /* 14.4px */
    --text-base: 1rem;     /* 16px */
    --text-lg: 1.25rem;    /* 20px */
    --text-xl: 1.563rem;   /* 25px */
    --text-2xl: 1.953rem;  /* 31.25px */
    --text-3xl: 2.441rem;  /* 39px */
    --text-4xl: 3.052rem;  /* 48.8px */
}

h1 { font-size: var(--text-4xl); }
h2 { font-size: var(--text-3xl); }
h3 { font-size: var(--text-2xl); }
h4 { font-size: var(--text-xl); }
p  { font-size: var(--text-base); }
small { font-size: var(--text-sm); }
```

### Polices de caractères

```css
/* Stack de polices robuste */
.modern-sans {
    font-family: 
        -apple-system,           /* macOS/iOS */
        BlinkMacSystemFont,      /* macOS Chrome */
        'Segoe UI',              /* Windows */
        'Roboto',                /* Android */
        'Helvetica Neue',        /* macOS Safari */
        Arial,                   /* Fallback universel */
        sans-serif;              /* Générique */
}

.readable-serif {
    font-family: 
        'Georgia',
        'Times New Roman',
        'Times',
        serif;
}

.code-mono {
    font-family: 
        'SF Mono',               /* macOS */
        'Monaco',                /* macOS ancien */
        'Consolas',              /* Windows */
        'Liberation Mono',       /* Linux */
        'Courier New',           /* Fallback */
        monospace;               /* Générique */
}
```

### Polices Web personnalisées

```css
/* Méthode 1 : Google Fonts (simple) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

/* Méthode 2 : Auto-hébergé (performance) */
@font-face {
    font-family: 'Inter';
    src: url('./fonts/Inter-Regular.woff2') format('woff2'),
         url('./fonts/Inter-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap; /* Améliore le temps de chargement */
}

/* Utilisation avec fallback */
body {
    font-family: 'Inter', system-ui, sans-serif;
}
```

## 🌈 Système de couleurs CSS

### Formats de couleurs

```css
.color-formats {
    /* Mots-clés (limité mais pratique) */
    color: red;
    color: steelblue;
    color: transparent;
    
    /* Hexadécimal (le plus commun) */
    color: #ff0000;        /* Rouge pur */
    color: #00ff00;        /* Vert pur */
    color: #0066cc;        /* Bleu */
    color: #f39c12;        /* Orange */
    
    /* Hexadécimal court */
    color: #f00;           /* Équivaut à #ff0000 */
    color: #0fc;           /* Équivaut à #00ffcc */
    
    /* RGB (Rouge, Vert, Bleu) */
    color: rgb(255, 0, 0);      /* Rouge */
    color: rgb(0, 122, 255);    /* Bleu iOS */
    
    /* RGBA (avec transparence) */
    color: rgba(255, 0, 0, 0.5);    /* Rouge à 50% */
    background: rgba(0, 0, 0, 0.1);  /* Noir à 10% */
    
    /* HSL (Teinte, Saturation, Luminosité) */
    color: hsl(0, 100%, 50%);     /* Rouge */
    color: hsl(210, 100%, 50%);   /* Bleu */
    color: hsl(120, 50%, 75%);    /* Vert pastel */
    
    /* HSLA (avec transparence) */
    color: hsla(240, 100%, 50%, 0.8); /* Bleu à 80% */
}
```

### Palette de couleurs harmonieuse

```css
:root {
    /* Couleurs primaires */
    --primary-50: #eff6ff;
    --primary-100: #dbeafe;
    --primary-200: #bfdbfe;
    --primary-300: #93c5fd;
    --primary-400: #60a5fa;
    --primary-500: #3b82f6;  /* Couleur principale */
    --primary-600: #2563eb;
    --primary-700: #1d4ed8;
    --primary-800: #1e40af;
    --primary-900: #1e3a8a;
    
    /* Couleurs neutres */
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-500: #6b7280;    /* Texte secondaire */
    --gray-900: #111827;    /* Texte principal */
    
    /* Couleurs fonctionnelles */
    --success: #10b981;
    --warning: #f59e0b;
    --error: #ef4444;
    --info: #3b82f6;
}

/* Utilisation sémantique */
.btn-primary {
    background: var(--primary-500);
    color: white;
}

.btn-primary:hover {
    background: var(--primary-600);
}

.text-muted {
    color: var(--gray-500);
}
```

## ✨ Stylisation du texte

### Formatage avancé

```css
.text-styling {
    /* Épaisseur de police */
    font-weight: 100;    /* Ultra-light */
    font-weight: 300;    /* Light */
    font-weight: 400;    /* Normal (défaut) */
    font-weight: 600;    /* Semi-bold */
    font-weight: 700;    /* Bold */
    font-weight: 900;    /* Black */
    
    /* Style de police */
    font-style: normal;   /* Droit */
    font-style: italic;   /* Italique */
    font-style: oblique;  /* Oblique (rare) */
    
    /* Décoration du texte */
    text-decoration: none;          /* Aucune */
    text-decoration: underline;     /* Souligné */
    text-decoration: line-through;  /* Barré */
    text-decoration: overline;      /* Ligne au-dessus */
    
    /* Transformation du texte */
    text-transform: uppercase;      /* MAJUSCULES */
    text-transform: lowercase;      /* minuscules */
    text-transform: capitalize;     /* Première Lettre */
    text-transform: none;           /* Aucune transformation */
    
    /* Alignement du texte */
    text-align: left;     /* Gauche (défaut) */
    text-align: center;   /* Centré */
    text-align: right;    /* Droite */
    text-align: justify;  /* Justifié */
}
```

### Lisibilité et accessibilité

```css
.readable-text {
    /* Interlignage pour la lisibilité */
    line-height: 1.5;      /* Minimum recommandé */
    line-height: 1.6;      /* Optimal pour la lecture */
    
    /* Espacement des lettres */
    letter-spacing: 0.05em; /* Légère aération */
    
    /* Espacement des mots */
    word-spacing: 0.1em;
    
    /* Largeur de ligne optimale */
    max-width: 65ch;        /* 65 caractères maximum */
    
    /* Contraste suffisant */
    color: #2d3748;         /* Sombre mais pas noir pur */
    background: #ffffff;    /* Blanc pour contraste maximal */
}

/* Responsive typography */
@media (max-width: 768px) {
    .responsive-text {
        font-size: 1rem;
        line-height: 1.6;
        /* Police plus grande sur mobile pour lisibilité */
    }
}
```

## 🎨 CSS créatif et artistique

Le CSS peut créer de véritables œuvres d'art ! Voici quelques exemples inspirants :

### Art CSS célèbre

```css
/* Inspiré de "Francine" par Diana Smith */
.css-art-face {
    width: 300px;
    height: 300px;
    position: relative;
    background: radial-gradient(
        circle at 30% 30%,
        #ffdbac 0%,
        #f4a261 45%,
        #e76f51 100%
    );
    border-radius: 50%;
}

.css-art-eye {
    position: absolute;
    width: 40px;
    height: 20px;
    background: #2d3748;
    border-radius: 50%;
    top: 100px;
}

.css-art-eye.left { left: 80px; }
.css-art-eye.right { right: 80px; }
```

### Créations géométriques

```css
/* Triangle CSS pur */
.triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #3b82f6;
}

/* Cercle avec dégradé */
.gradient-circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(
        45deg,
        #667eea 0%,
        #764ba2 100%
    );
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}
```

**Ressources d'inspiration :**
- [CSS Art Gallery](https://css-art.com) - Galerie d'art CSS
- [A Single Div](https://a.singlediv.com/) - Art avec une seule div
- [CSS Battle](https://cssbattle.dev/) - Défis de création CSS

:::info SEO et CSS 🔍
Les robots des moteurs de recherche analysent principalement le HTML, pas le CSS. Assure-toi que ta structure HTML reste sémantique et accessible, même avec un design complexe.
:::

## 🛠️ Exercices pratiques

### Exercice 1 : Carte de profil

Crée une carte de profil stylisée :

```html
<div class="profile-card">
    <img src="avatar.jpg" alt="Photo de profil" class="avatar">
    <h2 class="name">Alice Dupont</h2>
    <p class="title">Développeuse Front-end</p>
    <p class="bio">Passionnée par le design et l'expérience utilisateur</p>
    <button class="contact-btn">Contacter</button>
</div>
```

### Exercice 2 : Navigation stylisée

```html
<nav class="main-nav">
    <ul class="nav-list">
        <li><a href="#" class="nav-link active">Accueil</a></li>
        <li><a href="#" class="nav-link">À propos</a></li>
        <li><a href="#" class="nav-link">Services</a></li>
        <li><a href="#" class="nav-link">Contact</a></li>
    </ul>
</nav>
```

### Exercice 3 : Article de blog

Stylise un article avec typographie soignée, hiérarchie claire, et bonne lisibilité.

---

:::success Félicitations ! 🎉
Tu maîtrises maintenant les **fondamentaux du CSS** ! Tu peux transformer tes pages HTML en créations visuellement attractives. CSS est un langage créatif puissant - laisse libre cours à ton imagination tout en gardant à l'esprit l'expérience utilisateur.
:::

## 🔗 Ressources pour approfondir

- 📖 [MDN CSS Reference](https://developer.mozilla.org/fr/docs/Web/CSS) - Documentation complète
- 🎨 [CSS-Tricks](https://css-tricks.com/) - Techniques et astuces CSS
- 🎯 [CSS Diner](https://flukeout.github.io/) - Jeu pour apprendre les sélecteurs
- 🎪 [Flexbox Froggy](https://flexboxfroggy.com/) - Apprendre Flexbox en jouant
- 📊 [Can I Use](https://caniuse.com/) - Compatibilité des propriétés CSS
- 🎨 [Google Fonts](https://fonts.google.com/) - Polices web gratuites

Le CSS transforme le web en un médium d'expression visuelle infini ! 🚀