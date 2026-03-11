---
id: how-to-duplicate-a-meter
title: Comment dupliquer un Compteur
sidebar_label: Dupliquer un Compteur
sidebar_position: 3
---

## Comment dupliquer un Compteur

> **Permission requise :** Ajouter un Compteur

La duplication d'un compteur vous permet de créer rapidement un nouveau compteur en **copiant la configuration** d'un compteur existant.

:::note
Les relevés historiques et les états actifs des déclencheurs **ne sont pas** copiés vers le nouveau compteur.
:::

### Étape 1 : Localiser le compteur source
Naviguez vers **Maintenance > Compteurs**. Utilisez la barre de recherche ou les filtres pour trouver le compteur à copier.

### Étape 2 : Initier la duplication
Sélectionnez le compteur dans la liste. Cliquez sur le bouton **Dupliquer** situé dans la colonne d'actions ou en haut à droite de la vue détaillée.

### Étape 3 : Modifier les paramètres copiés

| Champ | Instruction | Requis |
|---|---|---|
| **Nom** | Mettez à jour l'identifiant. Le système ajoute généralement « - Copie » au nom original. Vous devez fournir un nom unique. | ✅ Oui |
| **Actif** | Réaffectez le compteur au bon équipement si nécessaire. | — |
| **Unité de mesure** | Héritée du compteur source. Ne modifiez que si nécessaire. | ✅ Oui |
| **Valeur de relevé** | Saisissez un relevé initial pour ce nouveau compteur. Les relevés historiques du compteur source **ne sont pas** copiés. | ✅ Oui |
| **Description** | Héritée du compteur source. Mettez à jour pour refléter le contexte du nouveau compteur. | — |

### Étape 4 : Finaliser la configuration
Cliquez sur le bouton **Soumettre** pour sauvegarder le compteur dupliqué.

---
