# 📘 Guide d'Utilisation - Application To-Do List

**Projet**: UE 5.2.2 - Langages JS API et initiation Framework JS  
**Auteur**: Laurent Boyer  
**Date**: Décembre 2025

---

## 🎯 Vue d'ensemble

Cette application To-Do List permet de créer, gérer et suivre des tâches avec un système de priorités, de statuts et de stockage local (localStorage).

---

## 🚀 Démarrage rapide

### 1. Accès à l'application

Ouvrez le fichier **`index.html`** dans votre navigateur web.

### 2. Navigation

L'index propose deux parcours :

#### **Parcours A : Pages principales** (Utilisation normale)

- `Html/Home.html` - Page d'accueil
- `Html/Form-ToDoList.html` - Création de tâches
- `Html/TasksSummary.html` - Récapitulatif complet

#### **Parcours B : Par étapes** (Démonstration pédagogique)

- **Étape 2A** - Formulaire HTML/CSS statique (sans JavaScript)
- **Étape 3B** - Formulaire avec enregistrement localStorage
- **Étape 3C** - Affichage des tâches depuis localStorage
- **Étape 3D** - Mise à jour des statuts et archivage

---

## 📝 Créer une tâche

### Depuis les pages principales

1. **Ouvrir** `Html/Form-ToDoList.html` (ou cliquer sur "Formulaire" depuis l'index)
2. **Remplir** les champs du formulaire :
   - **Nom et Prénom** (requis)
   - **Email** (validation automatique)
   - **Nom de la tâche** (requis)
   - **Description** (optionnel)
   - **Date d'échéance** (optionnel)
   - **Priorité** : Important & Urgent, Haut, Moyen, Bas
   - **Statut de progression** : Nouvelle tâche, En cours, Bloqué, Terminé
   - **Temps passé** (en minutes)
   - **Documentation** : Liens URL
   - **Fichiers joints** : PDF

3. **Cliquer** sur "Créer la tâche"
4. **Consulter** la console (F12) pour voir les logs détaillés
5. **Accepter** la proposition de voir le récapitulatif

### Depuis les étapes pédagogiques

1. **Ouvrir** `Etapes/3B_Enregistrement_localStorage/Form-ToDoList-3B.html`
2. Suivre les mêmes étapes que ci-dessus
3. La redirection vous mènera vers l'étape 3C (affichage)

---

## 📊 Consulter les tâches

### Affichage du récapitulatif

1. **Ouvrir** `Html/TasksSummary.html` (ou accepter la redirection après création)
2. Le tableau affiche automatiquement toutes les tâches enregistrées

### Informations affichées

- **ID** : Numéro unique de la tâche
- **Titre** : Libellé de la tâche
- **Assigné à** : Nom de la personne responsable
- **Sujet** : Catégorie académique
- **Priorité** : Badge coloré selon le niveau
- **Statut** : Badge coloré selon la progression
- **Date de création** : Formatée en français
- **Actions** : Boutons de changement de statut (étapes 3D et Html/TasksSummary.html)

### Filtres disponibles

- **Toutes** : Affiche toutes les tâches actives (non archivées)
- **Terminées** : Uniquement les tâches avec statut "Terminé"
- **Archivées** : Tâches archivées

---

## 🔄 Mettre à jour une tâche

### Changer le statut (étapes 3D et Html/TasksSummary.html)

1. Dans le tableau récapitulatif, repérer la colonne **Actions**
2. Chaque tâche a 7 boutons numérotés correspondant aux statuts :
   - **1** : Nouvelle tâche
   - **2** : Conception
   - **3** : En cours
   - **4** : Bloqué
   - **5** : En attente de validation
   - **6** : Terminé
   - **7** : Archivé

3. **Cliquer** sur le bouton du statut souhaité
4. Le statut actuel est **désactivé** et mis en évidence
5. La mise à jour est **immédiate** et sauvegardée dans localStorage

### Comportements spéciaux

- **Passage à "Terminé" (6)** : La date de completion est enregistrée automatiquement
- **Passage à "Archivé" (7)** : La tâche disparaît du filtre "Toutes" et apparaît dans "Archivées"

---

## 💾 Stockage des données

### localStorage

Toutes les données sont stockées **localement** dans votre navigateur sous la clé `"tasksData"`.

### Vérifier le localStorage

1. Ouvrir la **Console développeur** (F12)
2. Aller dans l'onglet **Application** (Chrome) ou **Stockage** (Firefox)
3. Naviguer vers **Local Storage** → votre domaine/fichier
4. Voir la clé `tasksData` avec toutes vos tâches au format JSON

### Effacer les données

Pour réinitialiser complètement l'application :

```javascript
localStorage.removeItem("tasksData");
// Ou dans la console :
localStorage.clear();
```

Puis **rafraîchir** la page (F5).

---

## 🎨 Responsive Design

### Adaptatif sur tous les écrans

L'application est **entièrement responsive** et s'adapte à :

- **Desktop** (> 1024px) : Affichage complet, toutes les colonnes visibles
- **Tablette** (768px - 1024px) : Colonnes réduites, navigation optimisée
- **Mobile** (< 768px) : Layout vertical, tableau scrollable horizontalement
- **Petit mobile** (< 480px) : Interface ultra-compacte, boutons pleine largeur

### Tester le responsive

1. Ouvrir les **Outils développeur** (F12)
2. Activer le **Mode responsive** (Ctrl+Shift+M)
3. Tester différentes tailles d'écran

---

## 🧪 Vérification et débogage

### Console de logs

L'application affiche des **logs détaillés** dans la console :

```markdown
🚀 Début de la fonction saveTask()
📋 Étape 1 : Lecture des champs du formulaire
  - Libellé : TP HTML/CSS
  - Description : Créer une page responsive
  ...
💾 Étape 5 : Enregistrement dans le localStorage
✅ Données enregistrées
🎉 Fonction saveTask() terminée avec succès !
```

### Vérifier que tout fonctionne

1. **Ouvrir** `Html/Form-ToDoList.html`
2. **Ouvrir** la console (F12)
3. **Créer** une tâche de test
4. **Vérifier** que les logs s'affichent sans erreur
5. **Accepter** la redirection
6. **Vérifier** que la tâche apparaît dans le tableau

---

## 🔗 Navigation complète

### Liens entre les pages

#### Pages principales (Html/)

- `Home.html` → `Form-ToDoList.html` (Créer)
- `Home.html` → `TasksSummary.html` (Consulter)
- `Form-ToDoList.html` → `TasksSummary.html` (après création)
- `TasksSummary.html` → `Form-ToDoList.html` (+ Nouvelle tâche)
- Toutes les pages → `../index.html` (← Retour à l'index)

#### Étapes pédagogiques (Etapes/)

- **2A** : Formulaire statique (HTML/CSS seulement, pas de JavaScript)
- **3B** : Formulaire → localStorage → redirection vers 3C
- **3C** : Affichage tableau ← lien vers 3B
- **3D** : Tableau avec actions ← lien vers 3B

---

## 📚 Structure des données

### Format JSON d'une tâche

```json
{
  "id": 1,
  "libelle": "TP HTML/CSS",
  "date_de_creation": "2025-12-11T10:30:00.000Z",
  "date_de_modification": "2025-12-11T10:30:00.000Z",
  "date_de_completion": null,
  "compteur_de_temps_passe(mn)": 120,
  "description": "Créer une page web responsive",
  "assignation": "Laurent Boyer",
  "documentation": ["https://developer.mozilla.org/fr/"],
  "fichiers_joints": [],
  "idPriorite": "2",
  "idTaskProgression": "3",
  "idAcademicSubject": "1",
  "idSkillsLevel": "2",
  "idDifficultyRating": "2",
  "subTask_ids": []
}
```

### Données de référence (Data/)

Les fichiers JSON de référence se trouvent dans `Data/` :

- `priorityStatus.json` - Niveaux de priorité
- `taskProgression.json` - Statuts de progression
- `academic_subjects.json` - Sujets académiques
- `skills_evaluation.json` - Niveaux de compétence
- `difficultyRating.json` - Niveaux de difficulté

---

## 🛠️ Technologies utilisées

### Frontend

- **HTML5** : Structure sémantique
- **CSS3** : Styles, Flexbox, Grid, Responsive
- **JavaScript ES6+** : Logique, localStorage, manipulation DOM

### Concepts JavaScript

- **DOM Manipulation** : `getElementById()`, `querySelector()`, `insertAdjacentHTML()`
- **Événements** : `onclick`, `onreadystatechange`
- **Méthodes tableaux** : `forEach()`, `find()`, `filter()`, `push()`
- **localStorage API** : `getItem()`, `setItem()`
- **JSON** : `parse()`, `stringify()`
- **Fonctions modernes** : Template literals, fonctions fléchées, async/await
- **Fetch API** : Chargement de fichiers JSON

---

## ✅ Checklist de test

### Test complet du flux

- [ ] Ouvrir `index.html`
- [ ] Naviguer vers le formulaire (Html/ ou Étape 3B)
- [ ] Créer une tâche avec toutes les informations
- [ ] Vérifier les logs console (F12)
- [ ] Accepter la redirection vers le récapitulatif
- [ ] Vérifier que la tâche apparaît dans le tableau
- [ ] Tester les filtres (Toutes/Terminées/Archivées)
- [ ] Changer le statut d'une tâche (étape 3D ou Html/TasksSummary.html)
- [ ] Vérifier que le changement est sauvegardé
- [ ] Archiver une tâche
- [ ] Vérifier qu'elle n'apparaît plus dans "Toutes"
- [ ] Consulter le filtre "Archivées"
- [ ] Créer une deuxième tâche
- [ ] Vérifier que les deux tâches coexistent
- [ ] Rafraîchir la page (F5)
- [ ] Vérifier que les données persistent

### Test responsive

- [ ] Tester sur desktop (> 1024px)
- [ ] Tester sur tablette (768px)
- [ ] Tester sur mobile (< 768px)
- [ ] Tester sur petit mobile (< 480px)
- [ ] Vérifier que tous les éléments sont accessibles
- [ ] Vérifier que le texte reste lisible

---

## 🆘 Dépannage

### La tâche ne s'enregistre pas

1. Vérifier la console (F12) pour voir les erreurs
2. S'assurer que le bouton appelle bien `saveTask()`
3. Vérifier que tous les champs requis sont remplis

### La tâche ne s'affiche pas dans le tableau

1. Vérifier le localStorage dans les outils développeur
2. S'assurer que la clé `"tasksData"` existe
3. Vérifier que les fichiers JSON sont accessibles (Data/)
4. Rafraîchir la page (F5)

### Le tableau est vide

1. Vérifier les logs console pour voir si les données sont chargées
2. S'assurer que le filtre "Toutes" est actif
3. Vérifier que les tâches ne sont pas toutes archivées
4. Créer une nouvelle tâche de test

### Les liens ne fonctionnent pas

1. Vérifier que vous ouvrez les fichiers depuis le bon dossier
2. S'assurer que les chemins relatifs sont corrects
3. Utiliser l'index.html comme point de départ

---

## 📞 Support

Pour toute question ou problème :

- Consulter la **documentation** dans les dossiers `Etapes/`
- Vérifier les **reviews de conformité** (REVIEW_*.md)
- Lire le **TEST_GUIDE.md**
- Consulter le **README.md** principal

---

**Bonne utilisation 🎉!**

---

© 2025 Catherine Braun et Laurent Boyer - Formation LPDWCA  
UE 5.2.2 - Langages JS API et initiation Framework JS
