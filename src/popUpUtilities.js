function popUpBackground() {
    const backgroundDiv = document.createElement('div');
    backgroundDiv.classList.add('pop-background');
    return backgroundDiv;
}

function popUpContainer() {
    const elementContainer = document.createElement('div');
    elementContainer.classList.add('pop-up-main');
    return elementContainer;
}

function doublePopRemove() {
    const parent = this.parentNode;
    document.body.removeChild(parent);
}

function removePopUp() {
    const parent = this.parentNode;
    const background = document.querySelector('.pop-background')
    document.body.removeChild(background);
    document.body.removeChild(parent);
}

function simpleRemove() {
    const background = document.querySelector('.pop-background');
    document.body.removeChild(background)
}

function makePopUpTemplate() {
    const background = popUpBackground();
    const container = popUpContainer();
    return {container, background};
}

function attachElementToContainer() {
    const popUp = makePopUpTemplate();
    for (let obj in this) {
        if (Array.isArray(this[obj])) {
            this[obj].forEach(item => popUp['container'].appendChild(item))
        } else {
            popUp['container'].appendChild(this[obj])
        }
    }
    document.body.appendChild(popUp['background']);
    document.body.appendChild(popUp['container']);
}

export {popUpBackground, popUpContainer, removePopUp, makePopUpTemplate, attachElementToContainer, doublePopRemove, simpleRemove};
