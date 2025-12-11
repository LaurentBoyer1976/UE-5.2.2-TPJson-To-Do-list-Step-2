# 📋 To-Do List - Application de gestion de tâches

Application Web de gestion de tâches utilisant JavaScript, localStorage et JSON.

## 🎯 Objectifs pédagogiques

- Manipulation du DOM avec JavaScript
- Utilisation du localStorage du navigateur
- Gestion des données JSON
- Programmation événementielle
- Génération dynamique de contenu HTML

---

## 📁 Structure du projet

```text
.
├── Html/
│   ├── Form-ToDoList.html      # Formulaire de création de tâches
│   ├── TasksSummary.html       # Page de récapitulatif des tâches
│   └── step1E.html
├── JS/
│   ├── script.js
│   ├── subTask.js
│   ├── API/
│   │   └── api.js
│   ├── Patterns/
│   │   ├── constructors/
│   │   └── factories/
│   └── utilities/
│       └── idGenerator.js
├── Data/
│   ├── tasksData.json          # Exemple de données
│   ├── priorityStatus.json     # Niveaux de priorité
│   ├── taskProgression.json    # Statuts de progression
│   ├── academic_subjects.json  # Sujets académiques
│   └── ...
├── Style/
│   ├── baseStyle.css
│   └── formStyle.css
└── README_ETAPE_*.md           # Documentation des étapes
```

---

## 🚀 Fonctionnalités implémentées

### ✅ Étape 3B : Enregistrement des tâches

**Fichier** : `Html/Form-ToDoList.html`

- Formulaire de création de tâches
- Validation des champs
- Sauvegarde dans localStorage
- Génération automatique d'ID
- Conversion des dates au format ISO 8601
- Réinitialisation du formulaire après soumission

**Documentation** : `README_ETAPE_3B.md`

### ✅ Étape 3C : Affichage des tâches

**Fichier** : `Html/TasksSummary.html`

- Lecture des tâches depuis localStorage
- Affichage dynamique dans un tableau HTML
- Résolution des clés étrangères (priorité, statut, sujet)
- Formatage des dates
- Badges colorés pour priorités et statuts
- Navigation entre les pages

**Documentation** : `README_ETAPE_3C.md`

### ✅ Étape 3D : Mise à jour du statut et archivage

**Fichier** : `Html/TasksSummary.html` (modifié)

- Changement interactif du statut des tâches
- Boutons de statut avec mise en évidence visuelle
- Archivage des tâches terminées
- Filtrage : Toutes / Terminées / Archivées
- Mise à jour automatique de l'affichage
- Utilisation des attributs HTML5 `data-*`
- Date de complétion pour les tâches terminées

**Documentation** : `README_ETAPE_3D.md`

---

## 🎓 Concepts clés utilisés

### JavaScript

- **DOM Manipulation** : `getElementById()`, `querySelector()`, `querySelectorAll()`
- **Événements** : `onclick`, `onreadystatechange`
- **Tableaux** : `forEach()`, `find()`, `filter()`, `push()`, `length`
- **Objets JSON** : `JSON.parse()`, `JSON.stringify()`
- **localStorage API** : `getItem()`, `setItem()`
- **Template literals** : Backticks et interpolation `${}`
- **Fonctions fléchées** : Arrow functions
- **Fetch API** : Chargement de fichiers JSON
- **Async/Await** : Programmation asynchrone
- **Attributs data-*** : `dataset` pour accéder aux attributs personnalisés

### HTML5

- **Formulaires** : Types d'input, validation native
- **Tableaux** : Structure `<table>`, `<thead>`, `<tbody>`
- **Attributs sémantiques** : `required`, `placeholder`, `type`
- **Attributs data-*** : Stockage de données personnalisées

### CSS3

- **Flexbox** : Mise en page flexible
- **Grid** : Grille responsive
- **Transitions** : Animations fluides
- **Media queries** : Design responsive

---

## 📖 Guide d'utilisation

### 1. Créer une nouvelle tâche

1. Ouvrir `Html/Form-ToDoList.html` dans un navigateur
2. Remplir le formulaire :
   - Nom et prénom (obligatoire)
   - Titre de la tâche (obligatoire)
   - Description
   - Date d'échéance
   - Priorité
   - Statut de progression
   - Liens de documentation
3. Cliquer sur "Créer la tâche"
4. Choisir si vous voulez voir toutes les tâches

### 2. Voir toutes les tâches

1. Ouvrir `Html/TasksSummary.html` dans un navigateur
2. Le tableau affiche toutes les tâches enregistrées
3. Cliquer sur "+ Nouvelle tâche" pour créer une autre tâche

---

## 🔧 Fonctionnement technique

### Sauvegarde dans localStorage

```javascript
// Étape 1 : Récupération des données existantes
let tasksList = [];
let existingTasks = localStorage.getItem("tasksData");
if (existingTasks) {
    tasksList = JSON.parse(existingTasks);
}

// Étape 2 : Création de la nouvelle tâche
let newTask = {
    id: tasksList.length + 1,
    libelle: "Titre de la tâche",
    // ... autres propriétés
};

// Étape 3 : Ajout à la liste
tasksList.push(newTask);

// Étape 4 : Sauvegarde
localStorage.setItem("tasksData", JSON.stringify(tasksList));
```

### Lecture et affichage

```javascript
// Étape 1 : Lecture du localStorage
let storedTasks = localStorage.getItem("tasksData");
let tasksList = JSON.parse(storedTasks);

// Étape 2 : Parcours des tâches
tasksList.forEach(task => {
    // Étape 3 : Résolution des clés étrangères
    const priority = priorityList.find(p => p.idPriorite == task.idPriorite);
    
    // Étape 4 : Génération du HTML
    let html = `<tr><td>${task.libelle}</td></tr>`;
    
    // Étape 5 : Insertion dans le DOM
    tbody.insertAdjacentHTML("beforeend", html);
});
```

---

## 🐛 Débogage

### Console du navigateur

Tous les fichiers incluent des `console.log()` détaillés pour suivre l'exécution :

```javascript
console.log("🚀 Début de la fonction");
console.log("📋 Données :", data);
console.log("✅ Opération réussie");
```

Pour ouvrir la console : **F12** → Onglet "Console"

### Vérification du localStorage

1. Ouvrir les outils de développement (**F12**)
2. Aller dans l'onglet **Application** (Chrome) ou **Stockage** (Firefox)
3. Sélectionner **Local Storage** → URL de votre page
4. Voir la clé `tasksData` avec les données JSON

---

## 📚 Ressources et références

### Documentation MDN WebDocs

- [localStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)
- [JSON](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Array methods](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Template literals](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals)
- [Fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)

### Documentation détaillée

- `README_ETAPE_3B.md` : Sauvegarde des tâches dans localStorage
- `README_ETAPE_3C.md` : Affichage dynamique du tableau récapitulatif

---

## 🎨 Design et UX

- **Police principale** : Lato (Google Fonts)
- **Police titres** : Playfair Display (Google Fonts)
- **Palette de couleurs** : Tons verts naturels (#2d5016, #4a7c59, #6ba368)
- **Design responsive** : S'adapte aux mobiles et tablettes
- **Feedback visuel** : Badges colorés, transitions, hover effects

---

## 🚧 Améliorations possibles

### Fonctionnalités

- [ ] Modification des tâches existantes
- [ ] Suppression de tâches
- [ ] Filtrage par priorité/statut
- [ ] Recherche de tâches
- [ ] Tri par colonne
- [ ] Export CSV/PDF
- [ ] Statistiques et graphiques
- [ ] Sous-tâches détaillées

### Technique

- [ ] Validation avancée du formulaire
- [ ] Gestion des erreurs
- [ ] Sauvegarde dans une base de données
- [ ] API REST pour synchronisation
- [ ] Progressive Web App (PWA)
- [ ] Mode hors ligne

---

## 👨‍💻 Développement

### Prérequis

- Navigateur Web moderne (Chrome, Firefox, Edge)
- Éditeur de code (VS Code recommandé)
- Connaissances en HTML, CSS, JavaScript

### Installation

1. Cloner ou télécharger le projet
2. Ouvrir les fichiers HTML directement dans un navigateur
3. Aucune installation ou serveur requis (fichiers statiques)

### Tests

1. Ouvrir la console du navigateur (F12)
2. Suivre les logs pour chaque opération
3. Vérifier le localStorage dans les outils de développement

---

## 📝 Notes importantes

### Limitations du localStorage

- **Capacité** : ~5-10 MB selon les navigateurs
- **Sécurité** : Données accessibles en JavaScript (ne pas stocker de données sensibles)
- **Persistance** : Données conservées jusqu'à suppression manuelle
- **Portée** : Spécifique au domaine/protocole

### Bonnes pratiques

- Toujours vérifier si `localStorage` est disponible
- Utiliser `try/catch` pour les opérations JSON
- Valider les données avant sauvegarde
- Nettoyer régulièrement les données obsolètes

---

## 📄 Licence

Projet éducatif - Formation Développement Web

---

## 👤 Auteur

Catherine Braun & Laurent Boyer - Formation LPDWCA  
UE 5.2.2 - Langages JS API et initiation Framework JS

---

## 📅 Dernière mise à jour

9 décembre 2025
