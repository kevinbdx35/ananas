---
sidebar_position: 1
---

# Développement Front-end 🎨

Le développement front-end est l'art de créer des interfaces utilisateur interactives et attractives. C'est ce que voient et avec quoi interagissent les utilisateurs sur le web.

## 🎯 Qu'est-ce que le front-end ?

Le **front-end** (ou côté client) correspond à la partie visible et interactive d'une application web. C'est l'interface avec laquelle l'utilisateur interagit directement : boutons, formulaires, animations, mise en page, etc.

### Front-end vs Back-end

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   UTILISATEUR   │◄──►│    FRONT-END    │◄──►│    BACK-END     │
│                 │    │                 │    │                 │
│ • Navigateur    │    │ • HTML          │    │ • Serveur       │
│ • Mobile        │    │ • CSS           │    │ • Base de données│
│ • Tablette      │    │ • JavaScript    │    │ • API           │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

**Front-end** : Ce que l'utilisateur voit et touche
**Back-end** : La logique, les données et les traitements invisibles

## 🧩 Les 3 piliers du front-end

### 1. HTML - La structure 🏗️

HTML (HyperText Markup Language) définit la **structure** et le **contenu** de la page.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma première page</title>
</head>
<body>
    <header>
        <h1>Bienvenue sur mon site</h1>
        <nav>
            <ul>
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="accueil">
            <h2>À propos</h2>
            <p>Je suis développeur front-end passionné...</p>
            <img src="photo.jpg" alt="Ma photo de profil">
        </section>
        
        <section id="services">
            <h2>Mes services</h2>
            <div class="card">
                <h3>Sites web</h3>
                <p>Création de sites modernes et responsives</p>
            </div>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 Mon Site Web</p>
    </footer>
</body>
</html>
```

### 2. CSS - Le style 🎨

CSS (Cascading Style Sheets) contrôle l'**apparence** et la **mise en page**.

```css
/* Styles globaux */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Header */
header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 2.5rem;
}

/* Navigation */
nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
}

nav li {
    margin: 0 1rem;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

nav a:hover {
    color: #ffd700;
}

/* Main content */
main {
    margin-top: 120px;
    padding: 2rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.card {
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    margin: 1rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

/* Responsive design */
@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
    }
    
    h1 {
        font-size: 2rem;
    }
}
```

### 3. JavaScript - L'interactivité ⚡

JavaScript ajoute du **comportement** et de l'**interactivité**.

```javascript
// Variables et sélecteurs
const navbar = document.querySelector('nav');
const cards = document.querySelectorAll('.card');
const sections = document.querySelectorAll('section');

// Navigation fluide
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation d'apparition des cartes
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer toutes les cartes
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Navbar transparente au scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Formulaire de contact interactif
function handleContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validation simple
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            if (email && message) {
                // Animation de succès
                showNotification('Message envoyé avec succès !', 'success');
                this.reset();
            } else {
                showNotification('Veuillez remplir tous les champs', 'error');
            }
        });
    }
}

// Système de notifications
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animation d'apparition
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Suppression automatique
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    handleContactForm();
    console.log('Site initialisé !');
});
```

## 🛠️ Outils et technologies essentiels

### Éditeurs de code

- **Visual Studio Code** - Gratuit, extensible, très populaire
- **Sublime Text** - Rapide et léger
- **WebStorm** - IDE professionnel (payant)
- **Atom** - Open source, personnalisable

### Extensions VS Code indispensables

```json
{
    "recommendations": [
        "ms-vscode.vscode-html-css-support",
        "bradlc.vscode-tailwindcss",
        "esbenp.prettier-vscode",
        "ms-vscode.vscode-json",
        "formulahendry.auto-rename-tag",
        "ritwickdey.liveserver"
    ]
}
```

### Préprocesseurs CSS

#### Sass/SCSS
```scss
// Variables
$primary-color: #3498db;
$secondary-color: #2ecc71;
$font-size-base: 16px;

// Mixins
@mixin button-style($bg-color) {
    background-color: $bg-color;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
    &:hover {
        background-color: darken($bg-color, 10%);
    }
}

// Utilisation
.btn-primary {
    @include button-style($primary-color);
}

.btn-secondary {
    @include button-style($secondary-color);
}

// Nesting
.navbar {
    background: $primary-color;
    
    .nav-item {
        padding: 1rem;
        
        &:hover {
            background: darken($primary-color, 15%);
        }
    }
}
```

### Frameworks CSS populaires

#### Bootstrap
```html
<!-- CDN Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Composants Bootstrap -->
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Titre de la carte</h5>
                    <p class="card-text">Contenu de la carte...</p>
                    <a href="#" class="btn btn-primary">En savoir plus</a>
                </div>
            </div>
        </div>
    </div>
</div>
```

#### Tailwind CSS
```html
<!-- Utility-first approach -->
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
    <div class="p-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Titre</h2>
        <p class="text-gray-600 mb-4">Description du contenu...</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Action
        </button>
    </div>
</div>
```

## 📱 Design responsive

### Mobile-first approach

```css
/* Styles pour mobile (par défaut) */
.container {
    width: 100%;
    padding: 1rem;
}

.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

/* Tablette */
@media (min-width: 768px) {
    .container {
        max-width: 768px;
        margin: 0 auto;
    }
    
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 1024px;
    }
    
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Large screens */
@media (min-width: 1280px) {
    .container {
        max-width: 1280px;
    }
    
    .grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
```

### Flexbox et Grid

#### Flexbox - Disposition en ligne
```css
.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.flex-item {
    flex: 1;
    min-width: 200px;
}

/* Flexbox pour centrer */
.center-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

#### CSS Grid - Layouts complexes
```css
.grid-layout {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 200px 1fr 200px;
    min-height: 100vh;
    gap: 1rem;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Grid responsive */
@media (max-width: 768px) {
    .grid-layout {
        grid-template-areas: 
            "header"
            "main"
            "sidebar"
            "aside"
            "footer";
        grid-template-columns: 1fr;
    }
}
```

## ⚡ JavaScript moderne (ES6+)

### Syntaxe moderne

```javascript
// Arrow functions
const multiply = (a, b) => a * b;

// Destructuring
const user = { name: 'Alice', age: 25, city: 'Paris' };
const { name, age } = user;

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

// Template literals
const greeting = `Bonjour ${name}, tu as ${age} ans !`;

// Spread operator
const newNumbers = [...numbers, 6, 7, 8];
const newUser = { ...user, profession: 'Développeuse' };

// Async/await
async function fetchUserData(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
}

// Modules
// export
export const API_URL = 'https://api.example.com';
export function formatDate(date) {
    return new Intl.DateTimeFormat('fr-FR').format(date);
}

// import
import { API_URL, formatDate } from './utils.js';
```

### DOM et événements

```javascript
// Sélection d'éléments
const button = document.querySelector('.btn');
const inputs = document.querySelectorAll('input');
const form = document.getElementById('contact-form');

// Ajout d'événements
button.addEventListener('click', handleClick);
form.addEventListener('submit', handleSubmit);

// Création d'éléments
function createCard(title, content) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <button class="btn-close">×</button>
    `;
    
    // Événement sur le bouton de fermeture
    card.querySelector('.btn-close').addEventListener('click', () => {
        card.remove();
    });
    
    return card;
}

// Gestion des formulaires
function handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Validation
    if (validateForm(data)) {
        submitForm(data);
    }
}

function validateForm(data) {
    const errors = [];
    
    if (!data.email || !data.email.includes('@')) {
        errors.push('Email invalide');
    }
    
    if (!data.message || data.message.length < 10) {
        errors.push('Message trop court');
    }
    
    if (errors.length > 0) {
        showErrors(errors);
        return false;
    }
    
    return true;
}
```

## 🎨 Animations et transitions

### CSS Animations

```css
/* Keyframes */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
}

/* Animations */
.fade-in {
    animation: fadeInUp 0.6s ease-out;
}

.pulse-animation {
    animation: pulse 2s infinite;
}

/* Transitions */
.button {
    background-color: #3498db;
    transition: all 0.3s ease;
}

.button:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Loading spinner */
.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```

### JavaScript animations

```javascript
// Intersection Observer pour animations au scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => observer.observe(el));
};

// Animation de typing
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Smooth scroll
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
```

## 🛡️ Performance et bonnes pratiques

### Optimisation des images

```html
<!-- Responsive images -->
<picture>
    <source media="(min-width: 800px)" srcset="large.jpg">
    <source media="(min-width: 400px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Description">
</picture>

<!-- Lazy loading -->
<img src="placeholder.jpg" data-src="real-image.jpg" class="lazy" alt="Description">

<!-- WebP avec fallback -->
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Description">
</picture>
```

### JavaScript optimisé

```javascript
// Debounce pour les événements fréquents
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Utilisation
const handleResize = debounce(() => {
    console.log('Window resized');
}, 250);

window.addEventListener('resize', handleResize);

// Lazy loading d'images
const lazyImages = document.querySelectorAll('.lazy');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));
```

### CSS optimisé

```css
/* Utiliser transform au lieu de position pour les animations */
.element {
    transform: translateX(100px); /* Mieux que left: 100px */
}

/* will-change pour optimiser les animations */
.animated-element {
    will-change: transform, opacity;
}

/* Éviter les sélecteurs complexes */
/* ❌ Éviter */
.container .sidebar .menu .item .link:hover {
    color: blue;
}

/* ✅ Préférer */
.menu-link:hover {
    color: blue;
}

/* Critical CSS inline */
/* Mettre le CSS critique dans le <head> */
/* Charger le reste de manière asynchrone */
```

## 🧪 Tests front-end

### Tests unitaires avec Jest

```javascript
// utils.js
export function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    }).format(price);
}

export function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// utils.test.js
import { formatPrice, isValidEmail } from './utils.js';

describe('formatPrice', () => {
    test('should format price correctly', () => {
        expect(formatPrice(1234.56)).toBe('1 234,56 €');
        expect(formatPrice(0)).toBe('0,00 €');
    });
});

describe('isValidEmail', () => {
    test('should validate email correctly', () => {
        expect(isValidEmail('test@example.com')).toBe(true);
        expect(isValidEmail('invalid-email')).toBe(false);
        expect(isValidEmail('')).toBe(false);
    });
});
```

## 🎯 Exercices pratiques

### Exercice 1 : Portfolio responsive

Crée un portfolio personnel avec :
- Header fixe avec navigation
- Section héro avec animation
- Galerie de projets avec filtres
- Formulaire de contact fonctionnel
- Footer avec réseaux sociaux

### Exercice 2 : Todo App interactive

Développe une application de gestion de tâches :
- Ajout/suppression de tâches
- Marquage terminé/non terminé
- Filtres (toutes, actives, terminées)
- Sauvegarde dans localStorage
- Animations fluides

### Exercice 3 : Site e-commerce

Crée une boutique en ligne basique :
- Catalogue de produits
- Panier d'achat
- Système de filtres et recherche
- Modal de détails produit
- Responsive design

## 🚀 Frameworks et bibliothèques

### React (Populaire)

```jsx
import React, { useState, useEffect } from 'react';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    
    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, {
                id: Date.now(),
                text: input,
                completed: false
            }]);
            setInput('');
        }
    };
    
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };
    
    return (
        <div className="todo-app">
            <h1>Ma Todo App</h1>
            <div className="input-section">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ajouter une tâche..."
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                />
                <button onClick={addTodo}>Ajouter</button>
            </div>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className={todo.completed ? 'completed' : ''}
                        onClick={() => toggleTodo(todo.id)}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
```

### Vue.js (Simple et élégant)

```vue
<template>
    <div class="weather-app">
        <h1>Météo</h1>
        <input
            v-model="city"
            @keyup.enter="getWeather"
            placeholder="Entrez une ville..."
        />
        <button @click="getWeather">Rechercher</button>
        
        <div v-if="weather" class="weather-info">
            <h2>{{ weather.name }}</h2>
            <p>{{ weather.main.temp }}°C</p>
            <p>{{ weather.weather[0].description }}</p>
        </div>
        
        <div v-if="loading" class="loading">
            Chargement...
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            city: '',
            weather: null,
            loading: false
        };
    },
    methods: {
        async getWeather() {
            if (!this.city) return;
            
            this.loading = true;
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=YOUR_API_KEY&units=metric`
                );
                this.weather = await response.json();
            } catch (error) {
                console.error('Erreur:', error);
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>
```

## 📊 Outils de développement

### Build tools

#### Vite (Rapide et moderne)
```json
{
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
    },
    "devDependencies": {
        "vite": "^4.0.0",
        "@vitejs/plugin-react": "^3.0.0"
    }
}
```

#### Webpack (Configurable)
```javascript
// webpack.config.js
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};
```

### Package.json exemple

```json
{
    "name": "mon-projet-frontend",
    "version": "1.0.0",
    "scripts": {
        "start": "vite",
        "build": "vite build",
        "test": "jest",
        "lint": "eslint src/",
        "format": "prettier --write src/"
    },
    "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
    },
    "devDependencies": {
        "vite": "^4.0.0",
        "@vitejs/plugin-react": "^3.0.0",
        "eslint": "^8.0.0",
        "prettier": "^2.8.0",
        "jest": "^29.0.0"
    }
}
```

## 📚 Ressources pour approfondir

### Documentation officielle
- [MDN Web Docs](https://developer.mozilla.org) - Référence complète HTML/CSS/JS
- [Can I Use](https://caniuse.com) - Compatibilité des fonctionnalités
- [CSS-Tricks](https://css-tricks.com) - Astuces et techniques CSS

### Outils en ligne
- [CodePen](https://codepen.io) - Éditeur en ligne pour expérimenter
- [JSFiddle](https://jsfiddle.net) - Test rapide de code
- [Figma](https://figma.com) - Design d'interfaces

### Communautés
- [Stack Overflow](https://stackoverflow.com) - Questions/réponses
- [Dev.to](https://dev.to) - Articles et discussions
- [GitHub](https://github.com) - Code source et projets

---

:::success Félicitations ! 🎉
Tu as maintenant une vision complète du développement front-end ! La clé est de **pratiquer régulièrement** en créant des projets concrets. Commence simple et augmente progressivement la complexité. Le front-end évolue rapidement, reste curieux et continue d'apprendre !
:::

## 🎯 Prochaines étapes

1. **Maîtrise les bases** - HTML, CSS, JavaScript vanilla
2. **Crée des projets** - Portfolio, todo app, site vitrine
3. **Apprends un framework** - React, Vue.js ou Angular
4. **Découvre les outils** - Build tools, testing, déploiement
5. **Rejoins la communauté** - Contribue à l'open source

Le voyage ne fait que commencer ! 🚀