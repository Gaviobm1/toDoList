import { removePopUp, attachElementToContainer, doublePopRemove, simpleRemove } from "./popUpUtilities";
import { newProjectForm } from "./newProjectForm";
import { storeProject, removeProject, deleteItemFromProject } from "./localStorage";
import { makeNewItem, addItemToProject, reinsertItemToProject } from "./localStorage";
import { clearHomePage, cancel } from "./DOMUtilities";
import { createDeleteProjectForm, deleteItemForm, deleteProjectWarningForm, } from "./deleteProjectForm";
import { createHomePage } from ".";
import { createMainForm } from "./createMainForm";
import { seeAllItems, clearList, projectSpecificList } from "./toDoListItemDivs";
import { editItem } from "./editItemForm";
import { titleToId, idToTitle } from "./DOMUtilities";

function addProjectSidebarButton(button) {
    button.addEventListener('click', function() {
        const newProjectPopUp = attachElementToContainer.bind(newProjectForm());
        newProjectPopUp();
    })
}

function addNewProjectFormButton(button) {
    button.addEventListener('click', function() {
        if (document.getElementById('project-name').value != '') {
            storeProject(document.getElementById('project-name').value);
            const projectSidebar = document.querySelector('.project-sidebar');
            const listItems = document.querySelectorAll('.project-div');
            const listArr = Array.from(listItems);
            for (let i = 0; i < listArr.length; i++) {
                projectSidebar.removeChild(listArr[i])
            }
            clearHomePage();
            createHomePage();
            immediateRemove(button);
        } else {
            clearHomePage();
            createHomePage();
            immediateRemove(button);
        }
    })
}

function removeWarningPopUp(button) {
    button.addEventListener('click', function() {
        const bound = (doublePopRemove.bind(button))();
    })
}

function removePopUpListener(button) {
    button.addEventListener('click', function() {
        const bound = (removePopUp.bind(button))();
    })
}

function immediateRemove(button) {
    const bound = removePopUp.bind(button);
    bound();
}

function simpleRemoveListener(button) {
    button.addEventListener('click', function() {
        simpleRemove();
    })
}

function addItemToProjectListener(button) {
    button.addEventListener('click', function() {
        const newItem = makeNewItem();
        const project = document.getElementById('project-list-select').value;
        addItemToProject(project, newItem);
        const mainButton = document.querySelector('.heading');
        if (mainButton.hasAttribute('Id')) {
            clearList();
            projectSpecificList(idToTitle(mainButton.getAttribute('class')));
        } else {
            seeAllItems();
        }
        immediateRemove(button);
    })
}

function deleteProjectListener(button) {
    button.addEventListener('click', function() {
        createDeleteProjectForm()
    })
}

function removeProjectFromLocalStorage(button, project) {
    button.addEventListener('click', function() {
        removeProject(project);
        immediateRemove(button);
        clearHomePage();
        createHomePage();
    })
}

function removeProjectFormListener(button) {
    button.addEventListener('click', function() {
        deleteProjectWarningForm();
    })
}

function popUpMainForm(button) {
    button.addEventListener('click', function() {
        const addItemFormPop = attachElementToContainer.bind(createMainForm());
        addItemFormPop();
    })
}

function generateListListener() {
    const select = document.getElementById('project-selector')
    {
    select.addEventListener('change', function() {
        const elementName = select.value;
        const mainButton = document.querySelector('.heading');
        if (elementName === 'View All') {
            if (mainButton.hasAttribute('Id')) {
                mainButton.removeAttribute('Id');
            }
            clearList();
            seeAllItems();
            return;
        }
        mainButton.removeAttribute('Id');
        mainButton.setAttribute('Id', titleToId(elementName))
        clearList();
        projectSpecificList(elementName);   
    })}
}

function removeItem(button, title, project, date) {
    button.addEventListener('click', function() {
        const bound = cancel.bind(button);
        bound();
        deleteItemFromProject(title, project, date);
        const mainButton = document.querySelector('.heading');
        if (mainButton.hasAttribute('Id')) {
            clearList();
            projectSpecificList(project);
        } else {
            clearList();
            seeAllItems();
        }
        }
    )}

function removeItemPopUp(button) {
    button.addEventListener('click', function() {
        const buttonBind = deleteItemForm.bind(button);
        const formBind = attachElementToContainer.bind(buttonBind());
        formBind();
    })
}

function editInfoItemPopUp(button) {
    button.addEventListener('click', function() {
        const bound = editItem.bind(button);
        bound();
    })
}

function saveEditedItem(button, project, oldItem) {
    button.addEventListener('click', function(){
        reinsertItemToProject(project, oldItem);
        const mainButton = document.querySelector('.heading');
        if (mainButton.hasAttribute('Id')) {
            clearList();
            projectSpecificList(project);
        } else {
            seeAllItems();
        }
        immediateRemove(button);
    })
}

  
export {addNewProjectFormButton, addProjectSidebarButton, removeWarningPopUp, addItemToProjectListener, deleteProjectListener, removeProjectFromLocalStorage, popUpMainForm, immediateRemove, generateListListener, removeItem, removeItemPopUp, editInfoItemPopUp, saveEditedItem, removeProjectFormListener, removePopUpListener, simpleRemoveListener}