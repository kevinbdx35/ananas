---
sidebar_position: 1
---

# Python 🐍

Python est un langage de programmation polyvalent, simple à apprendre et très puissant. Il est parfait pour débuter la programmation tout en étant utilisé par les plus grandes entreprises technologiques du monde.

## 🎯 Pourquoi apprendre Python ?

### Simplicité et lisibilité

Python privilégie la **lisibilité** du code. Sa syntaxe claire et intuitive permet de se concentrer sur la logique plutôt que sur les détails techniques complexes.

```python
# Python vs autres langages - comparaison "Hello World"

# Python (3 caractères de ponctuation)
print("Hello World!")

# Java (47 caractères de ponctuation)
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

### Polyvalence exceptionnelle

Python est utilisé dans de nombreux domaines :

- 🌐 **Développement web** (Django, Flask, FastAPI)
- 🤖 **Intelligence artificielle** et Machine Learning (TensorFlow, PyTorch)
- 📊 **Analyse de données** (Pandas, NumPy, Matplotlib)
- 🔬 **Sciences et recherche** (SciPy, Jupyter)
- 🎮 **Développement de jeux** (Pygame)
- 🛠️ **Automatisation** et scripts
- 📱 **Applications desktop** (Tkinter, PyQt)

### Écosystème riche

Avec plus de **400 000 packages** disponibles sur PyPI (Python Package Index), Python dispose d'une bibliothèque pour pratiquement tout ce que tu veux faire.

## 🚀 Installation et configuration

### Installation de Python

#### Sur Windows 🪟

1. Va sur [python.org](https://python.org/downloads/)
2. Télécharge la dernière version de Python 3
3. Lance l'installateur et **coche "Add Python to PATH"**
4. Clique sur "Install Now"

#### Sur macOS 🍎

```bash
# Avec Homebrew (recommandé)
brew install python

# Ou télécharge directement depuis python.org
```

#### Sur Linux 🐧

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install python3 python3-pip

# CentOS/RHEL
sudo yum install python3 python3-pip

# Arch Linux
sudo pacman -S python python-pip
```

### Vérification de l'installation

```bash
# Vérifier la version de Python
python --version
# ou
python3 --version

# Vérifier pip (gestionnaire de packages)
pip --version
# ou
pip3 --version
```

## 🎓 Les bases de Python

### Variables et types de données

```python
# Nombres
age = 25                    # int (entier)
prix = 19.99               # float (décimal)
complexe = 3 + 4j          # complex (nombre complexe)

# Texte
nom = "Alice"              # str (chaîne de caractères)
message = 'Bonjour!'       # Les guillemets simples ou doubles fonctionnent

# Booléens
actif = True               # bool (Vrai)
termine = False            # bool (Faux)

# Collections
fruits = ["pomme", "banane", "orange"]    # list (liste)
coordonnees = (10, 20)                    # tuple (tuple)
utilisateur = {"nom": "Bob", "age": 30}   # dict (dictionnaire)
nombres_uniques = {1, 2, 3, 4, 5}        # set (ensemble)
```

### Opérations de base

```python
# Opérations arithmétiques
addition = 5 + 3        # 8
soustraction = 10 - 4   # 6
multiplication = 6 * 7  # 42
division = 15 / 3       # 5.0 (toujours un float)
division_entiere = 15 // 4  # 3 (division entière)
modulo = 17 % 5         # 2 (reste de la division)
puissance = 2 ** 3      # 8 (2 puissance 3)

# Opérations sur les chaînes
prenom = "Alice"
nom = "Dupont"
nom_complet = prenom + " " + nom  # "Alice Dupont"
repetition = "Ha" * 3            # "HaHaHa"
```

### Structures de contrôle

#### Conditions

```python
age = 18

if age >= 18:
    print("Tu es majeur")
elif age >= 16:
    print("Tu peux conduire")
else:
    print("Tu es mineur")

# Opérateurs de comparaison
# == (égal), != (différent), < (plus petit), > (plus grand)
# <= (plus petit ou égal), >= (plus grand ou égal)

# Opérateurs logiques
if age >= 18 and age < 65:
    print("En âge de travailler")

if age < 13 or age > 65:
    print("Tarif réduit")
```

#### Boucles

```python
# Boucle for - répéter un nombre défini de fois
for i in range(5):
    print(f"Compteur: {i}")

# Boucle sur une liste
fruits = ["pomme", "banane", "orange"]
for fruit in fruits:
    print(f"J'aime les {fruit}s")

# Boucle while - répéter tant qu'une condition est vraie
compteur = 0
while compteur < 3:
    print(f"Tour {compteur}")
    compteur += 1

# Break et continue
for i in range(10):
    if i == 3:
        continue  # Passe au tour suivant
    if i == 7:
        break     # Sort de la boucle
    print(i)
```

### Fonctions

```python
# Définir une fonction
def saluer(nom):
    return f"Bonjour {nom}!"

# Utiliser la fonction
message = saluer("Alice")
print(message)  # Bonjour Alice!

# Fonction avec plusieurs paramètres
def calculer_aire_rectangle(longueur, largeur):
    aire = longueur * largeur
    return aire

# Fonction avec paramètres par défaut
def saluer_personne(nom, titre="M./Mme"):
    return f"Bonjour {titre} {nom}"

print(saluer_personne("Dupont"))              # Bonjour M./Mme Dupont
print(saluer_personne("Martin", "Dr"))        # Bonjour Dr Martin

# Fonction avec nombre variable de paramètres
def additionner(*nombres):
    total = 0
    for nombre in nombres:
        total += nombre
    return total

print(additionner(1, 2, 3, 4, 5))  # 15
```

## 📚 Structures de données essentielles

### Listes

```python
# Créer une liste
nombres = [1, 2, 3, 4, 5]
vide = []

# Ajouter des éléments
nombres.append(6)           # Ajoute à la fin
nombres.insert(0, 0)        # Insère à l'index 0

# Accéder aux éléments
premier = nombres[0]        # Premier élément
dernier = nombres[-1]       # Dernier élément
sous_liste = nombres[1:4]   # Éléments de l'index 1 à 3

# Opérations utiles
taille = len(nombres)       # Taille de la liste
nombres.remove(3)           # Supprime la première occurrence de 3
element = nombres.pop()     # Retire et retourne le dernier élément

# Parcourir une liste
for i, nombre in enumerate(nombres):
    print(f"Index {i}: {nombre}")
```

### Dictionnaires

```python
# Créer un dictionnaire
personne = {
    "nom": "Dupont",
    "prenom": "Alice",
    "age": 25,
    "ville": "Paris"
}

# Accéder aux valeurs
nom = personne["nom"]           # "Dupont"
age = personne.get("age", 0)    # 25, ou 0 si la clé n'existe pas

# Modifier/ajouter
personne["age"] = 26            # Modifie
personne["profession"] = "Dev"  # Ajoute

# Parcourir un dictionnaire
for cle, valeur in personne.items():
    print(f"{cle}: {valeur}")

# Opérations utiles
cles = list(personne.keys())       # Liste des clés
valeurs = list(personne.values())  # Liste des valeurs
```

## 🛠️ Gestion des erreurs

```python
# Try/except pour gérer les erreurs
try:
    nombre = int(input("Entre un nombre: "))
    resultat = 10 / nombre
    print(f"10 / {nombre} = {resultat}")
except ValueError:
    print("Ce n'est pas un nombre valide!")
except ZeroDivisionError:
    print("Impossible de diviser par zéro!")
except Exception as e:
    print(f"Une erreur inattendue s'est produite: {e}")
finally:
    print("Cette ligne s'exécute toujours")
```

## 📁 Travail avec les fichiers

```python
# Écrire dans un fichier
with open("mon_fichier.txt", "w") as fichier:
    fichier.write("Bonjour le monde!\n")
    fichier.write("Python est génial!")

# Lire un fichier
with open("mon_fichier.txt", "r") as fichier:
    contenu = fichier.read()
    print(contenu)

# Lire ligne par ligne
with open("mon_fichier.txt", "r") as fichier:
    for ligne in fichier:
        print(ligne.strip())  # strip() enlève les retours à la ligne

# Gérer les erreurs de fichier
try:
    with open("fichier_inexistant.txt", "r") as f:
        contenu = f.read()
except FileNotFoundError:
    print("Le fichier n'existe pas!")
```

## 🎯 Exercices pratiques

### Exercice 1 : Calculatrice simple

```python
def calculatrice():
    """
    Crée une calculatrice simple avec les 4 opérations de base
    """
    print("=== CALCULATRICE PYTHON ===")
    
    while True:
        try:
            num1 = float(input("Premier nombre: "))
            operation = input("Opération (+, -, *, /) ou 'q' pour quitter: ")
            
            if operation == 'q':
                break
                
            num2 = float(input("Deuxième nombre: "))
            
            if operation == '+':
                resultat = num1 + num2
            elif operation == '-':
                resultat = num1 - num2
            elif operation == '*':
                resultat = num1 * num2
            elif operation == '/':
                if num2 != 0:
                    resultat = num1 / num2
                else:
                    print("Erreur: Division par zéro!")
                    continue
            else:
                print("Opération non reconnue!")
                continue
                
            print(f"Résultat: {num1} {operation} {num2} = {resultat}")
            
        except ValueError:
            print("Erreur: Veuillez entrer des nombres valides!")

# calculatrice()  # Décommente pour tester
```

### Exercice 2 : Gestionnaire de tâches

```python
def gestionnaire_taches():
    """
    Un simple gestionnaire de tâches en ligne de commande
    """
    taches = []
    
    while True:
        print(f"\n=== GESTIONNAIRE DE TÂCHES ({len(taches)} tâches) ===")
        print("1. Voir les tâches")
        print("2. Ajouter une tâche")
        print("3. Marquer comme terminée")
        print("4. Supprimer une tâche")
        print("5. Quitter")
        
        choix = input("Votre choix: ")
        
        if choix == "1":
            if not taches:
                print("Aucune tâche pour le moment.")
            else:
                for i, tache in enumerate(taches, 1):
                    statut = "✓" if tache["terminee"] else "○"
                    print(f"{i}. {statut} {tache['description']}")
                    
        elif choix == "2":
            description = input("Description de la tâche: ")
            taches.append({"description": description, "terminee": False})
            print("Tâche ajoutée!")
            
        elif choix == "3":
            try:
                numero = int(input("Numéro de la tâche à terminer: ")) - 1
                if 0 <= numero < len(taches):
                    taches[numero]["terminee"] = True
                    print("Tâche marquée comme terminée!")
                else:
                    print("Numéro de tâche invalide!")
            except ValueError:
                print("Veuillez entrer un numéro valide!")
                
        elif choix == "4":
            try:
                numero = int(input("Numéro de la tâche à supprimer: ")) - 1
                if 0 <= numero < len(taches):
                    tache_supprimee = taches.pop(numero)
                    print(f"Tâche '{tache_supprimee['description']}' supprimée!")
                else:
                    print("Numéro de tâche invalide!")
            except ValueError:
                print("Veuillez entrer un numéro valide!")
                
        elif choix == "5":
            print("Au revoir!")
            break
            
        else:
            print("Choix invalide!")

# gestionnaire_taches()  # Décommente pour tester
```

### Exercice 3 : Analyseur de texte

```python
def analyser_texte(texte):
    """
    Analyse un texte et retourne des statistiques
    """
    # Statistiques de base
    nb_caracteres = len(texte)
    nb_caracteres_sans_espaces = len(texte.replace(" ", ""))
    nb_mots = len(texte.split())
    nb_lignes = len(texte.split("\n"))
    
    # Compter les voyelles
    voyelles = "aeiouAEIOU"
    nb_voyelles = sum(1 for char in texte if char in voyelles)
    
    # Mots les plus fréquents
    mots = texte.lower().split()
    frequence_mots = {}
    for mot in mots:
        # Nettoyer la ponctuation
        mot_propre = ''.join(char for char in mot if char.isalnum())
        if mot_propre:
            frequence_mots[mot_propre] = frequence_mots.get(mot_propre, 0) + 1
    
    # Trier par fréquence
    mots_tries = sorted(frequence_mots.items(), key=lambda x: x[1], reverse=True)
    
    print("=== ANALYSE DU TEXTE ===")
    print(f"Caractères (total): {nb_caracteres}")
    print(f"Caractères (sans espaces): {nb_caracteres_sans_espaces}")
    print(f"Mots: {nb_mots}")
    print(f"Lignes: {nb_lignes}")
    print(f"Voyelles: {nb_voyelles}")
    print("\nMots les plus fréquents:")
    for mot, freq in mots_tries[:5]:  # Top 5
        print(f"  {mot}: {freq} fois")

# Exemple d'utilisation
texte_exemple = """
Python est un langage de programmation interprété, multi-paradigme et 
multiplateformes. Il favorise la programmation impérative structurée, 
fonctionnelle et orientée objet. Python est un langage puissant et facile à apprendre.
"""

# analyser_texte(texte_exemple)  # Décommente pour tester
```

## 🌟 Bonnes pratiques

### Convention de nommage (PEP 8)

```python
# Variables et fonctions : snake_case
nom_utilisateur = "Alice"
def calculer_moyenne(notes):
    pass

# Constantes : MAJUSCULES
PI = 3.14159
COULEUR_ROUGE = "#FF0000"

# Classes : PascalCase
class GestionnaireFichier:
    pass

# Modules et packages : minuscules
import math
import mon_module
```

### Documentation du code

```python
def calculer_imc(poids, taille):
    """
    Calcule l'Indice de Masse Corporelle (IMC)
    
    Args:
        poids (float): Poids en kilogrammes
        taille (float): Taille en mètres
        
    Returns:
        float: IMC calculé
        
    Raises:
        ValueError: Si le poids ou la taille sont négatifs ou nuls
    """
    if poids <= 0 or taille <= 0:
        raise ValueError("Le poids et la taille doivent être positifs")
    
    return poids / (taille ** 2)
```

## 📦 Packages essentiels à connaître

### Pour débuter

```bash
# Installer un package avec pip
pip install requests numpy pandas matplotlib

# Créer un fichier requirements.txt
pip freeze > requirements.txt

# Installer depuis requirements.txt
pip install -r requirements.txt
```

### Exemples d'utilisation

```python
# Requests - pour les requêtes HTTP
import requests

response = requests.get("https://api.github.com/users/octocat")
data = response.json()
print(data["name"])

# NumPy - pour les calculs numériques
import numpy as np

tableau = np.array([1, 2, 3, 4, 5])
moyenne = np.mean(tableau)
print(f"Moyenne: {moyenne}")

# Pandas - pour l'analyse de données
import pandas as pd

# Créer un DataFrame
data = {
    "nom": ["Alice", "Bob", "Charlie"],
    "age": [25, 30, 35],
    "ville": ["Paris", "Lyon", "Marseille"]
}
df = pd.DataFrame(data)
print(df)
```

## 🎯 Défis pour progresser

### Défi 1 : Deviner le nombre
Crée un jeu où l'ordinateur choisit un nombre aléatoire et l'utilisateur doit le deviner.

### Défi 2 : Convertisseur d'unités
Crée un programme qui convertit entre différentes unités (température, distance, poids).

### Défi 3 : Générateur de mots de passe
Crée un générateur de mots de passe sécurisés avec options de personnalisation.

### Défi 4 : Mini-jeu du pendu
Implémente le jeu du pendu avec une liste de mots prédéfinis.

## 🚀 Pour aller plus loin

### Programmation orientée objet

```python
class Voiture:
    def __init__(self, marque, modele, annee):
        self.marque = marque
        self.modele = modele
        self.annee = annee
        self.vitesse = 0
    
    def accelerer(self, increment=10):
        self.vitesse += increment
        print(f"Vitesse: {self.vitesse} km/h")
    
    def freiner(self, decrement=10):
        self.vitesse = max(0, self.vitesse - decrement)
        print(f"Vitesse: {self.vitesse} km/h")
    
    def __str__(self):
        return f"{self.marque} {self.modele} ({self.annee})"

# Utilisation
ma_voiture = Voiture("Toyota", "Prius", 2022)
print(ma_voiture)
ma_voiture.accelerer(20)
ma_voiture.freiner(5)
```

### Ressources pour continuer

- 📖 **Documentation officielle** : [docs.python.org](https://docs.python.org)
- 🎓 **Tutoriels interactifs** : [codecademy.com/python](https://codecademy.com)
- 🏆 **Défis de code** : [codewars.com](https://codewars.com), [leetcode.com](https://leetcode.com)
- 📚 **Livres recommandés** : "Automate the Boring Stuff with Python", "Python Crash Course"
- 🎥 **Chaînes YouTube** : Corey Schafer, Real Python, Programming with Mosh

---

:::success Félicitations ! 🎉
Tu as maintenant une base solide en Python. La clé du succès est la **pratique régulière**. Commence par des petits projets et augmente progressivement la complexité. Python est un langage qui récompense la curiosité et l'expérimentation !
:::

## 🔗 Liens utiles

- [Python.org](https://python.org) - Site officiel
- [PyPI](https://pypi.org) - Repository de packages Python
- [Real Python](https://realpython.com) - Tutoriels avancés
- [Python Package Index](https://pypi.org) - Packages Python
- [GitHub](https://github.com/topics/python) - Projets Python open source