---
sidebar_position: 2
---

# Un ordinateur c’est quoi?

## CPU - Central Processing Unit

![CPU](https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/80486dx2-large.jpg/220px-80486dx2-large.jpg)

Composant de l’ordinateur, processeur ou unité centrale de traitement, il effectue des opérations arithmétiques, logiques, de transfert,...

Il est composé de transistors ([**portes logiques**](https://fr.wikipedia.org/wiki/Fonction_logique) / [**portes logiques**](http://www.courstechinfo.be/Techno/PortesLogiques.pdf)), **c'est le cerveau de l'ordinateur**.

Il est situé sur la carte mère.

Maintenant les CPU sont plus sophistiqué, il y a un ou plusieurs cœurs, ce qui lui permet de faire plusieurs choses à la fois comme faire fonctionner plusieurs programmes en parallèle.

![Raspberry Pi](https://m.media-amazon.com/images/I/71qC6kM1wQL._AC_SL1500_.jpg)

![Windows](/img/tutorial/processeur.png)
*Windows*

Voici un graphique montrant le fonctionnement d'un CPU en temps réel. Le plus intéressant à regarder est la vitesse. Ici tu peux voir que le CPU tourne à 1.42 GHz (Gigahertz). Un gigahertz signifie un milliard de tâche par seconde, dans cet exemple, notre CPU effectue donc 1.42 milliards de tâches par seconde.

Tu peux voir aussi que nous avons 1 socket = 1 processeur. 

2 cœurs signifie qu'il peut faire littéralement deux choses à la fois / 2 cerveaux et logiquement ça équivaut à 4 grâce à la technologie hyperthreading (technologie Intel) qui signifie que chacun de ces cœurs se présentera virtuellement aux yeux de Windows comme s'ils étaient 2, ce qui permet de faire 4 choses au total à la fois.

![MacOs](/img/tutorial/processeur2.png)
*MacOs*

Ces données distinguent un moment de temps un ordinateur moins cher d'un ordinateur plus cher. tu paies la vitesse et le nombre de tâches pouvant être exécutées donc un gain plus ou moins de temps.

![Linux](/img/tutorial/processeur3.png)
*Linux*

## RAM - Random Access Memory

[**Mémoire vive ou mémoire à accès non séquentiel**](https://fr.wikipedia.org/wiki/M%C3%A9moire_vive), c’est une mémoire volatile, elle stocke les données temporaires dans des cases / tableau (ligne et colonne = adresse mémoire). Elle travaille de concert avec la CPU.

Sans la RAM, l'ordinateur ne pourrait pas fonctionner, elle se trouve aussi sur la carte mère comme le CPU.

![RAM](/img/tutorial/ram.png)

Elle stocke donc les données de manière volatile uniquement quand l'ordinateur est allumé.

Les données sont perdues lors d'une coupure d'alimentation électrique. Quand tu lances un application elles sont chargées dans la RAM et c'est là que vivent tes programmes lorsque tu les utilises.

Elle est constituée de transistors + condensateurs et il existe deux principaux types, DRAM et SRAM (pas besoin de rafraîchir).

<iframe width="708" height="398" src="https://www.youtube.com/embed/vhKSfKbpZSQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Mémoire non volatile / disque dur

[**Disque dur (HDD)**](https://fr.wikipedia.org/wiki/Disque_dur) : stocker des données durablement - action mécanique. 

De minuscules particules magnétiques sont sur les disques et selon leurs orientations ils symbolisent un `0` ou un `1`.

Un disque dur peut tourner à 7 200 à 10 000 tours par minute.

<iframe width="331" height="186" src="https://www.youtube.com/embed/NtPc0jI21i0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="331" height="186" src="https://www.youtube.com/embed/3owqvmMf6No" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[**Disque dur Solid State Disk (SSD)**](https://fr.wikipedia.org/wiki/SSD) également appelé Mémoire Flash : stocker des données durablement - action numérique.

Le SSD ressemble beaucoup à une RAM mais les données ne sont pas volatiles.

L'avantage du SSD c'est qu'il est **beaucoup plus rapide** qu'un disque HDD et comme il n'y a pas de pièce mécanique en mouvement, il y a moins  de risque d'usure ou de problème de disfonctionnement mécanique.

Tes programmes et Tes données se chargeront donc beaucoup plus rapidement lorsque tu double-cliqueras dessus et également ils s'enregistreront beaucoup plus vite.

Le hic est que la durée de vie d'un SSD selon la qualité et la marque vivra beaucoup moins longtemps et en terme d'écriture il y a une quantité maximum. Tu peux toujours lire tes données mais avec le temps tu ne pourras plus en écrire.

Pour palier à cela il existe des disques dur hybride.

Une clé USB contient une mémoire flash mais moins rapide que les disques SSD, moins fiable et moins importante en capacité.

## Type et gestion de la mémoire

## Les connecteurs / ports

## Les connecteurs / ports

## Wireless (sans fil)

## Autres composants

## Les systèmes d'exploitation (OS)