# Étape 3B : Enregistrer une tâche dans le localStorage

## 📋 Résumé de l'implémentation

Cette étape permet d'enregistrer les données d'une nouvelle tâche dans le `localStorage` du navigateur.

---

## 🔧 a) Configuration du bouton et gestion du clic

### Modifications apportées au formulaire HTML (`Form-ToDoList.html`)

#### 1. Ajout de l'attribut `id` au formulaire

```html
<form id="taskForm" action="traitement.php" method="POST" enctype="multipart/form-data">
```

**Pourquoi ?** Permet d'accéder facilement au formulaire via JavaScript pour utiliser la méthode `reset()`.

#### 2. Modification du bouton de soumission

**Avant :**

```html
<input type="submit" value="Créer la tâche">
```

**Après :**

```html
<button type="button" onclick="saveTask()">Créer la tâche</button>
```

**Explications :**

- `type="button"` : Empêche la soumission par défaut du formulaire (pas d'envoi au serveur)
- `onclick="saveTask()"` : Déclenche la fonction JavaScript lors du clic

#### 3. Ajustement du CSS pour le nouveau bouton

```css
input[type="submit"], input[type="reset"], button[type="button"] {
    padding: 14px 30px;
    border: none;
    border-radius: 8px;
    font-size: 1em;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
}
```

---

## 💻 b) Implémentation de la fonction `saveTask()`

### Structure complète de la fonction

La fonction suit les 6 étapes demandées :

### **Étape 1 : Lecture des champs du formulaire**

```javascript
let libelle = document.getElementById('libelle').value;
let description = document.getElementById('description').value;
let assignation = document.getElementById('assignation').value;
let date_creation = document.getElementById('date_creation').value;
let date_echeance = document.getElementById('date_echeance').value;
let temps_passe = document.getElementById('temps_passe').value;
let idPriorite = document.getElementById('priorite').value;
```

**Méthode utilisée :** `document.getElementById('id')`

- Retourne un objet représentant l'élément HTML
- La propriété `.value` contient la valeur saisie

**Pour les boutons radio :**

```javascript
let idTaskProgression = document.querySelector('input[name="idTaskProgression"]:checked').value;
```

**Pour les liens de documentation (champs multiples) :**

```javascript
let documentationInputs = document.querySelectorAll('input[name="documentation[]"]');
let documentation = [];
documentationInputs.forEach(input => {
    if (input.value.trim() !== '') {
        documentation.push(input.value.trim());
    }
});
```

### **Étape 2 : Initialiser la liste des tâches et vérifier le localStorage**

```javascript
let tasksList = [];

let existingTasks = localStorage.getItem("tasksData");

if (existingTasks) {
    tasksList = JSON.parse(existingTasks);
}
```

**Explications :**

- `localStorage.getItem("tasksData")` : Récupère les données avec la clé `"tasksData"`
- Si des données existent, `JSON.parse()` convertit la chaîne JSON en tableau JavaScript
- Sinon, `tasksList` reste un tableau vide

**À propos de localStorage :**

- API de stockage du navigateur
- Données conservées même après fermeture du navigateur
- Stocke uniquement des chaînes de caractères
- Accès via : `localStorage.getItem(clé)` et `localStorage.setItem(clé, valeur)`

### **Étape 3 : Créer une nouvelle tâche**

```javascript
let newId = tasksList.length + 1;

let dateCreationISO = new Date(date_creation).toISOString();

let newTask = {
    id: newId,
    libelle: libelle,
    date_de_creation: dateCreationISO,
    date_de_modification: dateCreationISO,
    date_de_completion: null,
    "compteur_de_temps_passe(mn)": parseInt(temps_passe) || 0,
    description: description,
    assignation: assignation,
    documentation: documentation,
    fichiers_joints: [],
    idPriorite: idPriorite,
    idTaskProgression: idTaskProgression,
    idAcademicSubject: "1",
    idSkillsLevel: "2",
    idDifficultyRating: "2",
    subTask_ids: []
};
```

**Points clés :**

- **ID auto-incrémenté :** `tasksList.length + 1` (simule MySQL AUTO_INCREMENT)
- **Propriété `.length` :** Retourne le nombre d'éléments dans le tableau
- **Format ISO 8601 :** `.toISOString()` convertit la date en format UTC standard
- **Valeurs par défaut :** Certains champs absents du formulaire ont des valeurs par défaut

### **Étape 4 : Ajouter la tâche à la liste**

```javascript
tasksList.push(newTask);
```

**Méthode `push()` :**

- Ajoute un élément à la fin d'un tableau
- Modifie le tableau original
- Retourne la nouvelle longueur du tableau

### **Étape 5 : Enregistrer dans le localStorage**

```javascript
let tasksJSON = JSON.stringify(tasksList);
localStorage.setItem("tasksData", tasksJSON);
```

**Méthodes utilisées :**

- `JSON.stringify()` : Convertit un objet/tableau JavaScript en chaîne JSON
- `localStorage.setItem(clé, valeur)` : Enregistre dans le localStorage

**Vérification dans le navigateur :**

1. Ouvrir les Outils de développement (F12)
2. Aller dans l'onglet **Application** (Chrome) ou **Stockage** (Firefox)
3. Section **Storage** → **Local Storage**
4. Voir la clé `tasksData` avec les données JSON

### **Étape 6 : Réinitialiser le formulaire**

```javascript
document.getElementById('taskForm').reset();
setCreationDate();
```

**Méthode `reset()` :**

- Réinitialise tous les champs du formulaire à leurs valeurs par défaut
- Équivalent au bouton "Réinitialiser"

**Note :** Appel de `setCreationDate()` pour remettre la date actuelle (car `reset()` l'efface)

---

## 🧪 Tests progressifs avec `console.log()`

La fonction inclut des `console.log()` pour suivre chaque étape :

```javascript
console.log("🚀 Début de la fonction saveTask()");
console.log("📋 Étape 1 : Lecture des champs du formulaire");
console.log("📝 Données du formulaire :", { libelle, description, ... });
console.log("📦 Étape 2 : Vérification du localStorage");
// ... etc.
```

**Pour tester :**

1. Ouvrir la Console (F12 → Console)
2. Remplir le formulaire
3. Cliquer sur "Créer la tâche"
4. Observer les messages dans la console

---

## ✅ Validation du formulaire (optionnel)

Bien que `type="button"` n'active pas la validation HTML5 automatique, vous pouvez ajouter :

```javascript
// Au début de saveTask()
let form = document.getElementById('taskForm');
if (!form.checkValidity()) {
    form.reportValidity();
    return;
}
```

**Méthodes disponibles :**

- `checkValidity()` : Retourne `true` si tous les champs sont valides
- `reportValidity()` : Affiche les messages d'erreur pour les champs invalides

---

## 📚 Ressources MDN WebDocs

- [localStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)
- [JSON.parse()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [JSON.stringify()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [Array.prototype.push()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [Array.length](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [HTMLFormElement.reset()](https://developer.mozilla.org/fr/docs/Web/API/HTMLFormElement/reset)
- [checkValidity()](https://developer.mozilla.org/fr/docs/Web/API/HTMLFormElement/checkValidity)
- [reportValidity()](https://developer.mozilla.org/fr/docs/Web/API/HTMLFormElement/reportValidity)

---

## 🎯 Points importants à retenir

1. **localStorage stocke uniquement des chaînes** → Utiliser `JSON.stringify()` et `JSON.parse()`
2. **ID auto-incrémenté** → `tasksList.length + 1`
3. **Format de date ISO 8601** → `.toISOString()`
4. **type="button"** → Pas de soumission automatique du formulaire
5. **console.log()** → Essentiel pour le débogage

---

## 🚀 Prochaines étapes suggérées

- Ajouter les champs manquants au formulaire (idAcademicSubject, idSkillsLevel, idDifficultyRating)
- Implémenter la validation du formulaire avec `checkValidity()`
- Créer une page pour afficher la liste des tâches enregistrées
- Ajouter la gestion des fichiers joints (PDF)
