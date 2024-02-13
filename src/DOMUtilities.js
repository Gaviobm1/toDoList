function titleToId (content) {
    const str1= content;
    const arr1 = str1.split(' ');
    const arr2 = [];
    const arr3 = [];
    const arr4 = [];
    for (let i = 0; i < arr1.length; i++) {
        let firstLetter = arr1[i][0].toLowerCase();
        arr2.push(firstLetter);
    }
    for (let i = 0; i < arr1.length; i++) {
        let rest = arr1[i].slice(1);
        arr3.push(rest);
    }
    for (let i = 0; i < arr1.length; i++) {
        let word = arr2[i] + arr3[i];
        arr4.push(word);
    }
    const str2 = arr4.join('-');
    return str2;
}

function idToTitle(id) {
    const str1 = id;
    const arr1 = str1.split('-');
    const arr2 = [];
    const arr3 = [];
    const arr4 = [];
    for (let i = 0; i < arr1.length; i++) {
        let firstLetter = arr1[i][0].toUpperCase();
        arr2.push(firstLetter);
    }
    for (let i = 0; i < arr1.length; i++) {
        let rest = arr1[i].slice(1);
        arr3.push(rest);
    }
    for (let i = 0; i < arr1.length; i++) {
        let word = arr2[i] + arr3[i];
        arr4.push(word);
    }
    const str2 = arr4.join(' ');
    return str2;
}

function appendChildren(item, ...attachments) {
    for (let i = 0; i< attachments.length; i++) {
        item.appendChild(attachments[i]);
    }
}

function removeChildren(parent, ...nodes) {
    for (let i = 0; i < nodes.length; i++) {
        parent.removeChild(nodes[i]);
    }
}

function clearHomePage() {
    const projectSidebar = document.querySelector('.project-sidebar');
    document.body.removeChild(projectSidebar);
}

function clearFields() {
    const elements = document.getElementsByTagName('input');
    for (let i = 0; i < elements.length; i++) {
        elements[i].value = '';
    }
}

function getProjectNameFromElement(DOMelement) {
    const className = DOMelement.className
    const nodeList = document.getElementsByClassName(`${className}`);
    const arr1 = [];
    const arr2 = [];
    for (let i = 0; i < nodeList.length; i++) {
        arr1.push(nodeList[i].innerHTML);
    }
    arr1.forEach(element => {
        const ele = element.split('<');
        arr2.push(ele[0]);
    })
    return arr2[0];
}

function cancel() {
    const parent = this.parentNode;
    const sibling = parent.previousSibling
    document.body.removeChild(parent);
    document.body.removeChild(sibling);
}

export {titleToId, idToTitle, appendChildren, removeChildren, clearFields, clearHomePage,  getProjectNameFromElement, cancel};