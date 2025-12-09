/*const SubTaskH3 = () => {
    return `
        <legend>Sous-Tâches Associées (to_do_list_associee)</legend>
    `
}*/
const subTask = () => {
    return `
                <fieldset>
                    <legend>Sous-Tâches Associées</legend>
                    <div class="subtask-group">
                        <h3>sous-tâche</h3>
                        <div class="subtask-list" id="todo-a-list">
                            <div class="subtask-item">
                                <label for="subTask"></label>
                                <input id="subTask" type="text" name="subTaskA[]" placeholder="SubTask (Ex: Structure HTML)">
                                <label>
                                    <textarea  name="commentaireA[]" placeholder="Commentaire (Ex: Créer la structure sémantique)"></textarea>
                                </label>
                            </div>
                            <button type="button" class="btn-add" onclick="addSubTask()">+ Ajouter sous-tâche</button>
                        </div>
                    </div>
               </fieldset>
    `
};