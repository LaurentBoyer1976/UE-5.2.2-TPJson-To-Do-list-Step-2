# Étape 3C : Synthèse ou récapitulatif des Tâches

## 🎯 Objectif

Créer une page qui affiche un tableau récapitulatif de toutes les tâches stockées dans le `localStorage` du navigateur. Le contenu est inséré dynamiquement dans le corps du tableau HTML (`<tbody>`) une fois que la page a été entièrement chargée.

---

## 📋 A) Point de départ - Structure de base du tableau HTML

### Structure HTML du tableau

```html
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Assigné à</th>
            <th>Sujet</th>
            <th>Priorité</th>
            <th>Statut</th>
            <th>Date de création</th>
        </tr>
    </thead>
    <tbody id="tasksTableBody">
        <!-- Les lignes seront générées par JavaScript -->
    </tbody>
</table>
```

**Rappel : Table Object Model (T.O.M)**

Un tableau HTML est structuré en 3 parties principales :

- `<thead>` : En-tête du tableau (colonnes)
- `<tbody>` : Corps du tableau (lignes de données)
- `<tfoot>` : Pied du tableau (optionnel)

Chaque ligne (`<tr>`) contient des cellules :

- `<th>` : Cellule d'en-tête (Header)
- `<td>` : Cellule de données (Data)

### Variables globales

```javascript
let priorityList = [];
let taskProgressionList = [];
let academicSubjectsList = [];
```

**Portée globale** : Ces variables sont déclarées en dehors de toute fonction, ce qui les rend accessibles depuis n'importe quelle fonction du script. Elles conservent leurs valeurs pendant toute la durée de vie de la page.

---

## 📥 B) Lecture des tâches depuis localStorage

### Implémentation

```javascript
// Déclarer un tableau vide pour contenir la liste des tâches
let tasksList = [];

// Lire le contenu du localStorage avec la même clé utilisée pour l'enregistrement
let storedTasks = localStorage.getItem("tasksData");

// Vérifier si des données existent
if (storedTasks) {
    console.log("✅ Des tâches ont été trouvées dans le localStorage");
    // Convertir la chaîne JSON en tableau JavaScript
    tasksList = JSON.parse(storedTasks);
    console.log("📊 Nombre de tâches récupérées :", tasksList.length);
    console.log("📋 Liste des tâches :", tasksList);
} else {
    console.log("ℹ️ Aucune tâche trouvée dans le localStorage");
}
```

### Explications

- **`localStorage.getItem("tasksData")`** : Récupère les données avec la clé `"tasksData"`
- **`JSON.parse()`** : Convertit la chaîne JSON en objet/tableau JavaScript exploitable
- **Variable globale** : `tasksList` est accessible dans toutes les fonctions

**À propos de la portée globale** : Une variable globale est déclarée en dehors de toute fonction. Elle peut être lue et modifiée par n'importe quelle fonction du script. Cela permet de partager des données entre plusieurs fonctions.

---

## ⏳ C) Attendre que le document soit entièrement chargé

### Problématique

Lorsqu'une page Web est chargée :

1. Le `<head>` est chargé et exécuté en premier
2. Puis le `<body>` est chargé

**Problème** : Si vous essayez d'accéder au `<tbody>` avant que le `<body>` soit chargé, vous obtiendrez une erreur car l'élément n'existe pas encore dans le DOM.

### Solution : événement `document.onreadystatechange`

```javascript
document.onreadystatechange = function() {
    console.log("📄 État du document :", document.readyState);
    
    if (document.readyState === "complete") {
        console.log("✅ Document entièrement chargé");
        
        // Charger les données de référence puis générer le tableau
        loadReferenceData();
    }
};
```

### États possibles de `document.readyState`

- **`"loading"`** : Le document est en cours de chargement
- **`"interactive"`** : Le document a été analysé, mais les ressources (images, CSS) ne sont pas encore chargées
- **`"complete"`** : Le document et toutes les ressources sont entièrement chargés

**Fonction de rappel (callback)** : La fonction assignée à `document.onreadystatechange` est appelée automatiquement chaque fois que l'état du document change.

---

## 🏗️ D) Écrire le tableau HTML dynamique

### Fonction principale : `generateTasksTable()`

```javascript
function generateTasksTable() {
    console.log("🏗️ Génération du tableau HTML des tâches");
    
    const tbody = document.getElementById('tasksTableBody');
    const taskCount = document.getElementById('taskCount');
    
    // Afficher le nombre de tâches
    taskCount.textContent = `${tasksList.length} tâche(s) enregistrée(s)`;
    
    // Si aucune tâche, afficher un message
    if (tasksList.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="no-tasks">
                    <div class="no-tasks-icon">📋</div>
                    <h2>Aucune tâche enregistrée</h2>
                    <p>Commencez par créer votre première tâche !</p>
                    <a href="Form-ToDoList.html" class="btn">Créer une tâche</a>
                </td>
            </tr>
        `;
        return;
    }
    
    // Variable pour construire le HTML
    let htmlContent = '';
    
    // Parcourir toutes les tâches avec forEach()
    tasksList.forEach((task, index) => {
        console.log(`📌 Traitement de la tâche ${index + 1} :`, task);
        
        // Rechercher les données de référence avec find()
        const priorityObj = priorityList.find(
            element => element.idPriorite == task.idPriorite
        );
        const priorityLabel = priorityObj ? priorityObj.priorite : 'Non défini';
        
        const progressObj = taskProgressionList.find(
            element => element.idTaskProgression == task.idTaskProgression
        );
        const progressLabel = progressObj ? progressObj.taskProgressionStatus : 'Non défini';
        
        const subjectObj = academicSubjectsList.find(
            element => element.idAcademicSubject == task.idAcademicSubject
        );
        const subjectLabel = subjectObj ? subjectObj.academicSubjectName : 'Non défini';
        
        // Formater la date de création
        const dateCreation = new Date(task.date_de_creation);
        const dateFormatted = dateCreation.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        // Construire la ligne HTML avec template literals (backticks)
        htmlContent += `
            <tr>
                <td>${task.id}</td>
                <td><strong>${task.libelle}</strong></td>
                <td>${task.assignation}</td>
                <td>${subjectLabel}</td>
                <td>
                    <span class="badge priority-${task.idPriorite}">
                        ${priorityLabel}
                    </span>
                </td>
                <td>
                    <span class="badge status-${task.idTaskProgression}">
                        ${progressLabel}
                    </span>
                </td>
                <td>${dateFormatted}</td>
            </tr>
        `;
    });
    
    // Insérer le HTML dans le tbody
    tbody.insertAdjacentHTML("beforeend", htmlContent);
    
    console.log("✅ Tableau inséré dans le DOM");
}
```

---

## 🔍 À propos de la méthode `find()`

### Syntaxe et fonctionnement

```javascript
const result = array.find(callback);
```

La méthode `find()` :

- **Parcourt** chaque élément du tableau
- **Applique** la fonction de rappel (callback) à chaque élément
- **Retourne** le premier élément pour lequel le callback renvoie `true`
- **Retourne** `undefined` si aucun élément ne correspond

### Exemple avec fonction fléchée

```javascript
const priorityObj = priorityList.find(
    element => element.idPriorite == task.idPriorite
);
```

**Décomposition** :

- `element` : Paramètre représentant chaque élément du tableau pendant l'itération
- `=>` : Syntaxe de fonction fléchée (arrow function)
- `element.idPriorite == task.idPriorite` : Condition de recherche
- **Retour** : `true` ou `false` (résultat de la comparaison)

### Exemple équivalent avec fonction classique

```javascript
const priorityObj = priorityList.find(function(element) {
    return element.idPriorite == task.idPriorite;
});
```

### Pourquoi une comparaison retourne un booléen ?

L'opérateur `==` effectue une **comparaison** :

- Si les valeurs sont égales → retourne `true`
- Si les valeurs sont différentes → retourne `false`

Exemples :

```javascript
5 == 5        // true
"1" == 1      // true (conversion implicite)
"abc" == "xyz" // false
```

---

## 🎨 Template Literals et Interpolation

### Syntaxe

Les **template literals** (littéraux de gabarit) utilisent les **backticks** `` ` `` au lieu des guillemets.

```javascript
let htmlContent = `
    <tr>
        <td>${task.id}</td>
        <td>${task.libelle}</td>
    </tr>
`;
```

### Avantages

1. **Chaînes multi-lignes** : Pas besoin de concaténation
2. **Interpolation** : `${expression}` insère dynamiquement des valeurs
3. **Lisibilité** : Le code ressemble au HTML final

### Exemples d'interpolation

```javascript
let name = "Laurent";
let age = 30;

// Interpolation simple
let message = `Bonjour ${name} !`;
// Résultat : "Bonjour Laurent !"

// Interpolation avec expression
let info = `Vous avez ${age + 1} ans l'année prochaine`;
// Résultat : "Vous avez 31 ans l'année prochaine"

// Interpolation avec fonction
let html = `<h1>${name.toUpperCase()}</h1>`;
// Résultat : "<h1>LAURENT</h1>"
```

---

## ➕ Méthode `insertAdjacentHTML()`

### Syntaxe

```javascript
element.insertAdjacentHTML(position, htmlString);
```

### Positions disponibles

- **`"beforebegin"`** : Avant l'élément lui-même
- **`"afterbegin"`** : Juste après la balise ouvrante de l'élément (premier enfant)
- **`"beforeend"`** : Juste avant la balise fermante de l'élément (dernier enfant)
- **`"afterend"`** : Après l'élément lui-même

### Exemple dans notre code

```javascript
tbody.insertAdjacentHTML("beforeend", htmlContent);
```

Cela ajoute `htmlContent` **à la fin** de `<tbody>`, juste avant `</tbody>`.

### Schéma visuel

```html
<!-- beforebegin -->
<tbody id="tasksTableBody">
    <!-- afterbegin -->
    <tr>Ligne existante</tr>
    <!-- beforeend --> ← Notre insertion ici
</tbody>
<!-- afterend -->
```

---

## 🔄 Méthode `forEach()` sur les tableaux

### Syntaxe

```javascript
array.forEach(callback);
```

### Fonctionnement

La méthode `forEach()` :

- **Parcourt** chaque élément du tableau
- **Exécute** la fonction callback pour chaque élément
- **Ne retourne rien** (contrairement à `map()` ou `filter()`)

### Exemple dans notre code

```javascript
tasksList.forEach((task, index) => {
    console.log(`📌 Traitement de la tâche ${index + 1} :`, task);
    // Traitement de chaque tâche
});
```

**Paramètres du callback** :

- `task` : L'élément actuel du tableau
- `index` : L'index de l'élément (optionnel)

---

## 🌐 Chargement des données de référence avec `fetch()`

### Fonction asynchrone

```javascript
async function loadReferenceData() {
    try {
        // Charger les données de priorité
        const priorityResponse = await fetch('../Data/priorityStatus.json');
        const priorityData = await priorityResponse.json();
        priorityList = priorityData.priorityStatus;
        
        // Charger les autres données...
        
        // Générer le tableau une fois tout chargé
        generateTasksTable();
        
    } catch (error) {
        console.error("❌ Erreur lors du chargement :", error);
    }
}
```

**Explications** :

- **`async`** : Indique que la fonction contient du code asynchrone
- **`await`** : Attend que la promesse soit résolue avant de continuer
- **`fetch()`** : Charge un fichier (JSON, HTML, etc.)
- **`.json()`** : Convertit la réponse en objet JavaScript

---

## 🎯 Points clés de l'implémentation

### ✅ Ce qui a été implémenté

1. **Structure du tableau HTML** avec `<thead>` et `<tbody>`
2. **Variables globales** pour les données de référence
3. **Lecture du localStorage** avec `getItem()` et `JSON.parse()`
4. **Attente du chargement** avec `document.onreadystatechange`
5. **Génération dynamique** avec `forEach()` et template literals
6. **Recherche des données** avec `find()`
7. **Insertion dans le DOM** avec `insertAdjacentHTML()`
8. **Lien de navigation** depuis le formulaire

### 🔧 Fonctionnalités supplémentaires

- **Badges colorés** pour les priorités et statuts
- **Formatage des dates** en français
- **Message** si aucune tâche n'existe
- **Compteur** de tâches
- **Lien retour** vers le formulaire
- **Redirection optionnelle** après création d'une tâche

---

## 📚 Ressources MDN WebDocs

- [Array.prototype.forEach()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Array.prototype.find()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [Template literals](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals)
- [Element.insertAdjacentHTML()](https://developer.mozilla.org/fr/docs/Web/API/Element/insertAdjacentHTML)
- [document.readyState](https://developer.mozilla.org/fr/docs/Web/API/Document/readyState)
- [Fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)
- [Fonctions fléchées](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Portée des variables (scope)](https://developer.mozilla.org/fr/docs/Glossary/Scope)

---

## 🧪 Comment tester

1. **Créer des tâches** via `Form-ToDoList.html`
2. **Cliquer** sur le lien "📋 Voir toutes les tâches"
3. **Vérifier** que le tableau s'affiche correctement
4. **Ouvrir la console** (F12) pour voir les logs détaillés
5. **Vérifier** que les priorités et statuts correspondent bien

---

## 🚀 Améliorations possibles

- Ajouter des filtres (par priorité, par statut)
- Ajouter une fonction de recherche
- Permettre la modification et suppression des tâches
- Ajouter un tri par colonne (clic sur l'en-tête)
- Exporter les données en CSV ou PDF
- Ajouter une pagination si beaucoup de tâches
