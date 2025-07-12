# Guide de déploiement automatique GitHub Pages

Ce guide t'explique comment configurer le déploiement automatique de ton site Docusaurus sur GitHub Pages.

## ✅ Configuration déjà réalisée

Le workflow GitHub Actions (`/.github/workflows/deploy.yml`) a été créé et configuré pour :
- Se déclencher automatiquement à chaque commit sur la branche `main`
- Construire le site avec Docusaurus
- Le déployer sur GitHub Pages

## 🔧 Configuration requise sur GitHub

Pour que le déploiement fonctionne, tu dois configurer quelques paramètres dans ton repository GitHub :

### 1. Activer GitHub Pages

1. Va sur ton repository GitHub : `https://github.com/kevinbdx35/ananas`
2. Clique sur **Settings** (Paramètres)
3. Dans le menu de gauche, clique sur **Pages**
4. Dans la section **Source**, sélectionne **Deploy from a branch**
5. Choisis la branche **gh-pages** et le dossier **/ (root)**

### 2. Vérifier les permissions

1. Toujours dans **Settings** > **Pages**
2. Assure-toi que le **Source** est bien défini sur la branche **gh-pages**
3. Les permissions sont automatiquement gérées par le workflow

### 3. Permissions du repository (si nécessaire)

Si tu rencontres des problèmes de permissions :

1. Va dans **Settings** > **Actions** > **General**
2. Dans **Workflow permissions**, assure-toi que :
   - **Read and write permissions** est sélectionné
   - **Allow GitHub Actions to create and approve pull requests** est coché

## 🚀 Comment ça fonctionne

### Déclenchement automatique

Le déploiement se lance automatiquement quand :
- Tu fais un commit sur la branche `main`
- Tu pousses tes changements sur GitHub

### Processus de déploiement

1. **Build** : GitHub Actions construit ton site Docusaurus
2. **Test** : Vérifie que la construction s'est bien passée
3. **Deploy** : Déploie le site sur GitHub Pages
4. **URL** : Ton site sera disponible sur `https://kevinbdx35.github.io/ananas/`

## 📋 Checklist de vérification

- [ ] Repository sur GitHub avec le code
- [ ] Branche `main` comme branche principale
- [ ] GitHub Pages activé avec source "GitHub Actions"
- [ ] Workflow file présent dans `.github/workflows/deploy.yml`
- [ ] Permissions configurées correctement

## 🔍 Monitoring du déploiement

Pour suivre le déploiement :

1. Va sur ton repository GitHub
2. Clique sur l'onglet **Actions**
3. Tu verras la liste des workflows en cours/terminés
4. Clique sur un workflow pour voir les détails

## 🐛 Dépannage

### Le déploiement échoue

1. Vérifie les logs dans **Actions**
2. Assure-toi que le `package.json` contient les bonnes dépendances
3. Vérifie que `yarn build` fonctionne en local

### Le site n'est pas accessible

1. Attends quelques minutes (propagation DNS)
2. Vérifie l'URL : `https://kevinbdx35.github.io/ananas/`
3. Contrôle les paramètres dans Settings > Pages

### Erreurs de build

1. Teste en local avec `yarn build`
2. Vérifie les liens cassés dans la documentation
3. Assure-toi que toutes les images existent

## 🎉 Test du déploiement

Pour tester que tout fonctionne :

1. Fais une petite modification dans un fichier markdown
2. Commit et push sur la branche `main`
3. Va dans **Actions** pour voir le workflow se lancer
4. Une fois terminé, vérifie ton site sur `https://kevinbdx35.github.io/ananas/`

---

**Note** : Le premier déploiement peut prendre quelques minutes de plus. Les déploiements suivants seront plus rapides.