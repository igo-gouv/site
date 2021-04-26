---
permalink: /documentation/panorama/panorama1_exporter_fichier_forme/
layout: general
---

## Panorama 1 - Exporter en fichier de formes :

* Image du panorama
![image du panorama](https://github.com/infra-geo-ouverte/igo/blob/master/interfaces/navigateur/public/images/toolbar/export_shape.png)
* Ce panorama permet à l’utilisateur d’exporter des éléments géométriques sélectionnées dans la carte vers des fichiers de formes selon leur type de géométrie.


* Tableau des info-bulles :

| Libellé du champs | Texte | 
|:-----------------:|:-----:| 
| Image du panorama | Exporter en fichier de formes |   

* Tableau des options

| Option | Comportement |  
|:------:|:------------:|
|Bouton « Exporter en fichier de formes »|Exécuter la validation du tableau des validations. S’il n’y a aucune erreur, effectuer l’exportation des éléments géométriques sélectionnés en fichiers de formes selon leur type de géométrie. Afficher les informations du panorama « Enregistrer sous » selon les règles fonctionnelles de base. Ce panorama permet de sélectionner l’emplacement désiré pour exporter le fichier et appuyer sur le bouton « Enregistrer ». Si l’utilisateur clique sur le bouton « Annuler », ne pas poursuivre le traitement. Si un problème survient lors de l’exportation, afficher le message d’erreur générique (2).                                                                   

* Tableau des validations

|  Éléments à valider |                                     Validation               |   Message | 
|:---------------------------------------:|:---------------:|:---------------:|
|Point, ligne ou polygone sélectionné dans la carte | Au moins un élément géométrique doit être sélectionné dans la carte.|1|

* Tableau des messages :

|  Numéro |Message | 
|:-------:|:------:| 
| 1 | Vous devez sélectionner au moins un élément géométrique avant de pouvoir l’exporter. |
| 2 | Une erreur est survenue pendant l’exportation. |
