---
sidebar_position: 1
---

# Flutter

Des entreprises comme Ali Baba, The Hamilton Musical, Google et bien plus encore utilisent déjà Flutter dans leurs applications.

* [Flutter Showcase](https://flutter.dev/showcase)

Flutter te permet de créer des applications IOS, Android et même Web en utilsiant un seul langage de programmation, qui est Dart.

* [Dart](https://dart.dev)

Ainsi, au lieu d'apprendre Java ou Kotlin pour créer des applications Android ou d'apprendre Swift ou Objective C pour créer des applications iOS, voir apprendre tout ça, afin que tu puisses créer des applications pour les deux.
Tu peux tout faire en une seule fois avec Flutter.

## Qu'est-ce que Flutter?

Pour un développeur d'application mobile, si tu veux pouvoir publier tes applications sur le Google Play Store et sur Apple Store, tu dois coder avec deux langages différents si tu souhaites faire cela en natif.

Ce qui signifie aussi que lorsque tu souhaites apporter des mises à jour à ton applicaiton ou apporter des corrections de bogues, tu dois les envoyer à la fois sur Google Play Store et sur l'Apple Store. Tu dois faire le double de travail car tu as aussi de code à maintenir. 

De plus, certaines des mises en page peuvent sembler bizarres. Car, tu dois prendre en charge un vaste gamme de tailles d'écran différents pour l'écosystème iOS, téléphones, tablettes,... Et idem sur l'écosystème Android.
Surtout que les appareils Android peuvent être frabriqué par n'importe qui, le nombre de tailles d'écran différents est tout simplement énorme.

C'est là qu'intervient Flutter.

Il y a des écrans partout maintenant, avec tous des tailles différentes. Alors pourquoi ne pas permettre aux développeurs de pouvoir concevoir de belles interfaces pour tous ces différents types d'écran? Et c'est exactement le but de ce qu'est Flutter.

Flutter est une boîte à outils qui permet aux développeurs de concevoir facilement de belles interfaces pour toutes sortes d'écrans et d'appareils.

Il est livré avec tout un tas de widgets prédéfinis qui facilitent la présentation de ton application. 

* [Widget Catalog](https://docs.flutter.dev/development/ui/widgets)

Flutter demande au départ juste une simple fenêtre vide. Et ce que Flutter fera, c'est qu'il dessinera sur cette fenêtre vierge tout ce qui doit être rendu et quelles que soient les animations, les interactions ou les changements.

Cela signifie qu'au lieu d'avoir à créer des applications iOS à la manière d'Apple ou des applications Android à la manière d'Android, tu peux simplement utiliser tout un tas de widgets prédéfinis de Flutter, tels qu'un bouton d'action,... Ces widgets correspondent à chaque plate-forme.

Ces widgets sont comme des briques de Lego. En les branchant ensemble et en les personnalisant, tu obtiens ta belle application qui peut-être déployée presque n'importe où.

## Pourquoi Flutter?

Une des premières raisons qui pourrait te faire envisager Fluetter, est que tu te retrouveras avec une seule et unique base de code à maintenir. Un endroit pour mettre à jour ton application et un endroit pour la déboguer.

C'est un énorme avanatage par rapport à la création native de tes applications.

Pour Flutter, tu n'as qu'un langage à connaître, c'est Dart.

* [Dart](https://dart.dev)

Dart est un langage très puissant avec qui, il est assez facile de travailler.

En devenant bon dans ce seul langage, tu pourras faire des applications Web, Desktop, iOS, Android et beaucoup plus.

Il est très similaire à de nombreux langages modernes de programmation orientés objet.

Flutter te permet aussi d'utiliser un système de mise en page très simple et flexible pour créer de belle interfaces utilisateur pour tout projet dans lequel tu veux te lancer.

Il y a beaucoup de concepts de base de la conception Web qui entrent dans le développement de Flutter.

Il y aussi quelque chose appelé Hot Reload. Lorsque tu développes des applications, l'une des plus grandes difficultés est lorsque tu dois exécuter l'application car souvent sur iOS, cela peut prendre entre 10 et 30 secondes entre l'enregistrement de ton code, l'exécution de ton application, sa compilation et enfin sa visualisation à l'écran. Mais lorsque tu travailles avec Flutter, dès que tu mets à jour ton code et que tu cliques sur **enregistrer**, ton interface utilisateur changera parfois sous tes yeux en une fraction de seconde. Ainsi, il est plus facile d'itérer.

De plus Flutter est **Open Source**, cela signifie que si tu veux voir comme un bouton est implémenté, tu peux simplement cliquer dessus et tu verras le code. Ce qui peut te permettre de mieux comprendre comment fonctionnent les widgets et enventuellement les modifiers si tu en as besoin.

## L'anatomie d'une application Flutter

Tout ce qui se trouve dans une application Flutter est un widget (comme des blocs Lego). Une application Flutter est donc composée de :

* scaffold (échafaudage), un écran vide de ton application
* appbar (barre d'application)
* container (conteneur), ce n'est qu'une boîte qui va contenir le contenu de ton application
* column (le contenur va avoir une colonne), tu peux maintenant mettre des widgets à l'intérieur de la colonne qui s'empilent verticalement.
* ...

À la fin de la construction de ton application, tu te retrouves avec une arborescence de widgets.
