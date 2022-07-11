export const project = (title, id) => {
    return {
        get getTitle() {return title},
        set setTitle(newTitle) {title = newTitle},

        get getId() {return id},
    };
};