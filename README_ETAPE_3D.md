# Étape 3D : Archivage des tâches et mise à jour du statut

## 🎯 Objectif

Ajouter la possibilité de changer le statut d'une tâche (En cours, Terminée, Annulée, Archivée) et masquer les tâches terminées/archivées du tableau principal tout en les conservant dans le localStorage.

---

## 📋 A) Nouvelle colonne dans le tableau des tâches

### Modification de la structure HTML

Ajout d'une colonne "Actions" dans l'en-tête du tableau :

```html
<thead>
    <tr>
        <th>ID</th>
        <th>Titre</th>
        <th>Assigné à</th>
        <th>Sujet</th>
        <th>Priorité</th>
        <th>Statut</th>
        <th>Date de création</th>
        <th>Actions</th> <!-- Nouvelle colonne -->
    </tr>
</thead>
```

### Génération des boutons de statut

Pour chaque tâche, des boutons sont générés pour tous les statuts possibles :

```javascript
let statusButtons = '';
taskProgressionList.forEach(status => {
    const isActive = status.idTaskProgression == task.idTaskProgression;
    const activeClass = isActive ? `active-${status.idTaskProgression}` : '';
    const disabled = isActive ? 'disabled' : '';
    
    statusButtons += `
        <button 
            class="status-btn ${activeClass}" 
            data-task-id="${task.id}" 
            data-status-id="${status.idTaskProgression}"
            onclick="updateTaskStatus(${task.id}, '${status.idTaskProgression}')"
            ${disabled}
            title="${status.taskProgressionStatus}">
            ${status.idTaskProgression}
        </button>
    `;
});
```

**Explications** :

- **`type="button"`** : Empêche la soumission du formulaire
- **`data-task-id`** et **`data-status-id`** : Attributs HTML5 personnalisés pour stocker des données
- **`onclick`** : Appel de la fonction avec les paramètres
- **`disabled`** : Le bouton du statut actuel est désactivé
- **`activeClass`** : Classe CSS pour mettre en évidence le statut actuel

### Affichage visuel des statuts

Le statut actuel est mis en évidence avec une couleur spécifique :

```css
.status-btn.active-1 { background-color: #3498db; } /* Nouvelle tâche */
.status-btn.active-3 { background-color: #f39c12; } /* En cours */
.status-btn.active-4 { background-color: #e74c3c; } /* Bloqué */
.status-btn.active-6 { background-color: #27ae60; } /* Terminé */
.status-btn.active-7 { background-color: #95a5a6; } /* Archivé */
```

---

## 🔄 B) Interaction pour la mise à jour du statut

### Déclenchement de l'événement

Lorsqu'un utilisateur clique sur un bouton :

```html
<button onclick="updateTaskStatus(taskId, newStatusId)">
```

### Utilisation des attributs data-*

Les attributs `data-*` permettent de stocker des informations directement dans les éléments HTML :

```html
<button data-task-id="42" data-status="3">En cours</button>
```

**Accès en JavaScript** :

```javascript
button.dataset.taskId;  // retourne "42"
button.dataset.status;  // retourne "3"
```

**Avantages** :

- Valides en HTML5
- Passent la validation W3C
- Faciles à manipuler avec JavaScript
- Permettent de stocker plusieurs valeurs par élément

---

## ⚙️ C) Gestion du changement de statut en JavaScript

### Algorithme complet implémenté

```javascript
function updateTaskStatus(taskId, newStatusId) {
    console.log(`🔄 Mise à jour du statut de la tâche ${taskId} vers ${newStatusId}`);
    
    // 1. Lire la liste des tâches depuis le localStorage
    let storedTasks = localStorage.getItem("tasksData");
    if (!storedTasks) {
        console.error("❌ Aucune tâche trouvée");
        return;
    }
    
    tasksList = JSON.parse(storedTasks);
    
    // 2. Identifier la tâche avec find()
    const taskToUpdate = tasksList.find(task => task.id == taskId);
    
    if (!taskToUpdate) {
        console.error(`❌ Tâche ${taskId} non trouvée`);
        return;
    }
    
    // 3. Mettre à jour la propriété statut
    taskToUpdate.idTaskProgression = newStatusId;
    taskToUpdate.date_de_modification = new Date().toISOString();
    
    // Si terminée, ajouter la date de completion
    if (newStatusId == "6") {
        taskToUpdate.date_de_completion = new Date().toISOString();
    }
    
    // 4. Enregistrer dans le localStorage
    localStorage.setItem("tasksData", JSON.stringify(tasksList));
    
    // 5. Mettre à jour l'affichage
    if (newStatusId == "7") {
        // Tâche archivée : régénérer le tableau
        generateTasksTable(currentFilter);
    } else {
        // Sinon : mettre à jour seulement la ligne
        updateTaskRow(taskId);
    }
}
```

### Étapes détaillées

#### 1. Lecture depuis localStorage

```javascript
let storedTasks = localStorage.getItem("tasksData");
tasksList = JSON.parse(storedTasks);
```

**Pourquoi relire ?** Pour s'assurer d'avoir la version la plus récente, au cas où d'autres onglets auraient modifié les données.

#### 2. Identification de la tâche avec find()

```javascript
const taskToUpdate = tasksList.find(task => task.id == taskId);
```

**La méthode `find()`** :

- Parcourt le tableau
- Applique la fonction de rappel à chaque élément
- Retourne le **premier élément** où la condition est vraie
- Retourne `undefined` si aucun élément ne correspond

**Fonction fléchée** : `task => task.id == taskId`

- `task` : Paramètre (élément actuel)
- `=>` : Opérateur de fonction fléchée
- `task.id == taskId` : Condition (retourne `true` ou `false`)

#### 3. Mise à jour des propriétés

```javascript
taskToUpdate.idTaskProgression = newStatusId;
taskToUpdate.date_de_modification = new Date().toISOString();

if (newStatusId == "6") {
    taskToUpdate.date_de_completion = new Date().toISOString();
}
```

**Logique** :

- Le statut est mis à jour
- La date de modification est mise à jour
- Si le statut devient "Terminé" (6), on ajoute la date de complétion

#### 4. Sauvegarde dans localStorage

```javascript
localStorage.setItem("tasksData", JSON.stringify(tasksList));
```

Conversion du tableau en chaîne JSON puis sauvegarde.

#### 5. Mise à jour de l'affichage

Deux stratégies selon le nouveau statut :

**a) Tâche archivée → Régénérer tout le tableau**

```javascript
if (newStatusId == "7") {
    generateTasksTable(currentFilter);
}
```

Pourquoi ? Car les tâches archivées sont masquées par défaut.

**b) Autre statut → Mise à jour partielle**

```javascript
else {
    updateTaskRow(taskId);
}
```

Seulement la ligne concernée est mise à jour pour de meilleures performances.

---

## 🔄 Mise à jour partielle d'une ligne

### Fonction `updateTaskRow()`

```javascript
function updateTaskRow(taskId) {
    // Trouver la tâche
    const task = tasksList.find(t => t.id == taskId);
    
    // Trouver la ligne dans le DOM
    const row = document.querySelector(`tr[data-task-id="${taskId}"]`);
    
    // Mettre à jour le badge de statut
    const statusObj = taskProgressionList.find(
        s => s.idTaskProgression == task.idTaskProgression
    );
    const statusLabel = statusObj ? statusObj.taskProgressionStatus : 'Non défini';
    
    row.cells[5].innerHTML = `
        <span class="badge status-${task.idTaskProgression}">
            ${statusLabel}
        </span>
    `;
    
    // Régénérer les boutons d'action
    // ... (code de génération des boutons)
}
```

**Méthodes utilisées** :

- **`querySelector()`** : Sélectionne un élément par sélecteur CSS
- **`row.cells[5]`** : Accède à la 6ème cellule de la ligne (index 5)
- **`.innerHTML`** : Remplace le contenu HTML de l'élément

---

## 🎁 D) Fonctionnalités bonus implémentées

### 1. Filtrage des tâches

Des boutons permettent de filtrer l'affichage :

```html
<button class="filter-btn active" onclick="filterTasks('all')">Toutes</button>
<button class="filter-btn" onclick="filterTasks('6')">Terminées</button>
<button class="filter-btn" onclick="filterTasks('7')">Archivées</button>
```

**Fonction de filtrage** :

```javascript
function filterTasks(filter) {
    currentFilter = filter;
    
    // Mettre à jour l'apparence des boutons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Régénérer le tableau
    generateTasksTable(filter);
}
```

### 2. Génération avec filtres

La fonction `generateTasksTable()` accepte maintenant un paramètre de filtre :

```javascript
function generateTasksTable(filter = 'all') {
    let filteredTasks;
    
    if (filter === 'all') {
        // Toutes sauf archivées
        filteredTasks = tasksList.filter(task => task.idTaskProgression != "7");
    } else if (filter === '6') {
        // Seulement terminées
        filteredTasks = tasksList.filter(task => task.idTaskProgression == "6");
    } else if (filter === '7') {
        // Seulement archivées
        filteredTasks = tasksList.filter(task => task.idTaskProgression == "7");
    }
    
    // Générer le tableau avec les tâches filtrées
    // ...
}
```

### 3. Masquage des tâches archivées

Par défaut, les tâches archivées (statut 7) ne sont pas affichées dans le tableau principal. Elles restent dans le localStorage mais sont filtrées à l'affichage.

**Avantages** :

- Interface moins encombrée
- Données conservées pour l'historique
- Possibilité de les consulter via le filtre "Archivées"

---

## 🎨 Améliorations visuelles

### Boutons de statut stylisés

```css
.status-btn {
    padding: 6px 12px;
    border: 2px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.status-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.status-btn:disabled {
    cursor: not-allowed;
    opacity: 0.6;
}
```

### Boutons de filtre

```css
.filter-btn {
    padding: 8px 16px;
    border: 2px solid #4a7c59;
    background-color: white;
    cursor: pointer;
}

.filter-btn.active {
    background-color: #2d5016;
    color: white;
}
```

---

## 🔑 Points clés à retenir

### Attributs data-*

- Format : `data-nom-attribut="valeur"`
- Accès JS : `element.dataset.nomAttribut`
- Valides HTML5 et W3C
- Utiles pour stocker des informations personnalisées

### Méthode find()

- **Syntaxe** : `array.find(callback)`
- **Retour** : Premier élément correspondant ou `undefined`
- **Callback** : Fonction retournant `true` ou `false`

### Mise à jour du DOM

- **Complète** : Régénérer tout le tableau
- **Partielle** : Modifier seulement les éléments concernés
- **Choix** : Dépend de l'ampleur des changements

### Filtrage de tableaux

- **Méthode `filter()`** : Crée un nouveau tableau avec les éléments correspondants
- **Condition** : Fonction retournant `true` pour inclure l'élément

---

## 📊 Flux de données

```text
1. Utilisateur clique sur bouton de statut
   ↓
2. Fonction updateTaskStatus() appelée
   ↓
3. Lecture du localStorage
   ↓
4. Recherche de la tâche avec find()
   ↓
5. Mise à jour des propriétés
   ↓
6. Sauvegarde dans localStorage
   ↓
7. Mise à jour de l'affichage
   ├─→ Si archivée : Régénérer tout
   └─→ Sinon : Mise à jour partielle
```

---

## 🧪 Tests suggérés

### Test 1 : Changement de statut simple

1. Créer une tâche avec statut "Nouvelle tâche"
2. Cliquer sur le bouton "3" (En cours)
3. Vérifier que :
   - Le badge change de couleur
   - Le bouton "3" devient actif (coloré et désactivé)
   - Un message de confirmation s'affiche
   - La modification est sauvegardée (vérifier localStorage)

### Test 2 : Archivage d'une tâche

1. Avoir au moins 2 tâches actives
2. Cliquer sur le bouton "7" (Archivé) d'une tâche
3. Vérifier que :
   - La tâche disparaît du tableau
   - Le compteur se met à jour
   - Elle apparaît dans le filtre "Archivées"

### Test 3 : Filtrage

1. Créer plusieurs tâches avec différents statuts
2. Tester chaque filtre :
   - "Toutes" : Affiche tout sauf archivées
   - "Terminées" : Affiche seulement statut 6
   - "Archivées" : Affiche seulement statut 7

### Test 4 : Date de complétion

1. Marquer une tâche comme "Terminé" (6)
2. Vérifier dans localStorage que `date_de_completion` est définie

---

## 📚 Ressources MDN WebDocs

- [Attributs data-*](https://developer.mozilla.org/fr/docs/Learn/HTML/Howto/Use_data_attributes)
- [HTMLElement.dataset](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/dataset)
- [Array.prototype.filter()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [querySelector()](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector)
- [HTMLTableRowElement.cells](https://developer.mozilla.org/fr/docs/Web/API/HTMLTableRowElement/cells)
- [Element.classList](https://developer.mozilla.org/fr/docs/Web/API/Element/classList)

---

## 🚀 Améliorations possibles

- Ajouter une confirmation avant archivage
- Permettre la restauration des tâches archivées
- Ajouter un tri par date/priorité
- Implémenter une recherche par texte
- Exporter les tâches filtrées en CSV
- Ajouter des statistiques (nombre par statut)
- Implémenter le drag & drop pour changer l'ordre
- Ajouter une timeline des changements de statut

---

## ✅ Résumé de l'implémentation

### Fichiers modifiés

- **`Html/TasksSummary.html`** :
  - Ajout colonne "Actions"
  - Boutons de changement de statut
  - Boutons de filtrage
  - Fonctions JavaScript :
    - `updateTaskStatus()` - Mise à jour du statut
    - `updateTaskRow()` - Mise à jour partielle
    - `filterTasks()` - Filtrage des tâches
    - `generateTasksTable(filter)` - Génération avec filtre

### Fonctionnalités

- ✅ Changement de statut interactif
- ✅ Mise en évidence du statut actuel
- ✅ Archivage avec masquage automatique
- ✅ Date de complétion pour tâches terminées
- ✅ Filtrage (Toutes / Terminées / Archivées)
- ✅ Mise à jour optimisée (partielle ou complète)
- ✅ Attributs data-* pour stocker les métadonnées
- ✅ Design responsive et intuitif

---

**Étape 3D terminée avec succès !** 🎉
