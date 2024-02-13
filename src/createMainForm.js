import { createButton, createFormInputs, createLabels, createSelect, createTextArea, createPlaceholder, setSelected, addIdsToElements } from "./formUtilities";
import { addItemToProjectListener, removePopUpListener } from "./eventListeners";
import { createProjectSelector } from "./createMyProjectSidebar";

function createMainForm() {
    const mainFormDiv = document.createElement('div');
    mainFormDiv.classList.add('main-page-form');
    const formFields = createFormInputs('text', 'text', 'date');
    const formTextArea = createTextArea();
    const formSelect = createSelect('select-field','Low', 'Medium', 'High');
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority-select');
    priorityLabel.textContent = 'Priority';
    const projectSelect = createProjectSelector(true);
    const projectLabel = document.createElement('label');
    projectLabel.setAttribute('for', 'project-list-select');
    projectLabel.textContent = 'Project';
    formFields.push(formTextArea);
    formFields.push(formSelect);
    formFields.push(projectSelect);
    addIdsToElements(formFields, 'Title', 'Description', 'Due Date', 'Notes', 'Priority Select', 'Project List Select');
    createPlaceholder(formFields, 'Title', 'Description', 'Due Date', 'Notes', 'Priority', 'Project');
    createPlaceholder(formTextArea, 'Notes');
    setSelected(projectSelect);
    const saveButton = createButton('Create item');
    addItemToProjectListener(saveButton);
    const cancel = createButton('Close');
    removePopUpListener(cancel);
    priorityLabel.appendChild(formSelect);
    projectLabel.appendChild(projectSelect);
    formFields.pop();
    formFields.pop();
    formFields.push(priorityLabel);
    formFields.push(projectLabel);
    
    return {formFields, saveButton, cancel}
}

export {createMainForm};