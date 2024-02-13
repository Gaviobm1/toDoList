import { createButton } from "./formUtilities";
import { addProjectSidebarButton, addItemToProjectListener, removeWarningPopUp} from "./eventListeners";
import { createProjectSelector } from "./createMyProjectSidebar";

function addItemToProjectForm() {
    const select = createProjectSelector();
    const itemTitle = document.getElementById('title').value;
    select.setAttribute('Id', 'project-list-select');
    const projectLabel = document.createAttribute('label');
    projectLabel.setAttribute('for', 'project-list-select');
    projectLabel.textContent = 'Project';
    projectLabel.appendChild(select);
    const addButton = createButton('Add item to project');
    addItemToProjectListener(addButton);
    const projectButton = createButton('New Project');
    addProjectSidebarButton(projectButton);
    const cancel = createButton('Done');
    removeWarningPopUp(cancel);
    return {select, addButton, projectButton, cancel}
}

export {addItemToProjectForm}