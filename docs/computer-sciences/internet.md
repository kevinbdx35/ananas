---
sidebar_position: 3
---

# Internet

Nous utilisons tous l'Internet au quotidien et avons accès à une connectivité partout et en permanence.

<iframe width="708" height="398" src="https://www.youtube.com/embed/RHljpE7pZh8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## IP (Internet Protocol)

Chaque machine connectée sur Internet a une adresse IP (Internet Protocol).
Cette adresse prend la forme `#.#.#.#`, quatre nombres séparés par des points des valeurs 0-255 (soit 256 combinaisons possibles par nombres). D'autres formats d'adresses IP existent également aujourd'hui.
Comme les adresses postales, elles identifient de manière unique les machines sur Internet.

Tout appareil connecté à Internet a une adresse IP.

Ce sont les FAI /  fournisseurs Internet qui attribuent une adresse IP à votre ordinateur.

Votre ordinateur indique qu'il a besoin d'une adresse IP qui lui est fourni par une serveur DHCP (protocole de configuration dynamique d'hôte).

<iframe width="708" height="398" src="https://www.youtube.com/embed/yH9UvkeAz-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## DNS (Domain Name System)

Nous accédons à des sites Web utilisant des noms de domaine (Facebook.com, Google.com, etc.), mais il s'avère que ces sites ont aussi des adresses IP. Comment mon ordinateur trouve un site internet via une adresse `.com` si toutes les machines ont uniquement une adresse IP?
Les serveurs DNS (Domain Name System) convertissent les noms de domaine en adresses IP.

<iframe width="708" height="398" src="https://www.youtube.com/embed/qzWdzAvfBoo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Paquets

Les ordinateurs communiquent en envoyant des paquets, qui sont comme des enveloppes virtuelles envoyées entre ordinateurs. Ces paquets sont constitués de `0` et de `1`.

Par analogie, supposons que nous voulions trouver une image de chat sur Internet

Nous envoyons donc une requête à un serveur, disons Google, comme "`get cat.jpg`".

Nous plaçons cette demande dans une enveloppe et on indique sur cette enveloppe l'adresse IP du destinataire et de l'expéditeur. Cependant, pour le destinataire de la demande, nous ne connaissons pas l'adresse IP de Google. Nous devons donc demander au serveur DNS. 

Si le serveur DNS de notre FAI ne connaît pas l’adresse IP du site Web, il a été configuré pour demander à un autre serveur DNS. 

Après avoir envoyé la demande, nous recevrons une réponse et l'image nous sera envoyé dans un ou plusieurs paquets.

![Cat Picture](https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)

Photo by <a href="https://unsplash.com/@bogdanf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bogdan Farca</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Si l'image du chat est trop grande pour une seule enveloppe, son envoi en un seul paquet peut consommer du trafic Internet, elle sera donc divisée en fragments plus petits et mise dans différentes enveloppes/paquets.

Sur l'enveloppe seront écrite les informations de : 

* Adresse de retour: adresse IP de Google
* Adresse de livraison: notre adresse IP
* Indiquez le nombre de paquets sur chaque enveloppe (1 sur 4, 2 sur 4, etc.)

## TCP/IP

L'IP va au-delà d'une simple adresse.

C'est un ensemble de conventions que les ordinateurs et les serveurs suivent pour permettre l'intercommunication.

L'IP a entre autre pour rôle de prendre en charge l'adressage mais également la fragmentation comme dans l'exemple de l'enveloppe.

S'il manque un paquet, vous pouvez logiquement déduire quel paquet vous manque en fonction de ceux reçus, cependant, l'IP ne dit pas aux ordinateurs quoi faire dans ce cas.

C'est là qu'intervient le protocole TCP (Transmission Control Protocol), il garantit que tous les paquets arrivent à destination.

Ainsi, lorsqu'il manque un paquet, un ordinateur peut faire une demande pour le paquet manquant.

Ensuite l'ordinateur assemblera tous les paquets pour recréer l'image du chat.

<iframe width="708" height="398" src="https://www.youtube.com/embed/26jazyc7VNk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Les ports

Pour s'assurer que Google sache que nous demandons une page Web et non un e-mail ou un autre service, nous utilisons l'information des ports.

Le port `80` indique à l'utilisateur que nous voulons une page Web, `80` signifie HTPP (Hypertext Transfer Protocol - protocole de transfert hypertexte).

De nombreux sites Web utilisent des connexions sécurisées avec SSL ou HTTPS, qui utilise le port `443`.

Le port `25` est pour les courriers électroniques.

D'autres ports existent également.

## Les protocoles

Les protocoles ne sont que des ensembles de règles.

Lorsqu'une demande est faite à Google pour une image, HTTP indique à Google comment répondre de manière appropriée.

## UDP (User Datagram Protocol)

C'est un autre protocole du type TCP sauf que celui-ci ne garantit pas la livraison des paquets, il est par exemple utilisé pour la visioconférence telle que FaceTime.

Les paquets peuvent être abandonnés dans le but de maintenir la conversation fluide dans une visioconférence.

Ce protocole est utilisé chaque fois que vous souhaitez conserver les données sans attendre qu'un tampon se remplisse.

## La commande ping

Pour connaître une adresse IP d'un site nous pouvons effectuer une commande ping.

La commande est taper dans votre terminal :

```bash
ping www.google.com
```
La réponse :

```bash
ping www.google.com
PING www.google.com(par21s11-in-x04.1e100.net
(2a00:1450:4007:80c::2004)) 56 data bytes 
```

## La commande traceroute (linux) ou tracert (windows)

Cette commande permet de savoir par quels routeurs passe notre demande et nous pouvons ainsi voir que notre demande passe dans le monde et à travers les océans en quelques millisecondes.

La commande est taper dans votre terminal (linux) :

```bash
traceroute www.google.com
```
<iframe width="708" height="398" src="https://www.youtube.com/embed/IlAJJI-qG2k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Les réseaux

* Local Area Network (réseau local)
* Metropolitan Area Network (réseau métropolitain)
* Wide Area Network (réseau étendu)

<iframe width="708" height="398" src="https://www.youtube.com/embed/c0Xj09s5hYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## OSI (Open System Interconnection)

Standard ISO établi pour les communications réseaux. Il contient 7 couches superposées. Chaque couche propose ses services à la couche supérieure.

