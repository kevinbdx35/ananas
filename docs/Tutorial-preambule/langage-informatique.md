---
sidebar_position: 2
---

# Le langage informatique

## Le code source

Une séquence de mots clés, de valeurs, de noms et de symboles qu’un outil d’analyse peut décortiquer pour générer le code exécutable.

## Le code exécutable

Une séquence de valeurs entières mélangeant les valeurs (données) et les actions (instructions) dans un état figé, conservé normalement dans un fichier dans une mémoire permanente.

## Le programme actif

Une configuration de valeurs dans la mémoire l’ordinateur en cours de lecture par le processeur pour produire des modifications de certaines de ces valeurs. Le résultat est par exemple une fenêtre d’application.

## Les tendances majeurs pour 2021

Voici un rapport sur les tendances pour 2021, [JetBrains](https://www.jetbrains.com/fr-fr/lp/devecosystem-2021/)

![Graphique Des Tendances Par JetBrains](https://www.jetbrains.com/lp/devecosystem-2021/static/5_years_line_chart@2x-b70a5ae8f3b436fd99da38b6fde858c7.png)

## La Syntaxe

La syntaxe est l’ensemble des règles qui définissent les séquences correctes des éléments d’un langage de programmation. C'est la manière d’écrire des programmes informatiques et selon les langages il y a des règles différentes à respecter pour écrire du code valide.
Dans la syntaxe, on y rencontre des règles de ponctuation, ainsi que des :
* **Instructions** : opérations élémentaires exécutées par le processeur. Instruction de déclaration, instruction d’affectation, instruction arithmétique, instruction logique, instruction de contrôle,...
* **Types de données de base** : Int, float, char(string)
* **Structures de contrôle** : IF, Else If, else, For, foreach, while,...

## Les paradigmes

Un [paradigme](https://fr.wikipedia.org/wiki/Paradigme_(programmation)) est une manière de formuler et résoudre un problème.

<iframe width="372" height="209" src="https://www.youtube.com/embed/5D7Shf9nG0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Quelques paradigmes :

* Programmation impérative
* Programmation orientée objet
* Programmation déclarative
* Programmation événementielle
* Programmation fonctionnelle
* ...

## Langage de bas niveau et de haut niveau

Le niveau d'un langage fait référence à la proximité ou à l’éloignement de la logique du matériel. C'est une notion qui peut-être flou.

**[Bas niveau :](https://fr.wikipedia.org/wiki/Langage_de_programmation_de_bas_niveau)** langage proche de la logique du processeur et des instructions machines.

*Conséquence* : gestion plus étendue de la mémoire et des caractéristiques systèmes. Très souple et très performante mais plus d’erreurs possibles car ici on crée tout de toute pièce.

*Exemple langage :* assembleur, langage C, langage C++,...Langage embarqué.

**[Haut niveau :](https://fr.wikipedia.org/wiki/Langage_de_haut_niveau)** langage proche des langues naturelles. Il fait *"abstraction des caractéristiques systèmes"* et il est indépendant de la machine.

*Conséquence :* travail simplifié et plus rapide (RAD). Moins souples, potentiellement moins robustes (librairies, plus de couche,...)

*Exemple langage :* PHP, Python, Visual Basic, C#,...



## Bien coder c'est quoi?

Le code doit être complet, fonctionnel et optimisé.
Il doit être efficace et rapide. Il doit être portable, c'est à dire donner le même résultat partout (OS, Browser et configuations différentes)
Il doit être lisible, le code doit être commenté et mes standards respectés, facile d'utilisation et à maintenir.
Il faut bien entendu éviter le code spaghetti et la répétition et éviter de générer des erreurs,...