import './style.css';


function makeDiv(Id = 'div') {
    const div = document.createElement('div');
    div.setAttribute('Id', Id);
    document.body.appendChild(div);
    return div;
};

const makeButton = (buttonContent, Id = 'button') => {
    const button = document.createElement('button')
    button.innerHTML = buttonContent
    button.setAttribute('Id', Id)
    return button
}

const getEventListenerNode = (nodeId) => {
   const node = document.getElementById(nodeId);
   return node;
}

const makeLabel =  (id, content) => {
    const label = document.createElement('label')
    label.setAttribute('for', id);
    label.innerHTML = content;
    return label
}

const makeField = (id, type = 'text') => {
    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', id);
    input.setAttribute('name', id);
    return input;
}

const makeSelect = (id, ...options) => {
    const select = document.createElement('select');
    select.setAttribute('id', id);
    select.setAttribute('name', id);
    for(let i = 0; i < options.length; i++) {
        const selection = document.createElement('option');
        selection.setAttribute('value', options[i]);
        selection.innerHTML = options[i];
        select.appendChild(selection);
    }
    return select
}

const attachLabelToField = (id, content, type='text') => {
    const label = makeLabel(id, content);
    const input = makeField(id, type);
    label.appendChild(input);
    return label;
}

const attachLabelToSelect = (id, content, ...options) => {
    const label = makeLabel(id, content);
    const select = makeSelect(id, ...options);
    label.appendChild(select);
    return label;
}

const makeToDoInput = () => {
    const wrapper = makeDiv('wrapper');
    wrapper.appendChild(attachLabelToField('title', 'Title:'));
    wrapper.appendChild(attachLabelToField('description', 'Description:'));
    wrapper.appendChild(attachLabelToField('dueDate', 'Due Date:', 'date'));
    wrapper.appendChild(attachLabelToSelect('priority', 'Priority', 'Select Priority', 'Low', 'Moderate', 'High', 'Very High', 'Urgent'));
    wrapper.appendChild(attachLabelToField('notes', 'Notes'));
    wrapper.appendChild(makeButton('Add to \"My To-Do List\"'));
    wrapper.appendChild(makeButton('New project', 'new-project-button'));
    document.body.appendChild(wrapper);
}

export {makeButton, makeDiv, makeToDoInput, getEventListenerNode, attachLabelToField}