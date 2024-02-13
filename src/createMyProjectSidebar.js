import { createButton, createSelect } from "./formUtilities";
import { addProjectSidebarButton, deleteProjectListener, popUpMainForm } from "./eventListeners";
import { appendChildren } from "./DOMUtilities";
import './style.css';

function createMyProjectsSidebar() {
    const projectSidebarDiv = document.createElement('div');
    projectSidebarDiv.classList.add('project-sidebar');
    const projectSidebarHeading = document.createElement('p');
    projectSidebarHeading.classList.add('heading');
    projectSidebarHeading.textContent = 'My Projects';
    const projectSelect = createProjectSelector(false);
    projectSelect.setAttribute('Id', 'project-selector');
    const projectSelectDiv = document.createElement('div');
    projectSelectDiv.classList.add('project-select-div');
    appendChildren(projectSelectDiv, projectSidebarHeading, projectSelect)
    const addProjectButton = createButton('New Project');
    addProjectButton.setAttribute('Id', 'project-sidebar-add-button');
    addProjectSidebarButton(addProjectButton);
    const deleteButton = createButton('Delete Project');
    deleteButton.setAttribute('Id', 'project-sidebar-delete-button');
    deleteProjectListener(deleteButton)
    const addItemButton = createButton('+');
    addItemButton.setAttribute('Id', 'quick-add-button');
    popUpMainForm(addItemButton);
    appendChildren(projectSidebarDiv, projectSelectDiv, addProjectButton, deleteButton, addItemButton);
    document.body.appendChild(projectSidebarDiv);
}

function createProjectSelector(isEdit) {
    const projectSelect = createSelect('project-select-option', ...Object.keys(localStorage));
    if (isEdit === false) {
        const seeAll = document.createElement('option');
        seeAll.setAttribute('value', 'View All');
        seeAll.setAttribute('selected', 'true');
        seeAll.classList.add('project-select-option');
        seeAll.textContent = 'View All';
        projectSelect.appendChild(seeAll);
    }
    return projectSelect;
}

export {createMyProjectsSidebar, addProjectSidebarButton,createProjectSelector}


