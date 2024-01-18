import './style.css';


function makeLandingPage() {
    const wrapper = document.createElement('div');
    const button = document.createElement('button');
    button.innerHTML = 'Test';
    document.body.appendChild(wrapper);
    wrapper.appendChild(button);
    return button;
};

const makeButton = (content) => {
    const button = document.createElement('button')
    button.innerHTML = content
    document.body.appendChild(button)
}

const makeInput = (id, type = 'text') => {
    const field = document.createElement('input');
    field.setAttribute('type', type);
    field.setAttribute('id', id);
    field.setAttribute('name', id);
    return field;
}

const makeLabel = (link, content) => {
    const label = document.createElement('label');
    label.setAttribute('for', link);
    label.innerHTML = content;
    return label;
}
const makeField = (id, content, type = 'text') => {
    document.body.appendChild(makeLabel(id, content));
    document.body.appendChild(makeNewInput(id, type));
}