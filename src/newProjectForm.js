import { createFormInputs, createLabels, createButton } from "./formUtilities"
import { addNewProjectFormButton, removePopUpListener} from "./eventListeners";

function newProjectForm() {
    const title = createFormInputs('text');
    const label = createLabels(title, 'Project Name');
    const button = createButton('New Project');
    addNewProjectFormButton(button);
    const cancel = createButton('Cancel');
    cancel.setAttribute('Id', 'cancel-project-form')
    removePopUpListener(cancel);
    return {label, button, cancel};
}

export { newProjectForm};