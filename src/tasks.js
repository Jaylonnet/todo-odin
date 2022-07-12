export const project = (title, id) => {
    const tasks = [];

    function addTask(task) {
        tasks.push(task);
    };
    return {
        get getTitle() {return title},
        set setTitle(newTitle) {title = newTitle},

        get getId() {return id},
        addTask,
    };
};