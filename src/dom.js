
export function displayProject(title, id, nodeToAppend) {
    const li = document.createElement('li');
    const textBox = document.createElement('input');
    textBox.value = title;
    li.append(textBox);
    li.dataset.projectId = id;
    const options = document.createElement('span');
    options.setAttribute('id', 'options');
    options.append(createIcon('fa-pen-to-square'));
    options.append(createIcon('fa-trash-can'));
    li.append(options);
    nodeToAppend.append(li);
};

function createIcon(iconClass) {
    const icon = document.createElement('i');
    icon.classList.add(`fa-solid`, iconClass);
    return icon;
};