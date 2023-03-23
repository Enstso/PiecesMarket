# Les-Bonnes-Pièces

## <u> Projet Javascript/NodeJs de Open Classroom </u> :

### Contexte :

  Un concessionnaire automobile, décident de mettre ses produits en ligne.

  Création d'un site web marchand dynamique.
  
  Les produits du site, ont été préalablement crée dans un fichier Json.
  
## L'objectif :

  1. Récupérer les données d'un fichier Json. 
  2. Exploiter/Manipuler ces données.
  3. Prise en main de NodeJS, Npm et Npx.

```plantuml
@startuml Les bonnes pièces
left to right direction
:Utilisateur:
package site{
    Utilisateur--(Consulter le catalogue)
    Utilisateur--(Afficher les articles correspondant à son budget)
    Utilisateur--(Filtrer les articles)
    
}
@enduml
```

Le fichier Json, qui contient les différentes informations des produits :

![produits.PNG](img/produits.PNG)

L'index se présente de cette façon :

![index.PNG](img/index.PNG)

Différents filtres ont été ajoutés :

![filtres.PNG](img/filtres.PNG)


tri par prix croissants :

![croissants.PNG](img/croissants.PNG)

tri par prix décroissants :

![décroissants.PNG](img/décroissants.PNG)

Filtrer les pièces qui ont des prix non abordables inférieur ou égal à 35 € :

![prix-abordables.PNG](img/prix-abordables.PNG)

Filtrer les pièces qui ont une description :

![descriptions.PNG](img/descriptions.PNG)

Ce range permet de filtrer les produits en fonction de leur prix :

![range.PNG](img/range.PNG)

filtrer les pièces qui ont un prix inférieur à 10$ :

![-10.PNG](img/-10.PNG)


filtrer les pièces qui ont un prix inférieur à 40$ :

![-40.PNG](img/-40.PNG)