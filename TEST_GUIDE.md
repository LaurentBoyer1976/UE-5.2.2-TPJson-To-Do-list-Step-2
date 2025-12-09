# 🧪 Guide de test - Application To-Do List

## Test complet de l'application (Étapes 3B, 3C et 3D)

### 1️⃣ Créer des tâches de test

1. Ouvrir `Html/Form-ToDoList.html` dans votre navigateur
2. Créer plusieurs tâches avec des données différentes :

#### Tâche 1 - Urgent

- **Nom** : Laurent Boyer
- **Email** : <laurent@exemple.com>
- **Titre** : TP HTML/CSS urgent
- **Description** : Créer une page responsive
- **Priorité** : Important & Urgent (1)
- **Statut** : En cours (3)
- **Date d'échéance** : Aujourd'hui + 2 jours

#### Tâche 2 - Normal

- **Nom** : Marie Dupont
- **Email** : <marie@exemple.com>
- **Titre** : Apprendre JavaScript
- **Description** : Étudier les fonctions fléchées
- **Priorité** : Moyen (3)
- **Statut** : Nouvelle tâche (1)
- **Date d'échéance** : Aujourd'hui + 7 jours

#### Tâche 3 - Bas

- **Nom** : Jean Martin
- **Email** : <jean@exemple.com>
- **Titre** : Réviser le CSS
- **Description** : Revoir Flexbox et Grid
- **Priorité** : Bas (4)
- **Statut** : Bloqué (4)
- **Date d'échéance** : Aujourd'hui - 1 jour

### 2️⃣ Vérifier le localStorage

1. Ouvrir les outils de développement (**F12**)
2. Aller dans **Application** > **Local Storage**
3. Vérifier que la clé `tasksData` existe
4. Voir le tableau JSON avec les 3 tâches

### 3️⃣ Afficher le récapitulatif

1. Cliquer sur le lien "📋 Voir toutes les tâches"
   OU
   Ouvrir directement `Html/TasksSummary.html`

2. Vérifier que le tableau affiche :
   - 3 lignes de tâches
   - Les badges colorés pour les priorités
   - Les badges colorés pour les statuts
   - Les dates formatées en français

### 4️⃣ Vérifier la console

Dans la console (F12 > Console), vous devriez voir :

```text
🚀 Chargement de la page de récapitulatif des tâches
✅ Des tâches ont été trouvées dans le localStorage
📊 Nombre de tâches récupérées : 3
📋 Liste des tâches : [...]
📄 État du document : loading
📄 État du document : interactive
📄 État du document : complete
✅ Document entièrement chargé
📥 Chargement des données de référence...
✅ Priorités chargées : [...]
✅ Statuts de progression chargés : [...]
✅ Sujets académiques chargés : [...]
🏗️ Génération du tableau HTML des tâches
📌 Traitement de la tâche 1 : {...}
  🔍 Priorité trouvée : Important
  🔍 Statut trouvé : en cours
  🔍 Sujet trouvé : HTML/CSS
📌 Traitement de la tâche 2 : {...}
  🔍 Priorité trouvée : Moyen
  🔍 Statut trouvé : Nouvelle tâche
  🔍 Sujet trouvé : HTML/CSS
📌 Traitement de la tâche 3 : {...}
  🔍 Priorité trouvée : Bas
  🔍 Statut trouvé : Terminé
  🔍 Sujet trouvé : HTML/CSS
✅ HTML généré avec succès
✅ Tableau inséré dans le DOM
```

### 5️⃣ Tests de navigation

1. Depuis le récapitulatif, cliquer sur "+ Nouvelle tâche"
   → Doit retourner au formulaire

2. Depuis le formulaire, cliquer sur "📋 Voir toutes les tâches"
   → Doit afficher le récapitulatif

3. Créer une nouvelle tâche et accepter la redirection
   → Doit afficher le récapitulatif avec la nouvelle tâche

### 6️⃣ Test du cas "Aucune tâche"

1. Ouvrir la console (F12)
2. Exécuter : `localStorage.removeItem("tasksData")`
3. Recharger la page `TasksSummary.html`
4. Vérifier qu'un message s'affiche :
   - Icône 📋
   - "Aucune tâche enregistrée"
   - Bouton "Créer une tâche"

### 7️⃣ Test responsive

1. Ouvrir les outils de développement (F12)
2. Activer le mode responsive (Ctrl+Shift+M)
3. Tester différentes tailles d'écran :
   - Mobile (375px)
   - Tablette (768px)
   - Desktop (1024px)

---

## ✅ Checklist de validation

- [ ] Les tâches se créent correctement
- [ ] Les données sont sauvegardées dans localStorage
- [ ] Le tableau affiche toutes les tâches

1. Créer une nouvelle tâche et accepter la redirection
   → Doit afficher le récapitulatif avec la nouvelle tâche

### 6️⃣ **NOUVEAU** - Test de changement de statut (Étape 3D)

1. Dans le récapitulatif, repérer la colonne "Actions"
2. Chaque tâche affiche 7 boutons numérotés (statuts 1-7)
3. Le bouton correspondant au statut actuel est coloré et désactivé

**Test 1 : Changement simple**

1. Cliquer sur un bouton de statut différent (ex: bouton "3" pour "En cours")
2. Vérifier que :
   - Un message de confirmation s'affiche
   - Le badge de statut change de couleur
   - Le nouveau bouton devient actif (coloré et désactivé)
   - L'ancien bouton redevient cliquable
3. Vérifier dans localStorage que le statut a changé

**Test 2 : Passage à "Terminé"**

1. Cliquer sur le bouton "6" (Terminé)
2. Vérifier que :
   - Le badge devient vert
   - Le message confirme le changement
3. Vérifier dans localStorage que `date_de_completion` est définie

**Test 3 : Archivage**

1. Avoir au moins 2 tâches actives
2. Cliquer sur le bouton "7" (Archivé) sur une tâche
3. Vérifier que :
   - La tâche disparaît du tableau
   - Le compteur se met à jour (ex: "2 tâche(s) active(s) / 3 total")
   - Un message confirme l'archivage

### 7️⃣ **NOUVEAU** - Test des filtres (Étape 3D)

**Préparation** : Créer des tâches avec différents statuts :

- 2 tâches "En cours" (statut 3)
- 1 tâche "Terminée" (statut 6)
- 1 tâche "Archivée" (statut 7)

**Test du filtre "Toutes"** (par défaut)

- Affiche toutes les tâches SAUF les archivées
- Bouton "Toutes" est actif (fond vert foncé)
- Compteur : "3 tâche(s) active(s) / 4 total"

**Test du filtre "Terminées"**

1. Cliquer sur le bouton "Terminées"
2. Vérifier que :
   - Seules les tâches avec statut 6 s'affichent
   - Le bouton "Terminées" devient actif
   - Compteur : "1 tâche(s) terminée(s) / 4 total"

**Test du filtre "Archivées"**

1. Cliquer sur le bouton "Archivées"
2. Vérifier que :
   - Seules les tâches archivées s'affichent
   - Le bouton "Archivées" devient actif
   - Compteur : "1 tâche(s) archivée(s) / 4 total"

**Test changement de statut avec filtre actif**

1. Activer le filtre "Terminées"
2. Archiver la tâche terminée (bouton "7")
3. Vérifier que :
   - La tâche disparaît
   - Message "Aucune tâche terminée" s'affiche
4. Cliquer sur "Archivées" pour retrouver la tâche

### 8️⃣ Test de persistance des données

1. Créer plusieurs tâches
2. Changer des statuts
3. Archiver une tâche
4. **Fermer le navigateur complètement**
5. Rouvrir `Html/TasksSummary.html`
6. Vérifier que :
   - Toutes les données sont conservées
   - Les statuts sont corrects
   - Les filtres fonctionnent

### 9️⃣ Test des attributs data-*

1. Ouvrir les outils de développement (F12)
2. Aller dans l'onglet "Éléments" / "Inspector"
3. Inspecter un bouton de statut
4. Vérifier la présence de :
   - `data-task-id="X"` (ID de la tâche)
   - `data-status-id="Y"` (ID du statut)

### 🔟 Test du cas "Aucune tâche"

1. Ouvrir la console (F12)
2. Exécuter : `localStorage.removeItem("tasksData")`
3. Recharger la page `TasksSummary.html`
4. Vérifier qu'un message s'affiche :
   - Icône 📋
   - "Aucune tâche enregistrée"
   - Bouton "Créer une tâche"

### 1️⃣1️⃣ Test responsive

1. Ouvrir les outils de développement (F12)
2. Activer le mode responsive (Ctrl+Shift+M)
3. Tester différentes tailles d'écran :
   - Mobile (375px)
   - Tablette (768px)
   - Desktop (1024px)
4. Vérifier que :
   - Les boutons de statut s'adaptent (wrap)
   - Le tableau reste lisible
   - Les filtres restent accessibles

---

## ✅ Checklist de validation complète

### Étape 3B - Création

- [ ] Les tâches se créent correctement
- [ ] Les données sont sauvegardées dans localStorage
- [ ] Le formulaire se réinitialise après création
- [ ] L'ID s'auto-incrémente

### Étape 3C - Affichage

- [ ] Le tableau affiche toutes les tâches
- [ ] Les priorités s'affichent avec les bons badges colorés
- [ ] Les statuts s'affichent avec les bons badges colorés
- [ ] Les dates sont formatées en français
- [ ] Les liens de navigation fonctionnent
- [ ] La console affiche tous les logs
- [ ] Le message "Aucune tâche" s'affiche quand le localStorage est vide
- [ ] Le design est responsive

### Étape 3D - Mise à jour et archivage

- [ ] Les boutons de statut s'affichent pour chaque tâche
- [ ] Le statut actuel est visuellement distinct (coloré et désactivé)
- [ ] Le changement de statut fonctionne
- [ ] Le badge de statut se met à jour
- [ ] Les boutons d'action se mettent à jour
- [ ] L'archivage masque la tâche du tableau
- [ ] Les tâches archivées sont conservées dans localStorage
- [ ] Les filtres fonctionnent correctement :
  - [ ] "Toutes" affiche tout sauf archivées
  - [ ] "Terminées" affiche seulement statut 6
  - [ ] "Archivées" affiche seulement statut 7
- [ ] Le bouton de filtre actif est mis en évidence
- [ ] Le compteur se met à jour correctement
- [ ] La date de complétion est ajoutée pour les tâches terminées
- [ ] Les attributs `data-*` sont présents sur les boutons

---

## 🐛 Problèmes courants

### Le tableau ne s'affiche pas

**Cause** : Chemin incorrect vers les fichiers JSON

**Solution** : Vérifier que les fichiers JSON sont dans `../Data/` par rapport à `Html/`

### Les badges ne sont pas colorés

**Cause** : Les ID ne correspondent pas aux classes CSS

**Solution** : Vérifier que les `idPriorite` et `idTaskProgression` sont corrects

### Erreur "Cannot read property 'find' of undefined"

**Cause** : Les données de référence ne sont pas chargées

**Solution** : Vérifier que `loadReferenceData()` s'exécute avant `generateTasksTable()`

### Les dates ne s'affichent pas correctement

**Cause** : Format de date invalide

**Solution** : Vérifier que la date est au format ISO 8601

### Les boutons de statut ne changent pas la tâche

**Cause** : Fonction `updateTaskStatus()` non appelée ou erreur JavaScript

**Solution** :

1. Vérifier la console pour les erreurs
2. Vérifier que `onclick="updateTaskStatus(...)"`  est bien présent
3. Vérifier que les paramètres sont corrects

### Le filtre ne fonctionne pas

**Cause** : Variable `currentFilter` non définie ou événement mal géré

**Solution** :

1. Vérifier que `currentFilter` est déclaré en global
2. Vérifier que `filterTasks()` met à jour la classe `active` du bouton

---

## 💡 Astuces de débogage

### Voir toutes les données localStorage

```javascript
console.log(localStorage.getItem("tasksData"));
```

### Voir les données formatées

```javascript
console.table(JSON.parse(localStorage.getItem("tasksData")));
```

### Réinitialiser les données

```javascript
localStorage.removeItem("tasksData");
```

### Ajouter des données de test directement

```javascript
let testTasks = [
    {
        id: 1,
        libelle: "Tâche de test",
        date_de_creation: new Date().toISOString(),
        date_de_modification: new Date().toISOString(),
        date_de_completion: null,
        "compteur_de_temps_passe(mn)": 0,
        description: "Description de test",
        assignation: "Test User",
        documentation: [],
        fichiers_joints: [],
        idPriorite: "1",
        idTaskProgression: "1",
        idAcademicSubject: "1",
        idSkillsLevel: "2",
        idDifficultyRating: "2",
        subTask_ids: []
    }
];
localStorage.setItem("tasksData", JSON.stringify(testTasks));
```

### Vérifier les attributs data-* d'un bouton

```javascript
let btn = document.querySelector('.status-btn');
console.log('Task ID:', btn.dataset.taskId);
console.log('Status ID:', btn.dataset.statusId);
```

---

## 📊 Résultats attendus

Après avoir créé 3 tâches de test avec différents statuts, vous devriez voir :

### Vue "Toutes" (par défaut)

```text
Compteur : 3 tâche(s) active(s) / 3 total

Tableau :
┌────┬─────────────────────┬──────────────┬──────────┬──────────┬─────────────┬─────────────────────┬──────────────┐
│ ID │ Titre              │ Assigné à    │ Sujet    │ Priorité │ Statut      │ Date de création    │ Actions      │
├────┼─────────────────────┼──────────────┼──────────┼──────────┼─────────────┼─────────────────────┼──────────────┤
│ 1  │ TP HTML/CSS urgent │ Laurent B... │ HTML/CSS │ Important│ en cours    │ 09/12/2025 10:30   │ [1][2][3]... │
│ 2  │ Apprendre JS       │ Marie Du...  │ HTML/CSS │ Moyen    │ Nouvelle... │ 09/12/2025 10:35   │ [1][2][3]... │
│ 3  │ Réviser le CSS     │ Jean Mar...  │ HTML/CSS │ Bas      │ Bloqué      │ 09/12/2025 10:40   │ [1][2][3]... │
└────┴─────────────────────┴──────────────┴──────────┴──────────┴─────────────┴─────────────────────┴──────────────┘
```

### Après archivage de la tâche 3

```text
Compteur : 2 tâche(s) active(s) / 3 total

(La tâche 3 n'apparaît plus)
```

### Vue "Archivées"

```text
Compteur : 1 tâche(s) archivée(s) / 3 total

Tableau :
┌────┬─────────────────────┬──────────────┬──────────┬──────────┬─────────────┬─────────────────────┬──────────────┐
│ ID │ Titre              │ Assigné à    │ Sujet    │ Priorité │ Statut      │ Date de création    │ Actions      │
├────┼─────────────────────┼──────────────┼──────────┼──────────┼─────────────┼─────────────────────┼──────────────┤
│ 3  │ Réviser le CSS     │ Jean Mar...  │ HTML/CSS │ Bas      │ Archivé     │ 09/12/2025 10:40   │ [1][2][3]... │
└────┴─────────────────────┴──────────────┴──────────┴──────────┴─────────────┴─────────────────────┴──────────────┘
```

---

Bon test ! 🚀
