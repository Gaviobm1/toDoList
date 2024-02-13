import { createButton, createFormInputs, createLabels, createSelect, createTextArea } from "./formUtilities";
import { getProject } from "./localStorage";
import { attachElementToContainer } from "./popUpUtilities";
import { saveEditedItem, removePopUpListener} from "./eventListeners";
import { createProjectSelector } from "./createMyProjectSidebar";

function createEditForm() {
    const mainFormDiv = document.createElement('div');
    mainFormDiv.classList.add('main-page-form');
    const formFields = createFormInputs('text', 'text', 'date');
    const formTextArea = createTextArea();
    const formSelect = createSelect('select-field-edit', 'Low', 'Medium', 'High');
    const projectSelect = createProjectSelector(true);
    projectSelect.setAttribute('Id', 'edit-item-selector');
    formFields.push(formTextArea);
    formFields.push(formSelect);
    formFields.push(projectSelect)
    const formLabels = createLabels(formFields, 'Title', 'Description', 'Due Date', 'Notes', 'Priority Select', 'Project');
    const submitButton = createButton('Add item');
    submitButton.setAttribute('Id', 'edit-form-add-button');
    const cancel = createButton('Close');
    removePopUpListener(cancel);
    
    return {formLabels, projectSelect, submitButton, cancel}
}



function editItem() {
    const gparent = this.parentNode;
    const parent = gparent.parentNode;
    let projectName = parent.querySelector('.item-project').textContent;
    const title = parent.querySelector('.item-title').textContent;
    const date = parent.querySelector('.item-date').textContent;
    const project = getProject(projectName, title, date);
    const form = createEditForm();
    const projects = form.projectSelect.children
    for (let i = 0; i < projects.length; i++) {
        if(projects[i].value === projectName) {
            projects[i].setAttribute('selected', 'selected')
        }
    }
    form.formLabels[0].lastChild.value = project['title'];
    form.formLabels[1].lastChild.value = project['description'];
    form.formLabels[2].lastChild.value = project['dueDate'];
    form.formLabels[3].lastChild.value = project['notes'];
    form.formLabels[4].lastChild.value = project['priority'];
    form.submitButton.textContent = 'Save changes';
    saveEditedItem(form.submitButton, projectName, project);
    const bound = attachElementToContainer.bind(form);
    bound();
}

export {editItem}
