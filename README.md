# VERSION SITE MUSIQUE AVEC FACTORY PATTERN

## Refonte à ma manière du site

## Refonte du json

- Plus besoin des settings, on déduit le nombre de séquences et sessions d'après ce qui est entré dans le json (en bouclant sur les données du json)

- Array de séquences: chaque séquence est reliée à un level via sa levelId et possède une sequenceId et une sequenceFullId (sequenceFullId pour repérage)

- Array d'activités: chaque séquence est reliée à une séquence via sa levelId et sa sequenceId et possède une sessionId et une activityId (activityId initialement juste pour repérage mais maintenant ajout d'un tri, les activités peuvent être rentrées dans le json dans n'importe quel ordre et seront affichées dans l'ordre de leur activtyId)

## Changements js

- Les buttons séquence et session vont se générer automatiquement en nombre d'après le nombre d'entrées dans le json sans avoir besoin de settings

- Utilisation de factory pour générer les activités suivant leur type

- Ajout de navigation d'une session à une autre dans les séquences

- Œuvre ou Œuvres selon nombre

- En partie haute ce qui n'est pas rempli dans le json n'apparait pas dans le html (oeuvres, projet musicaln notions, comments)

## Modifications pour accessibilité

- Niveaux de titres h1, h2, h3

- Certains contrasts étaient faibles, modif de certaines couleurs pour avoir un contrast suffisant

- Certaines polices trop petites, surtout en mobile; augmentation de leur taille (nécessitant modif pour responsive)

## Le sémantique BORDEL!

- Oui c'est joli l'effet de fieldset mais un fieldset est pour un formulaire donc si on veut le même effet on le code en CSS (d'autant plus facile que le fond est uni, s'il y avait eu une image de fond j'aurais fait différemment)

- Balises cite enlevées également et même visuel codé en CSS car ça n'était pas des citations

## Screenshots

![original](/assets/doc/original.png)
![refonte](/assets/doc/refonte.png)
