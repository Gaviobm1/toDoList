import { clearFields } from "./DOMUtilities";
import { createButton } from "./formUtilities";
import { removePopUpListener, simpleRemoveListener } from "./eventListeners";

function createCheckList (title, project) {
    
    const itemTitleDiv = document.createElement('div');
    const itemTitle = document.createElement('p');
    itemTitle.textContent = title 
    itemTitle.classList.add('list-heading');
    const addButton = document.createElement('button');
    addButton.textContent = '+'; 
    itemTitleDiv.appendChild(itemTitle); 
    if (!localStorage.getItem('checkList')) {
        localStorage.setItem('checkList', '{}');
    }
    if (!JSON.parse(localStorage.getItem('checkList'))[`${itemTitle.textContent}${project}`]) {
        const checkList = JSON.parse(localStorage.getItem('checkList'));
        checkList[`${itemTitle.textContent}${project}`] = []
        localStorage.setItem('checkList', JSON.stringify(checkList))
    }
    const checklistDiv = document.createElement('div');
    checklistDiv.classList.add('list-div');
    const doneList = document.createElement('div');
    doneList.classList.add('done-list');
    const doneHeading = document.createElement('p');
    doneHeading.textContent = 'Just removed';
    doneHeading.classList.add('list-heading')
    const addInput = document.createElement('input');
    addInput.setAttribute('placeholder', 'Remember...')
    addButton.addEventListener('click', function() {
            addItemToLocalStorage(`${itemTitle.textContent}${project}`, addInput.value);
            makeList(`${itemTitle.textContent}${project}`, checklistDiv, doneList,'checklist-item', 'checklist-done');
            clearFields();
        })
    const closeButton = createButton('Done');
    removePopUpListener(closeButton);
    makeList(`${itemTitle.textContent}${project}`, checklistDiv, doneList, 'checklist-item', 'checklist-done');
    addInput.classList.add('checklist-input');
    return {itemTitleDiv, addInput, addButton, closeButton, checklistDiv, doneHeading, doneList}
}

function changeClass(class1, class2) {
    if (this.classList.contains(class1)) {
        this.classList.remove(class1);
        this.classList.add(class2);
    } else {
        this.classList.remove(class2);
        this.classList.add(class1);
    }
}

function generateOrderedNodeListByClass(...classes) {
    const orderedList = [];
    for (let i = 0; i < classes.length; i++) {
        const itemList = document.getElementsByClassName(classes[i]);
        for(let i = 0; i < itemList.length; i++) {
            orderedList.push(itemList[i]);
        }
    }
    return orderedList;
}

function createOrderedDOMList(div, nodeList) {
    for (let i = 0; i < nodeList.length; i++) {
        div.appendChild(nodeList[i]);
    }
}

function checkForClassesAmongSiblings(order = []) {
    const parent = this.parentNode;
    const childList = parent.childNodes;
    const classList = [];
    for (let i = 0; i < childList.length; i++) {
        if (!classList.includes(childList[i].classList[0])) {
            classList.push(childList[i].classList[0]);
        }
    }
    if (order.length > 0) {
        for(let i = 0; i < classList.length; i++) {
            classList[i] = order[i];
        }
    }
    return classList;
}

function reorderListUser(order) {
    const listDiv = this.parentNode;
    const classes = checkForClassesAmongSiblings.bind(this);
    createOrderedDOMList(listDiv, generateOrderedNodeListByClass(...(classes(order))))
}

function getItemsForStorageByClass(class1) {
    const nodeList = document.getElementsByClassName(class1);
    const newList = [];
    for (let i = 0; i < nodeList.length; i++) {
        newList.push(nodeList[i].textContent);
    }
    return newList;
}

function addItemToLocalStorage(container, item) {
    const checkList = JSON.parse(localStorage.getItem('checkList'))
    if (!checkList[container]) {
        checkList[container] = []
    }
    checkList[container].push(item)
    localStorage.setItem('checkList', JSON.stringify(checkList));
}

function updateLocalStorageItem(class1, container) {
    const newList = getItemsForStorageByClass(class1);
    const checkList = JSON.parse(localStorage.getItem('checkList'));
    checkList[container] = [];
    newList.forEach(element => {
        checkList[container].push(element);
    })
    localStorage.setItem('checkList', JSON.stringify(checkList));
}

function removeChildren(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}

function makeList(container, listDiv, doneList, ...classes) {
    removeChildren(listDiv);
    const checkItem = JSON.parse(localStorage.getItem('checkList'))
    const itemList = checkItem[container];
    itemList.forEach(element => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add(classes[0]);
        itemDiv.addEventListener('click', function() {
            const bound = changeClass.bind(itemDiv)
            bound(classes[0], classes[1]);
            updateLocalStorageItem(classes[0], container);
            moveDivs(listDiv, doneList, classes[0], classes[1]);
        })
    const itemInfo = document.createElement('p');
    itemInfo.textContent = element;
    itemDiv.appendChild(itemInfo)
    if (listDiv.firstChild) {
        const first = listDiv.firstChild
        listDiv.insertBefore(itemDiv, first);
    } else {
        listDiv.appendChild(itemDiv);
    }
    });
    }

function moveDivs(divClass1, divClass2, class1, class2) {
    const class1Items = document.getElementsByClassName(class1);
    const class2Items = document.getElementsByClassName(class2);
    const bigger = class1Items.length > class2Items.length ? class1Items.length : class2Items.length
    for(let i = 0; i < bigger; i++) {
        if (class1Items.length > 0 && i <= class1Items.length - 1) {
            const item = class1Items[i];
            divClass1.appendChild(item);
        }
        if (class2Items.length > 0 && i <= class2Items.length - 1) {
            const item = class2Items[i];
            divClass2.appendChild(item);
        }   
    }
}

export {createCheckList}

