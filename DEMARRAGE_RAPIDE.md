# 🚀 Démarrage rapide - To-Do List

## 📖 Bienvenue

Cette application vous permet de gérer vos tâches simplement et efficacement.

---

## ⚡ Démarrage en 3 étapes

### 1️⃣ Ouvrir l'application

**Option A : Page d'accueil** (recommandé)

- Ouvrir le fichier `Html/Home.html` dans votre navigateur
- Choisir l'action souhaitée

**Option B : Direct**

- Pour créer une tâche → Ouvrir `Html/Form-ToDoList.html`
- Pour voir les tâches → Ouvrir `Html/TasksSummary.html`

### 2️⃣ Créer votre première tâche

1. Remplir le formulaire :
   - **Nom et prénom** (obligatoire)
   - **Titre de la tâche** (obligatoire)
   - Description, priorité, statut, etc.

2. Cliquer sur **"Créer la tâche"**

3. Choisir si vous voulez voir toutes les tâches

### 3️⃣ Gérer vos tâches

Dans le récapitulatif :

- **Voir** toutes vos tâches dans un tableau
- **Changer le statut** en cliquant sur les boutons numérotés
- **Filtrer** par : Toutes / Terminées / Archivées
- **Archiver** les tâches terminées

---

## 🎯 Fonctionnalités principales

### ➕ Créer des tâches

- Formulaire complet et intuitif
- Sauvegarde automatique
- Pas besoin de compte ou de serveur

### 📊 Visualiser

- Tableau clair et organisé
- Badges colorés pour priorités et statuts
- Compteur de tâches

### 🔄 Mettre à jour

- Changement de statut en un clic
- 7 statuts disponibles :
  1. Nouvelle tâche
  2. Conception
  3. En cours
  4. Bloqué
  5. En attente de validation
  6. Terminé
  7. Archivé

### 🔍 Filtrer

- **Toutes** : Tâches actives (sauf archivées)
- **Terminées** : Seulement les tâches finalisées
- **Archivées** : Tâches archivées

---

## 💡 Conseils d'utilisation

### Workflow suggéré

1. **Créer** vos tâches au fur et à mesure
2. **Suivre** l'avancement avec les statuts
3. **Marquer** les tâches terminées (statut 6)
4. **Archiver** les anciennes tâches (statut 7)

### Statuts recommandés

- **1 - Nouvelle tâche** : Tâche juste créée
- **2 - Conception** : Phase de réflexion/planification
- **3 - En cours** : Travail actif
- **4 - Bloqué** : Problème rencontré
- **5 - En attente** : Attend validation ou retour
- **6 - Terminé** : Fini mais visible
- **7 - Archivé** : Masqué du tableau principal

### Priorités

- **1 - Important** : Urgent et critique
- **2 - Haut** : Important mais pas urgent
- **3 - Moyen** : Standard
- **4 - Bas** : Peut attendre
- **5 - Non important** : Très basse priorité

---

## 🔧 Outils de développement

### Console (F12)

- Voir les logs détaillés
- Déboguer en cas de problème

### Application > Local Storage

- Voir les données sauvegardées
- Clé `tasksData` contient toutes les tâches

### Mode responsive (Ctrl+Shift+M)

- Tester sur mobile/tablette
- Design adaptatif

---

## 📱 Utilisation mobile

L'application est **responsive** et fonctionne sur :

- 📱 Smartphones
- 📟 Tablettes
- 💻 Ordinateurs

**Astuce** : Ajoutez la page à votre écran d'accueil pour un accès rapide !

---

## ❓ Questions fréquentes

### Mes données sont-elles sauvegardées ?

✅ Oui, automatiquement dans le **localStorage** de votre navigateur.

**Attention** : Les données sont locales à ce navigateur. Ne pas vider le cache.

### Puis-je accéder à mes tâches sur un autre appareil ?

❌ Non, les données sont stockées localement dans votre navigateur.

**Solution future** : Version avec base de données en ligne.

### Combien de tâches puis-je créer ?

📊 Le localStorage peut stocker environ **5-10 MB** selon les navigateurs.

**Estimation** : ~1000-5000 tâches selon leur taille.

### Puis-je modifier une tâche existante ?

📝 Actuellement, vous pouvez :

- ✅ Changer le statut
- ❌ Modifier les autres informations

**À venir** : Fonctionnalité d'édition complète.

### Comment supprimer une tâche ?

🗑️ Utilisez le statut **7 - Archivé** pour masquer la tâche.

**Note** : La tâche reste en mémoire mais n'apparaît plus.

### Les tâches archivées sont-elles perdues ?

❌ Non, elles sont toujours dans le localStorage.

✅ Utilisez le filtre **"Archivées"** pour les voir.

---

## 🐛 Problèmes courants

### Le tableau ne s'affiche pas

**Solutions** :

1. Vérifier la console (F12) pour les erreurs
2. S'assurer que les fichiers JSON sont présents dans `/Data/`
3. Rafraîchir la page (F5)

### Mes tâches ont disparu

**Causes possibles** :

- Cache/localStorage vidé
- Navigation privée (données non persistantes)
- Changement de navigateur

**Prévention** : Exporter vos données régulièrement (fonctionnalité à venir).

### Le changement de statut ne fonctionne pas

**Vérifications** :

1. Ouvrir la console (F12)
2. Chercher les erreurs JavaScript
3. Vérifier que localStorage est activé

---

## 📚 Documentation

### Guides détaillés

- **`README.md`** : Vue d'ensemble du projet
- **`README_ETAPE_3B.md`** : Création de tâches
- **`README_ETAPE_3C.md`** : Affichage des tâches
- **`README_ETAPE_3D.md`** : Mise à jour et archivage

### Autres fichiers

- **`TEST_GUIDE.md`** : Tests complets
- **`RESUME_FINAL.md`** : Résumé technique

---

## 💻 Pour les développeurs

### Structure des données (localStorage)

```json
{
  "tasksData": [
    {
      "id": 1,
      "libelle": "Titre de la tâche",
      "date_de_creation": "2025-12-09T10:30:00.000Z",
      "date_de_modification": "2025-12-09T10:30:00.000Z",
      "date_de_completion": null,
      "compteur_de_temps_passe(mn)": 0,
      "description": "Description...",
      "assignation": "Nom Prénom",
      "documentation": ["url1", "url2"],
      "fichiers_joints": [],
      "idPriorite": "3",
      "idTaskProgression": "1",
      "idAcademicSubject": "1",
      "idSkillsLevel": "2",
      "idDifficultyRating": "2",
      "subTask_ids": []
    }
  ]
}
```

### Commandes console utiles

```javascript
// Voir toutes les tâches
console.table(JSON.parse(localStorage.getItem("tasksData")));

// Compter les tâches
JSON.parse(localStorage.getItem("tasksData")).length;

// Vider les données
localStorage.removeItem("tasksData");

// Exporter en JSON
copy(localStorage.getItem("tasksData"));
```

---

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont dans le CSS :

- Vert principal : `#2d5016`
- Vert secondaire : `#4a7c59`
- Vert clair : `#6ba368`

### Statuts

Les statuts sont dans `/Data/taskProgression.json`

### Priorités

Les priorités sont dans `/Data/priorityStatus.json`

---

## 🚀 Prochaines étapes

### Utilisation immédiate

1. Créer vos vraies tâches
2. Organiser par priorité
3. Suivre l'avancement

### Exploration

1. Tester toutes les fonctionnalités
2. Essayer les filtres
3. Archiver des tâches anciennes

### Développement

1. Lire la documentation technique
2. Comprendre le code
3. Proposer des améliorations

---

## 📞 Support

### En cas de problème

1. Consulter la section "Problèmes courants" ci-dessus
2. Vérifier la console du navigateur (F12)
3. Lire les fichiers README correspondants

### Contribuer

Le projet est open source et accueille les contributions !

---

## ✅ Checklist de démarrage

- [ ] J'ai ouvert `Html/Home.html`
- [ ] J'ai créé ma première tâche
- [ ] J'ai vu le récapitulatif
- [ ] J'ai changé le statut d'une tâche
- [ ] J'ai testé les filtres
- [ ] J'ai archivé une tâche
- [ ] J'ai compris le système de priorités
- [ ] Je sais où sont stockées mes données

---

**🎉 Vous êtes prêt à utiliser l'application ! 🎉**

Bonne gestion de vos tâches ! 📋✨
