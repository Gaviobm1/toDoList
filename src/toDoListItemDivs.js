import { createButton} from "./formUtilities";
import { appendChildren, removeChildren } from "./DOMUtilities";
import { extractItemDetails} from "./localStorage";
import { editInfoItemPopUp, removeItemPopUp, checklistPopUp } from "./eventListeners";


function makeItemDiv(project) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-div')
    const title = document.createElement('p');
    title.classList.add('item-title')
    const date = document.createElement('p');
    date.classList.add('item-date');
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('item-details');
    appendChildren(detailsDiv, title, date)
    const projectName = document.createElement('p');
    projectName.classList.add('item-project');
    projectName.textContent = project;
    const projectInfoDiv = document.createElement('div');
    projectInfoDiv.classList.add('item-project-div');
    projectInfoDiv.appendChild(projectName);
    const editButton = createButton('See details');
    editButton.classList.add('item-edit');
    editInfoItemPopUp(editButton);
    const editButtonDiv = document.createElement('div');
    editButtonDiv.classList.add('item-edit-div')
    editButtonDiv.appendChild(editButton);
    const doneRadio = document.createElement('input');
    doneRadio.setAttribute('type', 'radio');
    doneRadio.classList.add('item-remove');
    removeItemPopUp(doneRadio);
    const doneRadioDiv = document.createElement('div');
    doneRadioDiv.classList.add('item-remove-div')
    doneRadioDiv.appendChild(doneRadio);
    const checkListButton = createButton('Checklist');
    const priority = document.createElement('p');
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('item-priority');
    priorityDiv.appendChild(checkListButton);
    priorityDiv.appendChild(priority);
    
    return {itemDiv, detailsDiv, projectInfoDiv, editButtonDiv, doneRadioDiv, priorityDiv, priority, title, projectName, date, editButton, checkListButton, doneRadio};
}

function checkForItems(project) {
    const detailsLength = JSON.parse(localStorage.getItem(project)).length;
    if (detailsLength === 0) {
        const noItemsDiv = document.createElement('div');
        const noItemsP = document.createElement('p');
        noItemsP.textContent = `No items in ${project} yet!`;
        noItemsDiv.classList.add('item-div');
        noItemsP.setAttribute('Id', 'no-items');
        noItemsDiv.appendChild(noItemsP);
        document.body.appendChild(noItemsDiv);
        return false;
    }
    return true;
}

function checkForMultipleProjects() {
    if (document.querySelector('.item-div').querySelector('.item-project')) {
        const nodes = document.querySelectorAll('.item-div');
        const projectName = nodes[0].querySelector('.item-project').textContent;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].querySelector('.item-project').textContent === projectName) {
                continue;
            }
            return true;
        }
        return false;
    }
}

function checkToAddItemToOpenProjectList() {
    const projectName = document.getElementById('project-list-select').value;
    const openProject = document.querySelector('.item-div').querySelector('.item-project').textContent;
    const nodes = document.querySelectorAll('.item-div');
    for (let i = 0 ; i < nodes.length; i++) {
        if (projectName === nodes[i].querySelector('.item')) {
            return true
        }
    }
   
    return false
}

function putItemsInPage(project) {
    const details = extractItemDetails(project);
    const detailsLength = JSON.parse(localStorage.getItem(project)).length;
    for (let i = 0; i < detailsLength; i++) {
        const divs = makeItemDiv(project);
        divs.title.textContent = details.titleArr[i];
        divs.date.textContent = details.dueDateArr[i];
        divs.priority.textContent = details.priorityArr[i];
        checklistPopUp(divs.checkListButton, divs.title.textContent, project);
        appendChildren(divs.itemDiv, divs.detailsDiv, divs.editButtonDiv, divs.projectInfoDiv, divs.doneRadioDiv, divs.priorityDiv);
        document.body.appendChild(divs.itemDiv);
    };
}


function projectSpecificList(project) {
    if (checkForItems(project)) {
        putItemsInPage(project);
    }
}

function sortByDate(projectName) {
    const project = JSON.parse(localStorage.getItem(projectName));
    project.sort((a, b) => {
        const date1 = new Date(a.dueDate).valueOf();
        const date2 = new Date(b.dueDate).valueOf()
        if (date1 < date2) {
            return -1;
        } else if (date1 > date2) {
            return 1;
        }
        return 0;
    })
    return project;
}

function clearList() {
    if (document.querySelector('.item-div')) {
        const nodes = document.querySelectorAll('.item-div');
        removeChildren(document.body, ...nodes);
    }
    return;
}

function seeAllItems() {
    clearList();
    const projects = Object.keys(localStorage);
    let contents = 0;
    projects.forEach(element => {
        const item = JSON.parse(localStorage.getItem(element));
        if (item.length != 0) {
            contents++;
        }
    })
    if (contents > 0) {
        for (let i = 0; i < projects.length; i++) {
            putItemsInPage(projects[i]);
        }
    } else {
        const noItemsDiv = document.createElement('div');
        const noItemsP = document.createElement('p');
        noItemsP.textContent = 'No items on your lists yet!';
        noItemsDiv.classList.add('item-div');
        noItemsP.setAttribute('Id', 'no-items');
        noItemsDiv.appendChild(noItemsP);
        document.body.appendChild(noItemsDiv);
    }
    
}

export {putItemsInPage, seeAllItems, clearList, checkForItems, checkForMultipleProjects, checkToAddItemToOpenProjectList, projectSpecificList};
