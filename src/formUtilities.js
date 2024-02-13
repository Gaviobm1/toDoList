import { titleToId } from "./DOMUtilities";

function createFormInputs(...args){
    const formFields = []
    for(let i = 0; i < args.length; i++) {
        const formField = document.createElement('input');
        formField.setAttribute('type', args[i]);
        formField.classList.add('form-field');
        formFields.push(formField);
    }
    return formFields;
}

function createSelect (classIdentifyer = 'select-field',...options) {
    const select = document.createElement('select');
    for(let i = 0; i < options.length; i++) {
        const selection = document.createElement('option');
        selection.classList.add(classIdentifyer);
        selection.setAttribute('value', options[i]);
        selection.innerHTML = options[i];
        select.appendChild(selection);
    }
    return select
}

function createTextArea() {
    const textArea = document.createElement('textarea');
    return textArea;
}

function createButton(text) {
    const button = document.createElement('button');
    button.textContent = text;
    return button;
}

function createLabels(formFields, ...args){
    const labels = [];
    for (let i =0; i < formFields.length; i++) {
        const label = document.createElement('label');
        const idWord = titleToId(args[i]);
        formFields[i].setAttribute('Id', idWord);
        label.setAttribute('for', formFields[i].getAttribute('Id'));
        label.textContent = args[i];
        label.appendChild(formFields[i]);
        labels.push(label);
    }
    return labels;
}

function createPlaceholder(formFields, ...args) {
    for (let i = 0; i < formFields.length; i++) {
        formFields[i].setAttribute('placeholder', args[i]);
    }
}

function setSelected(select) {
    const children = select.children;
    for (let i = 0; i < children.lenght; i++) {
        if (children[i].textContent === 'My To-Do List') {
            children[i].setAttribute('selected', 'selected');
        }
    }
}

function addIdsToElements(formFields, ...args) {
    for (let i = 0; i < formFields.length; i++) {
        if (formFields[i])
        formFields[i].setAttribute('Id', titleToId(args[i]));
    }
}


export {createFormInputs, createTextArea, createButton, createSelect, createLabels, createPlaceholder, setSelected, addIdsToElements}