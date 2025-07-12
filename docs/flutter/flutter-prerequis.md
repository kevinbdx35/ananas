---
sidebar_position: 2
---

# Flutter - Prérequis et Installation 🛠️

Avant de plonger dans le développement Flutter, il est essentiel de bien préparer ton environnement de développement. Cette étape déterminera ta productivité et la qualité de ton expérience de développement.

## 🎯 Vue d'ensemble des prérequis

Flutter est un framework de développement mobile qui permet de créer des applications **natives** pour iOS et Android avec un **seul code source**. Pour développer efficacement, tu auras besoin :

- 💻 **Un environnement de développement** - IDE configuré pour Flutter
- 📱 **Un moyen de tester** - Émulateur ou device physique  
- 🔧 **Les SDK nécessaires** - Flutter, Android, et optionnellement iOS
- ⚡ **Une configuration optimisée** - Pour des performances maximales

## 💻 Choix de l'IDE

### Android Studio (Recommandé) ⭐

[**Android Studio**](https://developer.android.com/studio/) reste le choix de référence pour Flutter :

**Avantages :**
- ✅ **Support officiel Flutter** - Plugins intégrés
- ✅ **Outils Android intégrés** - SDK Manager, AVD Manager
- ✅ **Débogage avancé** - Layout Inspector, Memory Profiler
- ✅ **Émulateurs performants** - AVD avec accélération matérielle
- ✅ **Autocomplétion intelligente** - Code insight et refactoring

**Configuration recommandée :**
```bash
# Plugins essentiels à installer
- Flutter
- Dart
- Flutter Inspector
- Flutter Intl (pour l'internationalisation)
- Rainbow Brackets (lisibilité)
```

### Alternatives populaires

#### Visual Studio Code
```bash
# Extensions essentielles
- Flutter
- Dart
- Flutter Widget Snippets
- Bracket Pair Colorizer
- GitLens

# Configuration settings.json
{
  "dart.flutterSdkPath": "/path/to/flutter",
  "dart.openDevTools": "flutter",
  "dart.debugExternalLibraries": false,
  "dart.debugSdkLibraries": false
}
```

#### IntelliJ IDEA
- Excellent pour le développement professionnel
- Support multiplateforme intégré
- Outils de refactoring avancés

## 📱 Stratégies de test

### Émulateurs vs Devices physiques

| Aspect | Émulateur | Device physique |
|--------|-----------|-----------------|
| **Performance** | Convenable | Native |
| **Tests réseau** | Limité | Réel |
| **Sensors** | Simulés | Réels |
| **Coût** | Gratuit | Achat device |
| **Portabilité** | Maximum | Transport requis |

### Configuration pour Android

**Prérequis système :**
- Mac ou PC (Windows/Linux)
- 8 GB RAM minimum (16 GB recommandé)
- 50 GB d'espace disque libre
- Android Studio
- Émulateur Android ou device physique

**Setup émulateur Android :**
```bash
# Créer un AVD (Android Virtual Device)
# Dans Android Studio : Tools > AVD Manager > Create Virtual Device

# Recommandations émulateur :
- Device: Pixel 6 ou Pixel 7
- API Level: 33 (Android 13) ou plus récent
- ABI: x86_64 (pour performance)
- RAM: 4 GB minimum
- Storage: 8 GB minimum
```

### Configuration pour iOS

**Prérequis strictement Mac :**
- macOS 12.0 ou plus récent
- Xcode 14.0 ou plus récent
- iOS Simulator intégré
- Compte développeur Apple (pour device physique)

**Limitations importantes :**
- ⚠️ **Development iOS impossible sur PC/Linux**
- 💰 **Compte développeur Apple requis** (99$/an) pour tester sur device physique
- 🔒 **Signature de code obligatoire** pour distribution

## 🚀 Installation détaillée

### Étape 1 : Flutter SDK

#### Installation sur macOS
```bash
# Option 1 : Téléchargement direct
curl -O https://storage.googleapis.com/flutter_infra_release/releases/stable/macos/flutter_macos_3.16.5-stable.zip
unzip flutter_macos_3.16.5-stable.zip
sudo mv flutter /usr/local/

# Option 2 : Avec Homebrew (recommandé)
brew install flutter

# Configurer PATH
echo 'export PATH="$PATH:/usr/local/flutter/bin"' >> ~/.zshrc
source ~/.zshrc
```

#### Installation sur Windows
```bash
# Télécharger Flutter SDK depuis https://docs.flutter.dev/get-started/install/windows
# Extraire dans C:\flutter
# Ajouter C:\flutter\bin au PATH système

# Vérification
flutter --version
```

#### Installation sur Linux
```bash
# Télécharger et extraire Flutter
wget https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.16.5-stable.tar.xz
tar xf flutter_linux_3.16.5-stable.tar.xz
sudo mv flutter /opt/

# Configurer PATH
echo 'export PATH="$PATH:/opt/flutter/bin"' >> ~/.bashrc
source ~/.bashrc
```

### Étape 2 : Android Studio et SDK

```bash
# 1. Télécharger Android Studio
# https://developer.android.com/studio/

# 2. Installer les composants SDK nécessaires
# SDK Tools à installer via SDK Manager :
- Android SDK Build-Tools
- Android SDK Command-line Tools
- Android Emulator
- Android SDK Platform-Tools
- Google USB Driver (Windows)

# 3. Configurer variables d'environnement
export ANDROID_HOME=$HOME/Android/Sdk  # Linux/Mac
export ANDROID_HOME=%LOCALAPPDATA%\Android\Sdk  # Windows

export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Étape 3 : Configuration iOS (Mac uniquement)

```bash
# 1. Installer Xcode depuis Mac App Store
# 2. Installer Xcode Command Line Tools
sudo xcode-select --install

# 3. Accepter les licences
sudo xcodebuild -license accept

# 4. Installer CocoaPods (gestionnaire de dépendances iOS)
sudo gem install cocoapods
pod setup

# 5. Configurer le simulateur iOS
open -a Simulator
```

### Étape 4 : Vérification de l'installation

```bash
# Diagnostic complet de l'installation
flutter doctor

# Résultat attendu :
✓ Flutter (Channel stable, 3.16.5)
✓ Android toolchain - develop for Android devices
✓ Xcode - develop for iOS and macOS  # Mac uniquement
✓ Chrome - develop for the web
✓ Android Studio
✓ VS Code
✓ Connected device
```

**Résolution des problèmes courants :**
```bash
# Problème licences Android
flutter doctor --android-licenses

# Réinstaller Flutter Doctor
flutter doctor -v

# Nettoyer le cache Flutter
flutter clean
flutter pub get
```

## ⚡ Optimisation de l'environnement

### Configuration IDE optimisée

#### Android Studio
```bash
# Dans Android Studio > Preferences :

# 1. Augmenter la mémoire heap
Help > Edit Custom VM Options
-Xms2048m
-Xmx8192m

# 2. Activer le mode développeur
Appearance > System Settings > Android SDK > Enable Developer mode

# 3. Configurer l'émulateur
Tools > AVD Manager > Advanced Settings
- RAM: 4 GB
- VM Heap: 512 MB
- Graphics: Hardware - GLES 2.0
```

#### Performance du développement
```bash
# Activer hot reload avancé
flutter config --enable-web  # Support web
flutter config --enable-windows-desktop  # Support desktop

# Optimiser les builds
flutter build apk --split-per-abi  # APK optimisé par architecture
flutter build appbundle  # Format recommandé pour Play Store
```

### Workflow de développement efficace

```bash
# Commandes essentielles à connaître
flutter create mon_app          # Créer nouveau projet
flutter run                     # Lancer en mode debug
flutter run --release          # Lancer en mode release
flutter hot-reload             # R pour recharger
flutter hot-restart            # Ctrl+C puis flutter run

# Debugging
flutter analyze                # Analyse statique du code
flutter test                   # Exécuter les tests
flutter logs                   # Voir les logs
```

## 🛠️ Outils de développement avancés

### DevTools Flutter
```bash
# Lancer Flutter DevTools
flutter pub global activate devtools
flutter pub global run devtools

# Fonctionnalités clés :
- Widget Inspector (structure des widgets)
- Timeline View (performance)
- Memory View (gestion mémoire)
- Debugger (points d'arrêt)
- Network View (requêtes réseau)
```

### Extensions et plugins utiles

#### Packages de développement
```yaml
# pubspec.yaml - Dépendances de développement
dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0      # Linting Dart/Flutter
  build_runner: ^2.3.3       # Génération de code
  json_serializable: ^6.6.2  # Sérialisation JSON
  mockito: ^5.4.0            # Mocking pour tests
```

#### Outils CI/CD

**Codemagic (Recommandé)**
```yaml
# codemagic.yaml
workflows:
  flutter-workflow:
    environment:
      flutter: stable
    scripts:
      - flutter test
      - flutter build apk --release
      - flutter build ios --release --no-codesign
```

**GitHub Actions**
```yaml
# .github/workflows/flutter.yml
name: Flutter CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.16.5'
      - run: flutter test
```

## 📋 Checklist de préparation

### ✅ Installation complète
- [ ] Flutter SDK installé et dans le PATH
- [ ] Android Studio configuré avec plugins Flutter/Dart
- [ ] Android SDK et Build Tools installés
- [ ] Émulateur Android créé et fonctionnel
- [ ] Xcode installé (Mac) avec simulateur iOS
- [ ] `flutter doctor` sans erreurs critiques

### ✅ Environnement optimisé
- [ ] IDE configuré avec thème et raccourcis
- [ ] Git configuré pour versioning
- [ ] DevTools Flutter activé
- [ ] Extensions/plugins de productivité installés
- [ ] Workflow de build configuré

### ✅ Test de l'environnement
- [ ] Création d'un projet test réussie
- [ ] Build Android APK réussi
- [ ] Build iOS réussi (Mac uniquement)
- [ ] Hot reload fonctionnel
- [ ] Débogage opérationnel

## 🚀 Projets d'entraînement

### Projet 1 : Hello Flutter
```dart
// Créer une app simple pour tester l'environnement
flutter create hello_flutter
cd hello_flutter
flutter run
```

### Projet 2 : Multi-platform
```dart
// Tester sur plusieurs plateformes
flutter run -d android     # Android
flutter run -d ios         # iOS (Mac uniquement)
flutter run -d chrome      # Web
flutter run -d macos       # Desktop Mac
```

---

:::success Installation Réussie ! 🎉
Ton environnement Flutter est maintenant configuré et optimisé ! Tu es prêt à créer des applications mobiles **performantes** et **multiplateformes**. Cette base solide te permettra de développer efficacement et de résoudre rapidement les problèmes techniques.
:::

## 🔗 Ressources essentielles

- 📖 [Documentation Flutter officielle](https://docs.flutter.dev/)
- 🎯 [Flutter Codelabs](https://codelabs.developers.google.com/codelabs/first-flutter-app-pt1)
- 💻 [Exemples de code Flutter](https://github.com/flutter/samples)
- 🔧 [Flutter DevTools](https://docs.flutter.dev/development/tools/devtools/overview)
- 🚀 [Codemagic CI/CD](https://codemagic.io/start/)
- 📱 [Material Design Guidelines](https://material.io/design)

Un environnement bien configuré est la **fondation** de tout développement réussi ! 🏗️

