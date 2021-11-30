---
sidebar_position: 6
---

# La ligne de commande - Linux

Dans le monde 96.3% des serveurs web fonctionnent sous Linux et 86% des téléphones mobiles également.

Il faut donc un minimum d'expérience et de compréhension dans les systèmes linux pour être un bon développeur, savoir faire des installations spécifiques, des installations de dépendances,...

Sous Linux (et comme sur d'autres systèmes d'exploitation), il peut paraître plus attrayant de travailler avec la version graphique du système **Graphical User Interface (GUI)** mais c'est beaucoup moins puissant en terme de fonctionnalité que d'utiliser la ligne de commande, **Command Line Interface (CLI)**.

Tu vas donc apprendre les bases pour travailler via le Shell / le Terminal.

Le Shell /Terminal est un programme qui permet une interaction basée sur le texte entre l'utilisateur et le système d'exploitation. Cette interaction est réalisée en tapant des commandes dans l'interface. Et on reçoit en retour la réponse de la même manière sous forme de texte. 

C'est un outil très puissant, cool et professionnel.

## Home Directory

Home Directory permet à chaque utilisateur de stocker ses données personnelles (exemple du casier où l'on range ses affaires).

```bash title="ce symbol est ce que l'on appelle le tilde"
~
```

Le symbole **tilde** `~` représente le **Home Directory**. tu peux le configurer pour montrer ce que tu souhaites comme le nom de l’hôte, la date ou l’heure. Il est actuellement configuré pour afficher par défaut le répertoire de travail actuel.

```bash title="ceci est une invite de la ligne de commande"
[~]$
```
Le tilde ici représente le répertoire de travail.
Pour interagir, il faut donc taper une commande, lorsque la commande est exécutée, elle exécute un programme pour réaliser une tâche spécifique.

Ci-dessous exemple la commande `echo`, elle est utilisée pour imprimer une ligne de texte à l'écran.

```bash
echo Hello
```

La réponse sera donc :

```bash
Hello
```

## Commande et Argument

De nombreuses commandes ont besoin d’un argument pour fonctionner. Si tu reprends l’exemple précédent `echo` est une commande et `Hello` est un argument.

```bash
echo Hello  //commande + argument
Hello      //réponse de la commande
```

Il existe aussi beaucoup de commande qui peuvent fonctionner sans argument, exemple la commande `uptime`. Elle est utilisée pour imprimer des informations sur depuis combien de temps le système fonctionne ainsi que d'autres informations.

## Les options

Une commande peut aussi avoir des options qui modifient son comportement de manière prédéterminée aussi appelées **switch** ou **flag**.
Une option est générale une lettre précédée d’un trait d’union.
Exemple pour imprimer `Hello` mais sans nouvelle ligne il suffit de précédé du switch / flag `-n`

```bash
<command> <option> <argument>

echo    // est une commande
-n     // est une option
Hello // est un argument

echo -n Hello
```

Il est impossible de connaître toutes les options existantes qu'une commande peut offrir. Il faut donc de la pratique et / ou se référer à l'aide et au manuel lorsque tu travailles avec des commandes inconnues.

## Les types de commande

Les commandes peuvent être généralement divisées en deux catégories.

1. les commandes internes ou intégrées (Internal or Built-in Commands) (`echo`, `cd`, `pwd`,..), font partie du Shell lui-même, environ **une trentaine** de commande.
   
2. les commandes externes (`mv`, `date`, `uptime`, `cp`,..), sont des programmes ou des scripts binaires qui sont généralement situés dans des fichiers distincts dans le système. Ils sont soit pré-installés avec le gestionnaire du paquet de distribution ou peuvent être créés ou installés par l'utilisateur.

Pour déterminé si une commande est interne ou externe utiliser la commande `type`.

```bash
k@Otaquin ~$ type cd
cd est une primitive du shell   //commande interne

k@Otaquin ~$ type mv
mv est /usr/bin/mv            //commande externe
```

## Les commandes basiques

### Navigation et création de fichier

Tu vas faire un exercice pour apprendre à créer des répertoires et des fichiers. Ainsi que naviguer facilement à travers l'arborescence que tu vas créer.

Le répertoire le plus important qui est `/home/name` est déjà créé car il s'agit du répertoire d'origine mais tout le reste en dessous doit-être créé.

Tu dois créer 3 nouveaux répertoires, Bretagne, Occitanie et Normandie (Des régions Françaises) sous le répertoire principal.

![Repertoire](/img/tutorial/repertoire.jpg)

Sous chaque région, il y a au minimum un département (un répertoire).
Il y a donc le Morbihan, le Finistère, le Tarn, le Gers, l'Eure et la Manche (un répertoire).
Et pour certain département, nous allons ajouter une ville (un répertoire).
Pour vérifier que nous sommes dans le bon répertoire de démarrage nous allons taper la commande `pwd` **Present Working Directory** le répertoire de travail / dossier de travail.

```bash
k@Otaquin ~$ pwd
/home/k
```

Pour voir le contenu de ce répertoire il faut taper la commande `ls`**List contents**, si rien ne s'affiche ça signifie que le répertoire est vide.

Tu vas donc créer ton arborescence en commençant par écrire les répertoires/dossiers/directory des régions avec la commande `mkdir`**make directory / make a new directory** + L'argument correspondant à la région.

Ici, tu dis littéralement à la machine **crée moi un nouveau dossier / directory qui s'appelle Bretagne**

```bash
mkdir Bretagne
```

Soit tu peux créer un dossier un par un comme ci-dessus. 
Soit tu peux en créer par multiple comme ci-dessous.

Ici, tu dis littéralement à la machine **crée moi un nouveau dossier / directory qui s'appelle Occitanie et crée moi également un nouveau dossier / directory qui s'appelle Normandie**

```bash
mkdir Occitanie Normandie
```

Tu peux vérifier leur création en faisant de nouveau la commande `ls`.

Maintenant tu vas créer les départements, un des moyens d'y parvenir est de changer de répertoire en faisant `cd` **change directory**, puis la commande `pwd` pour vérifier que nous sommes dans le bon répertoire.

```bash
cd Bretagne
pwd
mkdir Morbihan Finistere
```

Pour ensuite créer les villes, il est possible de changer de répertoire avec la commande `cd` ou bien de faire comme dans l'exemple suivant sans devoir entrer dans le répertoire.

```bash
mkdir Morbihan/Vannes

ou

mkdir -p Morbihan/Vannes  //permet de créer le répertoire parent et enfant d'un seul coup
```

### Chemin absolu et chemin relatif

**Le chemin absolu** est l'emplacement d'un fichier ou d'un répertoire à partir du répertoire racine. Le répertoire racine est symbolisé par un `/` (une barre oblique). C'est le répertoire le plus important de Linux.

```bash
cd /home/name/Bretagne   //c'est le chemin absolu pour aller au répertoire Bretagne
```

**Le chemin relatif** est le chemin en relation au présent répertoire de travail. C'est lorsque tu te déplaces du répertoire d'origine, vers un autre répertoire par exemple en faisant `cd Bretagne` , tu ne précises donc pas l'ensemble du parcours depuis la racine comme dans un chemin absolu.

### Déplacer un dossier ou un fichier avec la commande mv (move) 

Cette commande sert à déplacer ou à renommer un fichier ou un répertoire.

```bash
mv /home/kevin/Documents/Bretagne/Morbihan /home/kevin/Documents/Occitanie/
```

```bash
mv /Bretagne/Morbihan Occitanie/
```
À gauche, tu as le dossier d'origine et à droite le dossier de destination. Il faut séparer par un espace les deux.

### Corriger l'orthographe d'un nom avec la commande mv (move)

```bash
mv Bretagne/Morbihannu Bretagne/Morbihan
```
À gauche, tu as le nom de dossier à corriger qui est mal écrit et à droite le nouveau de dossier avec la bon orthographe. Toujours séparer les deux d'un espace.

### Copier / coller un fichier avec la commande cp (copy)

Cette commande permet de copier un fichier ou un répertoire.

```bash
cp Asia/India/Mumbai/City.txt Africa/egypt/Cairo 
```

À gauche, tu as le fichier à copier et à droite le dossier de destination de ce fichier copier. Ici, tu copies le fichier `City.txt`.

### Effacer avec la commande rm (Remove file or directory)

Cette commande permet de supprimer un fichier ou un répertoire. Cette commande est à utiliser avec précaution car avec l’option `-f` ou `-rf`, cette commande peut endommager voir supprimer tout votre système de fichiers de manière irréversible.

```bash
rm Asia/India/Mumbai/City.txt
```

### La commande cat

La commande `cat` permet de venir lire le contenu dans fichier `.txt`.

```bash
cat ..../city.txt
```

Il est aussi possible de modifier ce qui est écrit dans le fichier ainsi avec un simple chevron `>`. Il faut savoir que le simple chevron effacera ce qu'il y a déjà dans le fichier.

```bash
cat > .../city.txt 
Cairo
```

Tu tapes `entrer` pour écrire une nouvelle ligne de texte.... puis `CTRL d` pour sortir du mode édition.

Le double chevron `>>` permet d'écrire à la suite de ce qui est déjà écrit dans le fichier sans effacer ce qu'il y avait déjà.

```bash
cat >> .../city.txt 
Cairo
```

### La commande touch

Cette commande permet de changer la date du dernier accès ou modification d’un fichier, mais permet également de créer un fichier vide.

Créer un fichier vide avec la commande `Touch` (create a new file)

```bash
touch /home/..../country.txt
```

### La commande more

La commande `more` permet de visualiser le contenu d’un fichier page à page. Utilisez la touche entrée ou espace pour faire avancer l’affichage du contenu de votre fichier.

```bash
more new_file.txt
```

### Les commandes d'aide

* la commande `whatis` + une commande, permet de connaitre l'utilité de cette dernière. Exemple : `whatis date`

* la commande `man`permet d'avoir une aide en montrant des exemples. Exemple : `man date`

* le flag `-h` ou `-help` ou `--help` permet pour beaucoup de commande d'obtenir l'aide de la commande.

* `apropos`permet de rechercher les commandes avec tel ou tel mot clef.

**.....**

------

## management des paquets

* les gestionnaires de paquets `dpkg` /  `apt` / `apt-get` sont pour Debian et Ubuntu.

* les gestionnaire de paquets `rpm` sont pour Red Hat, Fedora et Centos (RHEL = Red Hat Entreprise Linux).

Il existe la famille `.rpm` avec RHEL, Fedora et CentOs et il existe la famille Debian `.deb` avec Ubuntu, Debian, Linux Mint,...

### Qu'est-ce que c'est qu'un paquet?

Dans sa définition la plus simple un paquet est une archive compressée qui contient tous les dossiers nécessaires pour que notre logiciel soit exécuté.

Exemple, tu veux installer un logiciel d'édition d'images tels que GIMP sur ton système Ubuntu.

Pour ce faire tu peux utiliser un paquet `gimp.deb`.

Ce paquet `gimp.deb` contient tous les binaires et fichiers de logiciels nécessaires de l'éditeur d'images, ainsi que les métadonnées, qui fournissent des informations sur le logiciel lui-même.

Le gestionnaire de paquet fournit une automatisation du processus d'installation, la mise à niveau, la configuration et le retrait des paquets du système d'exploitation.

### Quelques-unes des fonctions essentielles d'un gestionnaire de paquets

* garantir l'intégralité et l'authencité du paquet en vérifiant leurs certificats numériques et les sommes de contrôle d'une source fiable et sûre à installer.
  
* Simplifier l'ensemble du processus de gestion des paquets, la plupart des gestionnaires de paquets offrent de puissantes options d'interrogation, faciliter la recherche de paquets et ensuite le téléchargement, l'installation ou la mise à jour de logiciels existants à partir d'un dépôt de logiciels.
  
* regroupement des paquets par fonction pour réduire la confusion des utilisateurs.
  
* gestion des dépendances pour s'assurer qu'un paquet est installé avec tous les paquets dont il a besoin, évitant ainsi ce qui est communément connu comme l'enfer de la dépendance.

En fonction du système, Linux supportte plusieurs différents types de gestionnaires de paquets.

Parmi les plus courants on trouve `dpkg`, le gestionnaire du paquet de base pour les distributions basées sur Debian. 
`Apt` un nouveau frontend pour le système dpkg que l'on retrouve dans les distributions basées sur Debian comme Ubuntu, Linux Mint,...
`Apt-get` est le traditionnel frond-end pour le système dpkg que l'on retrouve sur les distribution basées sur Debian. 
`Rpm` le gestionnaire de paquet de base trouvé sur les distributions basées sur Red Hat. 
`Yum` un frontend pour le système RPM et `dnf` une interface plus riche en fonctionnalités pour le système RPM.

Regardes maintenant chaque gestionnaire de paquet d'une manière un peu plus détaillé.

### RPM (Red Hat Package Manager)

Ce gestionnaire de paquet est utilisé dans Red Hat, Centos, Fedora,...

L'extension de ses fichiers sont des `.rpm`.

RPM a cinq mode de fonctionnement de base.

1. installation - Installation `rpm -ivh nomdupaquet.rpm`
2. désintallation - Uninstalling `rpm -e nomdupaquet.rpm`
3. mise à niveau - Upgrade `rpm -Uvh nomdupaquet.rpm`
4. interrogation et vérification - Query `rpm -q nomdupaquet.rpm`
5. vérification - Verifying `rpm -Vf nomdupaquet.rpm`

Chacun de ces modes peuvent être exécuté via la commande rpm suivit de l'option de commande spécifiques.

Il est important de noter que `rpm` ne résout pas des dépendances de l'ensemble des paquets. C'est pourquoi nous utilisons un gestionnaire de paquets de niveau supérieur comme `yum`.

### YUM (Yellowdog Updater, Modified)

C'est un gestionnaire de paquets open-source, qui fonctionne sur les systèmes Linux basés sur `rpm`.

`yum` travaille avec des dépôts de logiciels, qui sont essentiellement une collection de paquets, sur des distributions basées sur les `rpm`.

Les informations du dépôt est stocké dans le fichier `/etc/yum.repos.d` et les fichiers du dépôt ont une extension `.repo`

Yum agit en tant que gestionnaire de paquets de haut niveau, mais sous le capot, il dépend toujours du RPM pour gérer les paquets sur le système Linux.

Contrairement à RPM, YUM gère très bien les dépendances des paquets, il est capable d'installer tous les paquets dépendants pour obtenir le paquet de base installé sur le système Linux.

**Les dépôts des paquets peuvent être en local ou sur des serveurs distants.**

YUM utilise toujours le gestionnaire de paquet RPM.

**----**

### DPKG (Paquet Debian Manager)

Ce gestionnaire de paquet est utilisé dans les distributions Debian, tel que Ubuntu, PureOS, Debian, Linux Mint,...

Il s'agit d'un gestionnaire de paquets de bas niveau.

Comme pour RPM, il peut-être utilisé pour installer, supprimer, mettre à jour, énumérer,...

1. installation / Upgrade  `dpkg -i nomdupaquet.deb`
2. uninstalling `dpkg -r nomdupaquet.deb`
3. list `dpkg -l nomdupaquet.deb`
4. status `dpkg -s nomdupaquet.deb`
5. verifying `dpkg -p <path to file>`

L'extension des paquets sont `.deb`

`nomdupaquet --version`

DPKG ne gère pas les dépendances lorsqu'il s'agit de la gestion des paquets. l'installation peut donc échouer en raison de problème de dépendance.

`dpkg -i gimp.deb`

C'est pourquoi nous utilisons des gestionnaires de paquets Debian tels que `apt` et `apt-get`.

`apt install gimp`

`apt-get install gimp`

Bien que les deux sembles similaires, ils ne dépendent pas l'un de l'autre.

**APT (Advanced Package Managers),** il est plus convivial, plus global et un meilleur outil que apt-get.

c'est pour laquelle nous allons nous concentrer sur `apt`

`apt` agit en tant que gestionnaire de paquets en amont et s'appuie sur l'utilitaire dpkg (c'est assez similaire à la relation entre YUM et RPM.

**-----**