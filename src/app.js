import './css/style.css';

export const idGenerator = (function () {
    let projectCount = 0;
    let taskCount = 0;

    function generateTaskId() {
        taskCount++;
        return taskCount;
    };

    function generateProjectId() {
        projectCount++;
        return projectCount;
    };
})();