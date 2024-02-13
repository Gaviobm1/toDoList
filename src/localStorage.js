import { createNewItem } from "./projectAndItemCreators";

function storeProject(project, item= []) {
   localStorage.setItem(project, JSON.stringify(item));
}

function removeProject(project) {
    localStorage.removeItem(project);
}

function removeCheckList(container) {
    const checkList = JSON.parse(localStorage.getItem('checkList'));
    for(let obj in checkList) {
        if (obj === container) {
            delete checkList[obj]
        }
    }
    if (checkList === null) {
        checkList = {}
    }
    localStorage.setItem('checkList', JSON.stringify(checkList));
}

function createDefaultProject(name) {
    if (localStorage.getItem(name)) {
        return
    }
    localStorage.setItem(name, '[]');
}

function makeNewItem() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value 
    const dueDate = document.getElementById('due-date').value;
    const notes = document.getElementById('notes').value;
    const priority = document.getElementById('priority-select').value;
    const newItem = createNewItem(title, description, dueDate, notes, priority);
    return newItem;
}

function addItemToProject(project, item) {
    const oldList = JSON.parse(localStorage.getItem(project))
    oldList.push(item);
    localStorage.setItem(project, JSON.stringify(oldList));
}

function checkPriority(priority) {  
    if (priority === 'Low') {
        return '!';
    } else if (priority === 'Medium') {
        return '!!';
    } else if (priority === 'High') {
        return '!!!';
    }
}

function hasChanged(oldName, newName) {
    if (oldName === newName) {
        return false;
    } 
    return true;
}

function extractItemDetails(project) {
    const projectDetails = JSON.parse(localStorage.getItem(project));
    const titleArr = [];
    const dueDateArr = [];
    const descriptionArr = [];
    const notesArr = [];
    const priorityArr = []
    for(let i = 0; i < projectDetails.length; i++) {
        titleArr.push(projectDetails[i]['title']);
        dueDateArr.push(projectDetails[i]['dueDate']);
        descriptionArr.push(projectDetails[i]['description']);
        notesArr.push(projectDetails[i]['notes']);
        priorityArr.push(checkPriority(projectDetails[i]['priority']))
    }
    return {titleArr, dueDateArr, descriptionArr, notesArr, priorityArr};
}

function deleteItemFromProject(title, project, date) {
    const storageProjectList = JSON.parse(localStorage.getItem(project));
    for (let i = 0; i < storageProjectList.length; i++) {
        if (storageProjectList[i]['title'] === title && storageProjectList[i]['dueDate'] === date) {
            storageProjectList.splice(i, 1);
        }
    }
    localStorage.setItem(project, JSON.stringify(storageProjectList));
}

function getProject(project, title, date) {
    const projectList= JSON.parse(localStorage.getItem(project));
    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i]['title'] === title && projectList[i]['dueDate'] === date) {
            const itemProject = projectList[i]
            itemProject['index'] = i;
            return itemProject;
        }
    }
}

function reinsertItemToProject(project, oldItem) {
    const newName = document.getElementById('project').value
    const changed = hasChanged(newName, project);
    if (changed) {
        const itemList = JSON.parse(localStorage.getItem(project));
        itemList.splice(oldItem.index, 1);
        localStorage.setItem(project, JSON.stringify(itemList));
        project = newName;
        const newItem = makeNewItem();
        const newItemList = JSON.parse(localStorage.getItem(project));
        newItemList.push(newItem);
        localStorage.setItem(project, JSON.stringify(newItemList));
    } else {
        const newItem = makeNewItem();
        const itemList = JSON.parse(localStorage.getItem(project));
        itemList.splice(oldItem.index, 1, newItem);
        localStorage.setItem(project, JSON.stringify(itemList));
    }
}

export {storeProject, addItemToProject, makeNewItem, createDefaultProject, removeProject, extractItemDetails, deleteItemFromProject, getProject, reinsertItemToProject, checkPriority, removeCheckList};


