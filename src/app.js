import './css/style.css';
import { project } from './tasks';
import { displayProject } from './dom';

const allProjects = [];

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

    return {
        generateTaskId,
        generateProjectId
    };
})();

const createProjectBtn = document.querySelector('#create-project-btn');
createProjectBtn.addEventListener('click', (event) => {
    const form = document.forms['create-project-form'];

    if (!form.elements['new-project-title'].value) { alert('Please ensure all fields are filled correctly.') }
    else {
        const newProject = project(form.elements['new-project-title'].value, idGenerator.generateProjectId());
        allProjects.push(newProject);
        displayProject(newProject.getTitle, newProject.getId, document.querySelector('#project-list ul'));
    };
});