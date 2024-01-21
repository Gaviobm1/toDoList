import { makeToDoItem } from "./itemCreator";
import { makeProject } from "./makeProjectFolder";
import { returnDate } from "./getDate";
import { makeToDoInput, getEventListenerNode } from "./landingPage";
import { addNewProject, generateSideBar, generateProjectNameForm } from "./projectSideBar";

makeToDoInput()
generateSideBar()

document.getElementById('project-button').addEventListener('click', function() {
    generateProjectNameForm('project-name');
})

document.getElementById('new-project-button').addEventListener('click', function() {
    generateProjectNameForm('project-name');
})