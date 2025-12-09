# Étape 3B - Enregistrement dans localStorage

## 📄 Fichier

**`Form-ToDoList-3B.html`** - Formulaire avec JavaScript pour sauvegarde localStorage

---

## ✅ Fonctionnalités implémentées

### 1. Bouton avec événement JavaScript ✅

```html
<input type="submit" value="Créer la tâche" onclick="saveTask()">
```

### 2. Fonction saveTask() ✅

Implémente toutes les étapes demandées :

1. Lecture des champs du formulaire
2. Vérification localStorage existant
3. Création objet JSON
4. Ajout avec `push()`
5. Sauvegarde avec `JSON.stringify()`
6. Réinitialisation formulaire

### 3. Auto-incrémentation ID ✅

```javascript
let newId = tasksList.length + 1;
```

### 4. Dates ISO 8601 ✅

```javascript
let dateCreation = new Date().toISOString();
```

### 5. Logs console détaillés ✅

```javascript
console.log("🚀 Début de la fonction saveTask()");
console.log("📋 Étape 1 : Lecture des champs");
// etc.
```

---

## 🎯 Conformité

**Score : 9/9 critères = 100%**

Voir [REVIEW_3B.md](REVIEW_3B.md) pour détails complets.

---

## 🔗 Liens

- **Étape précédente** : [2A - Formulaire HTML/CSS](../2A_Formulaire_HTML_CSS/)
- **Étape suivante** : [3C - Affichage des tâches](../3C_Affichage_Taches/)
- **Documentation** : [README_ETAPE_3B.md](../../README_ETAPE_3B.md)
