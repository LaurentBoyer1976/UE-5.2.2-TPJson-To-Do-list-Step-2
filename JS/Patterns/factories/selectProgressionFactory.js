export default class Task {
    constructor(data) {
        if (!data || typeof data !== 'object') {
            throw new Error("Données invalides pour créer une tâche.");
        }

    }
}