---
sidebar_position: 2
---

# NPM - Node Package Manager 📦

NPM (Node Package Manager) est l'écosystème de packages JavaScript le plus grand au monde. C'est un outil essentiel pour tout développeur JavaScript qui permet d'installer, gérer et partager des millions de packages open source.

## 🎯 Qu'est-ce que NPM ?

NPM est à la fois :
- **Un registre en ligne** - La plus grande base de données de packages JavaScript
- **Un outil en ligne de commande** - Pour installer et gérer les packages
- **Un gestionnaire de dépendances** - Pour organiser et versionner les packages

### Statistiques impressionnantes
- Plus de **2 millions de packages** disponibles
- Plus de **30 milliards de téléchargements** par mois
- Utilisé par plus de **17 millions de développeurs** dans le monde

## 🚀 Installation et premiers pas

### Vérifier l'installation

```bash
# Vérifier la version de Node.js
node --version
# v18.17.0

# Vérifier la version de NPM
npm --version
# 9.8.1

# Obtenir de l'aide
npm help
npm help install  # Aide spécifique à une commande
```

### Initialiser un projet

```bash
# Créer un nouveau projet avec assistant interactif
npm init

# Créer rapidement avec des valeurs par défaut
npm init -y

# Créer avec un template spécifique
npm init react-app mon-app
npm init vue@latest mon-app
npm init svelte@latest mon-app
```

## 📄 Le fichier package.json

Le `package.json` est le **cœur** de tout projet Node.js. Il contient toutes les informations sur le projet et ses dépendances.

### Structure complète

```json
{
  "name": "mon-projet-awesome",
  "version": "1.2.3",
  "description": "Un projet incroyable qui change le monde",
  "main": "index.js",
  "type": "module",
  "engines": {
    "node": ">=16.0.0",
    "npm": ">=8.0.0"
  },
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "webpack --mode production",
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix",
    "format": "prettier --write src/",
    "prepare": "husky install",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "keywords": [
    "javascript",
    "nodejs",
    "express",
    "api",
    "rest"
  ],
  "author": {
    "name": "Alice Dupont",
    "email": "alice@example.com",
    "url": "https://alice-dev.com"
  },
  "license": "MIT",
  "homepage": "https://github.com/alice/mon-projet#readme",
  "repository": {
    "type": "git",
    "url": "https://github.com/alice/mon-projet.git"
  },
  "bugs": {
    "url": "https://github.com/alice/mon-projet/issues",
    "email": "bugs@example.com"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.5.0",
    "dotenv": "^16.3.1",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.2",
    "cors": "^2.8.5",
    "helmet": "^7.0.0",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.6.4",
    "supertest": "^6.3.3",
    "eslint": "^8.47.0",
    "prettier": "^3.0.2",
    "husky": "^8.0.3",
    "lint-staged": "^14.0.1",
    "@types/node": "^20.5.0"
  },
  "peerDependencies": {
    "react": ">=16.8.0"
  },
  "optionalDependencies": {
    "sharp": "^0.32.5"
  },
  "files": [
    "dist/",
    "lib/",
    "README.md"
  ],
  "config": {
    "port": 3000
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

### Explication des champs importants

| Champ | Description | Exemple |
|-------|-------------|---------|
| `name` | Nom unique du package | `"mon-super-projet"` |
| `version` | Version sémantique | `"1.2.3"` |
| `main` | Point d'entrée principal | `"index.js"` |
| `type` | Type de module (ESM/CommonJS) | `"module"` |
| `scripts` | Commandes personnalisées | `"start": "node app.js"` |
| `dependencies` | Packages nécessaires en production | Express, Mongoose |
| `devDependencies` | Packages nécessaires en développement | Jest, Nodemon |
| `engines` | Versions Node.js/NPM supportées | `"node": ">=16"` |

## 📚 Gestion des dépendances

### Installation de packages

```bash
# Installer un package et l'ajouter aux dependencies
npm install express
npm i express  # Version courte

# Installer plusieurs packages
npm install express mongoose dotenv

# Installer en tant que devDependency
npm install --save-dev nodemon
npm i -D jest eslint prettier  # Version courte

# Installer globalement
npm install -g nodemon typescript create-react-app

# Installer une version spécifique
npm install express@4.18.2
npm install react@">=16.0.0 <17.0.0"

# Installer depuis GitHub
npm install user/repo
npm install user/repo#branch
npm install https://github.com/user/repo.git

# Installer depuis un fichier local
npm install ./mon-package
npm install /chemin/absolu/vers/package

# Installer sans modifier package.json
npm install --no-save express

# Installer seulement les dependencies (pas devDependencies)
npm install --production
npm install --only=prod
```

### Gestion des versions

```bash
# Voir les packages installés
npm list
npm ls  # Version courte
npm ls --depth=0  # Seulement le premier niveau
npm ls --global  # Packages globaux

# Voir les packages obsolètes
npm outdated

# Mettre à jour les packages
npm update
npm update express  # Package spécifique
npm update --save-dev  # Seulement devDependencies

# Mettre à jour vers la dernière version (ignore semver)
npm install express@latest

# Désinstaller un package
npm uninstall express
npm remove express  # Alias
npm rm express     # Alias court
npm un express     # Alias très court

# Désinstaller globalement
npm uninstall -g create-react-app

# Nettoyer les packages non utilisés
npm prune
npm prune --production  # Supprimer devDependencies
```

### Versioning sémantique (SemVer)

```bash
# Format: MAJOR.MINOR.PATCH (1.2.3)

# Symboles de version dans package.json
"express": "4.18.2"     # Version exacte
"express": "~4.18.2"    # >=4.18.2 <4.19.0 (patch updates)
"express": "^4.18.2"    # >=4.18.2 <5.0.0 (minor + patch updates)
"express": ">=4.18.0"   # Supérieur ou égal
"express": "<5.0.0"     # Inférieur strict
"express": "4.x"        # Équivaut à ^4.0.0
"express": "*"          # Dernière version (déconseillé)
"express": "latest"     # Dernière version (déconseillé)

# Plages de versions
"express": ">=4.0.0 <5.0.0"  # Entre 4.x et 5.x (exclu)
"express": "4.18.x"           # Toute version 4.18.x
```

## 🔒 Security et audit

```bash
# Vérifier les vulnérabilités
npm audit

# Corriger automatiquement les vulnérabilités
npm audit fix

# Corriger en forçant les updates (attention !)
npm audit fix --force

# Voir le détail d'une vulnérabilité
npm audit --json

# Ignorer certaines vulnérabilités
# Créer .npmrc
audit-level=high

# Alternative avec yarn audit
# (si yarn est installé)
yarn audit
yarn audit fix
```

## 📝 Scripts NPM

### Scripts de base

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "webpack --mode production",
    "test": "jest",
    "lint": "eslint src/"
  }
}
```

```bash
# Exécuter les scripts
npm start
npm run dev
npm test
npm run build

# Passer des arguments aux scripts
npm test -- --watch
npm run lint -- --fix

# Voir tous les scripts disponibles
npm run
```

### Scripts avancés

```json
{
  "scripts": {
    // Scripts avec variables d'environnement
    "dev": "NODE_ENV=development nodemon server.js",
    "prod": "NODE_ENV=production node server.js",
    
    // Scripts composés
    "build": "npm run clean && npm run compile",
    "clean": "rm -rf dist/",
    "compile": "babel src -d dist",
    
    // Scripts parallèles (avec npm-run-all)
    "dev:all": "npm-run-all --parallel dev:server dev:client",
    "dev:server": "nodemon server.js",
    "dev:client": "vite",
    
    // Scripts avec conditions
    "postinstall": "npm run build",
    "pretest": "npm run lint",
    "posttest": "npm run coverage",
    
    // Scripts cross-platform
    "clean:win": "if exist dist rmdir /s dist",
    "clean:unix": "rm -rf dist",
    "clean": "npm run clean:unix || npm run clean:win",
    
    // Scripts avec outils
    "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,md}\"",
    "format:check": "prettier --check \"src/**/*.{js,jsx,ts,tsx,json,css,md}\"",
    "type-check": "tsc --noEmit",
    "validate": "npm run type-check && npm run lint && npm test"
  }
}
```

### Hooks de cycle de vie

```json
{
  "scripts": {
    // Hooks automatiques
    "preinstall": "echo 'Avant installation'",
    "postinstall": "echo 'Après installation'",
    "prepublish": "npm run build",
    "postpublish": "npm run deploy",
    
    // Hooks personnalisés
    "prestart": "npm run build",
    "poststart": "echo 'Serveur démarré'",
    "pretest": "npm run lint",
    "posttest": "npm run coverage"
  }
}
```

## 🔧 Configuration NPM

### Fichier .npmrc

```bash
# .npmrc global (~/.npmrc)
registry=https://registry.npmjs.org/
save-exact=true
engine-strict=true
fund=false
audit-level=high
progress=false

# Configuration spécifique au projet (.npmrc dans le projet)
@mycompany:registry=https://npm.mycompany.com/
save-prefix=~
auto-install-peers=true
```

### Variables d'environnement

```bash
# Variables NPM
NPM_CONFIG_REGISTRY=https://registry.npmjs.org/
NPM_CONFIG_CACHE=/tmp/npm-cache
NPM_CONFIG_PREFIX=/usr/local

# Dans package.json
{
  "config": {
    "port": 3000,
    "host": "localhost"
  }
}

# Accès dans les scripts
"start": "node server.js --port $npm_package_config_port"
```

## 📊 NPM avancé

### Cache NPM

```bash
# Voir le cache
npm cache ls

# Nettoyer le cache
npm cache clean --force

# Vérifier l'intégrité du cache
npm cache verify

# Changer l'emplacement du cache
npm config set cache /new/cache/path
```

### Liens locaux (npm link)

```bash
# Dans le package à lier
cd mon-package
npm link

# Dans le projet qui utilise le package
cd mon-projet
npm link mon-package

# Délier
npm unlink mon-package
```

### Workspaces (monorepo)

```json
// package.json racine
{
  "name": "mon-monorepo",
  "workspaces": [
    "packages/*",
    "apps/*"
  ],
  "scripts": {
    "build:all": "npm run build --workspaces",
    "test:all": "npm test --workspaces"
  }
}
```

```bash
# Installer dans tous les workspaces
npm install --workspaces

# Installer dans un workspace spécifique
npm install lodash --workspace=packages/utils

# Exécuter un script dans tous les workspaces
npm run build --workspaces

# Exécuter dans un workspace spécifique
npm run test --workspace=packages/core
```

## 🚀 Publication de packages

### Préparer la publication

```bash
# Se connecter à NPM
npm login

# Vérifier qui est connecté
npm whoami

# Tester le package avant publication
npm pack

# Voir ce qui sera publié
npm publish --dry-run
```

### Publier un package

```bash
# Publication normale
npm publish

# Publication avec tag
npm publish --tag beta
npm publish --tag latest

# Publication avec accès restreint
npm publish --access restricted
npm publish --access public
```

### Gestion des versions

```bash
# Incrémenter la version automatiquement
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.1 -> 1.1.0
npm version major  # 1.1.0 -> 2.0.0

# Version préreleases
npm version prerelease  # 1.0.0 -> 1.0.1-0
npm version prepatch    # 1.0.0 -> 1.0.1-0
npm version preminor    # 1.0.0 -> 1.1.0-0
npm version premajor    # 1.0.0 -> 2.0.0-0

# Version avec identifiant
npm version prerelease --preid=alpha  # 1.0.0 -> 1.0.1-alpha.0
npm version prerelease --preid=beta   # 1.0.1-alpha.0 -> 1.0.1-beta.0
```

## 🔍 Alternatives à NPM

### Yarn

```bash
# Installation
npm install -g yarn

# Commandes équivalentes
yarn                    # npm install
yarn add express        # npm install express
yarn add -D jest        # npm install --save-dev jest
yarn remove express     # npm uninstall express
yarn upgrade            # npm update

# Avantages de Yarn
# - Plus rapide (cache offline)
# - yarn.lock plus déterministe
# - Workspaces natifs
# - Meilleure gestion des versions
```

### pnpm

```bash
# Installation
npm install -g pnpm

# Commandes équivalentes
pnpm install           # npm install
pnpm add express       # npm install express
pnpm remove express    # npm uninstall express

# Avantages de pnpm
# - Économise l'espace disque (liens symboliques)
# - Plus rapide que npm et yarn
# - Meilleure gestion des peer dependencies
# - Compatible avec npm
```

## 🎯 Bonnes pratiques

### Structure de projet

```
mon-projet/
├── package.json
├── package-lock.json
├── .npmrc
├── .npmignore
├── README.md
├── LICENSE
├── src/
│   ├── index.js
│   ├── lib/
│   └── utils/
├── test/
│   ├── unit/
│   └── integration/
├── docs/
├── examples/
└── scripts/
    ├── build.js
    └── deploy.js
```

### Fichier .npmignore

```bash
# .npmignore
src/
test/
docs/
examples/
.env*
.git*
*.log
node_modules/
coverage/
.nyc_output/
.cache/
dist/dev/
*.test.js
*.spec.js
```

### Scripts de qualité

```json
{
  "scripts": {
    // Linting et formatting
    "lint": "eslint src/ test/",
    "lint:fix": "eslint src/ test/ --fix",
    "format": "prettier --write \"**/*.{js,json,md}\"",
    "format:check": "prettier --check \"**/*.{js,json,md}\"",
    
    // Tests
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:ci": "jest --ci --coverage --watchAll=false",
    
    // Validation
    "validate": "npm run lint && npm run format:check && npm test",
    "ci": "npm ci && npm run validate",
    
    // Hooks Git
    "pre-commit": "lint-staged",
    "pre-push": "npm run validate"
  }
}
```

## 🛠️ Outils utiles

### Packages de développement essentiels

```bash
# Outils de développement
npm install -D nodemon          # Redémarrage automatique
npm install -D concurrently     # Exécution parallèle
npm install -D cross-env        # Variables env cross-platform
npm install -D rimraf           # Suppression cross-platform
npm install -D npm-run-all      # Orchestration de scripts

# Qualité de code
npm install -D eslint           # Linting JavaScript
npm install -D prettier         # Formatting de code
npm install -D husky            # Hooks Git
npm install -D lint-staged      # Lint sur fichiers staged

# Tests
npm install -D jest             # Framework de test
npm install -D supertest        # Tests HTTP
npm install -D nyc              # Coverage de code

# Build et bundling
npm install -D webpack          # Module bundler
npm install -D babel            # Transpiler JavaScript
npm install -D typescript       # Typage statique
```

### Packages production populaires

```bash
# Serveur web
npm install express             # Framework web
npm install fastify             # Alternative rapide à Express
npm install koa                 # Framework moderne

# Base de données
npm install mongoose            # MongoDB ODM
npm install prisma              # ORM moderne
npm install sequelize           # ORM SQL

# Authentification
npm install passport            # Stratégies d'auth
npm install jsonwebtoken        # JWT
npm install bcryptjs            # Hash de mots de passe

# Utilitaires
npm install lodash              # Utilitaires JavaScript
npm install moment              # Manipulation de dates
npm install axios               # Client HTTP
npm install dotenv              # Variables d'environnement
```

## 🐛 Dépannage courant

### Problèmes fréquents

```bash
# Erreur EACCES (permissions)
sudo chown -R $(whoami) ~/.npm
npm config set prefix ~/.npm-global

# Erreur MODULE_NOT_FOUND
npm install
npm ci  # Si package-lock.json existe

# Cache corrompu
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Version Node.js incompatible
nvm use 16  # Avec nvm
n 16       # Avec n

# Proxy d'entreprise
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080

# Registre privé
npm config set registry https://npm.mycompany.com/
npm login --registry=https://npm.mycompany.com/
```

### Commandes de diagnostic

```bash
# Informations système
npm doctor

# Configuration actuelle
npm config list
npm config list -l  # Configuration complète

# Chemins importants
npm config get prefix
npm config get cache
npm root -g

# Logs détaillés
npm install --loglevel verbose
npm install --loglevel silly
```

## 🎯 Exercices pratiques

### Exercice 1 : Créer un package utilitaire

Crée un package NPM qui contient des utilitaires JavaScript :

```javascript
// src/index.js
export function formatDate(date, locale = 'fr-FR') {
  return new Intl.DateTimeFormat(locale).format(date);
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function debounce(func, wait) {
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
```

**Objectifs :**
- Configurer package.json correctement
- Ajouter des tests avec Jest
- Configurer ESLint et Prettier
- Publier sur NPM (ou registre privé)

### Exercice 2 : Script de build complexe

Crée un script de build qui :
- Nettoie le dossier dist/
- Transpile le code avec Babel
- Minifie le JavaScript
- Génère la documentation
- Créé un package prêt pour la production

### Exercice 3 : Workspace monorepo

Configure un monorepo avec :
- Un package partagé (utils)
- Une API (backend)
- Une application web (frontend)
- Scripts pour build/test/deploy l'ensemble

---

:::success Félicitations ! 🎉
Tu maîtrises maintenant NPM ! C'est un outil **essentiel** dans l'écosystème JavaScript. Continue à explorer les packages disponibles et n'hésite pas à créer tes propres packages pour partager ton code avec la communauté.
:::

## 🔗 Ressources utiles

- 📖 [Documentation officielle NPM](https://docs.npmjs.com/)
- 🔍 [Recherche de packages](https://www.npmjs.com/)
- 📊 [NPM Trends](https://www.npmtrends.com/) - Comparer la popularité des packages
- 🔒 [NPM Security](https://docs.npmjs.com/security/) - Bonnes pratiques sécurité
- 🛠️ [Awesome NPM](https://github.com/sindresorhus/awesome-npm) - Liste de ressources
- 📱 [NPM Desktop](https://desktop.npmjs.com/) - Interface graphique

NPM est bien plus qu'un simple gestionnaire de packages - c'est l'épine dorsale de l'écosystème JavaScript moderne ! 🚀



