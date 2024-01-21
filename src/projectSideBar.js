import { makeButton, makeDiv, attachLabelToField } from "./landingPage";
import './style.css';



const generateProjectNameForm = (Id) => {
    const popUpBackground = document.createElement('div');
    popUpBackground.setAttribute('id', 'popup-background')
    const projectName = document.createElement('div');
    projectName.setAttribute('Id', Id);
    const nameField = attachLabelToField('projectName-field', 'Project Name:')
    const projectNameButton = makeButton("+", "projectName-add-button");
    const cancelButton = makeButton('Cancel', 'projectName-cancel-button')
    popUpBackground.appendChild(projectName)
    projectName.appendChild(nameField);
    projectName.appendChild(projectNameButton);
    projectName.appendChild(cancelButton);
    document.body.appendChild(popUpBackground);
    projectNameButton.addEventListener('click', function() {
        addNewProject('sidebar-div', document.getElementById('projectName-field').value);
        document.body.removeChild(popUpBackground);
    })
    cancelButton.addEventListener('click', function() {
        document.body.removeChild(popUpBackground);
    })
}



const addNewProject = (div, content) => {
    const project = makeDiv("sidebar-project")
    project.innerHTML = content;
    document.getElementById(div).insertBefore(project, document.getElementById(div).firstChild), 1000;
}

const generateSideBar = () => {
    const sideBarDiv = makeDiv("sidebar-div");
    const addProjectButton = makeButton("Start a new project", "project-button");
    const addDefaultProject = document.createElement('div');
    addDefaultProject.innerHTML = 'My To-Do List';
    sideBarDiv.appendChild(addDefaultProject);
    sideBarDiv.appendChild(addProjectButton);
    document.body.appendChild(sideBarDiv);
}

export {addNewProject, generateSideBar, generateProjectNameForm}






