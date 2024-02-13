import { createButton } from "./formUtilities"
import { removeWarningPopUp, removeProjectFromLocalStorage, removeItem, removeProjectFormListener, removePopUpListener, simpleRemoveListener } from "./eventListeners";
import { makePopUpTemplate } from "./popUpUtilities";
import { createProjectSelector } from "./createMyProjectSidebar";
import { appendChildren } from "./DOMUtilities";

function createDeleteProjectForm() {
    const projectSelector = createProjectSelector();
    projectSelector.removeChild(projectSelector.querySelector("option[value='My To Do List']"));
    projectSelector.setAttribute('Id', 'delete-selector');
    const button = createButton('Delete');
    removeProjectFormListener(button);
    const cancel = createButton('Cancel');
    simpleRemoveListener(cancel);
    const popUp = makePopUpTemplate();
    popUp['container'].appendChild(projectSelector);
    popUp['container'].appendChild(button);
    popUp['container'].appendChild(cancel);
    popUp['background'].appendChild(popUp['container']);
    document.body.appendChild(popUp['background']);
    }

function deleteProjectWarningForm() {
    const popUp = makePopUpTemplate();
    const project = document.getElementById('delete-selector').value;
    const question = document.createElement('p');
    question.textContent = `Are you sure you want to delete ${project}`;
    const button = createButton('Delete');
    removeProjectFromLocalStorage(button, project);
    const cancel = createButton('Cancel');
    removeWarningPopUp(cancel);
    appendChildren(popUp.container, question, button, cancel);
    document.body.appendChild(popUp.container);
}


function deleteItemForm() {
    const gparent = this.parentNode;
    const parent = gparent.parentNode;
    const item = parent.querySelector('.item-title').textContent;
    const project = parent.querySelector('.item-project').textContent;
    const date = parent.querySelector('.item-date').textContent;
    const confirmP = document.createElement('p');
    confirmP.textContent = `Are you sure you want to delete ${item} from ${project}?`;
    const confirm = createButton('Delete');
    removeItem(confirm, item, project, date );
    const cancel = createButton('Cancel');
    removePopUpListener(cancel);
    return { confirmP, confirm, cancel};
}

export {createDeleteProjectForm, deleteProjectWarningForm, deleteItemForm}