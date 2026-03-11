---
id: about
title: À propos des Ordres de Travail
sidebar_label: À propos des Ordres de Travail
sidebar_position: 1
---

# Ordres de Travail

L'**Ordre de Travail** est le moteur central de vos opérations de maintenance. C'est un enregistrement numérique formel et traçable qui autorise, détaille et surveille une tâche de maintenance spécifique du début à la fin.

## Cycle de vie et gestion des statuts

### Groupes de statuts

| État | Statuts | Description |
|---|---|---|
| **En traitement (Actif)** | Brouillon, Ouvert, En cours, En attente, En révision | L'Ordre de Travail est « vivant ». Les techniciens peuvent modifier les détails, enregistrer des pièces et ajuster les planifications. |
| **Terminal (Fermé)** | Terminé, Annulé | L'Ordre de Travail est « mort ». Il devient un **enregistrement historique et financier verrouillé**. |

### Matrice de transition des statuts

| Statut actuel | Statut(s) suivant(s) autorisé(s) |
|---|---|
| **Brouillon** | Ouvert |
| **Ouvert** | En cours |
| **En cours** | En attente, En révision, Terminé, ou Annulé |
| **En attente** | En cours, En révision, Terminé, ou Annulé |
| **En révision** | En cours, Terminé, ou Annulé |
| **Terminé** | *(Verrouillé)* — Finalise les coûts de main-d'œuvre et déduit définitivement l'inventaire. |
| **Annulé** | *(Verrouillé)* — Lecture seule. Aucune modification possible. |

### Mesures de protection

**Règle A :** Le système ne permettra **pas** de terminer un Ordre de Travail si vous utilisez des pièces que vous n'avez pas en stock.

**Règle B :** Dès qu'un Ordre de Travail est marqué **Terminé** ou **Annulé**, l'ensemble du profil devient strictement en **lecture seule**.

**Règle C :** Les Administrateurs système peuvent configurer une dérogation permettant aux utilisateurs autorisés de rouvrir les Ordres de Travail fermés via **Portail Admin > Paramètres du locataire > Permissions opérationnelles**.
