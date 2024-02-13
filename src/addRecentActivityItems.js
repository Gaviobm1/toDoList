/*
Keeping this for possible use in future additional feature
*/

function addedItem(project, item) {
    const recentItem = document.createElement('p');
    recentItem.textContent = `Added ${item} to ${project}`;
    return recentItem;
}

function removedItem(project, item) {
    const recentItem = document.createElement('p');
    recentItem.textContent = `Removed ${item} from ${project}`;
    return recentItem;
}

function createdProject(project) {
    const recentItem = document.createElement('p');
    recentItem.textContent = `Created ${project}`;
    return recentItem;
}

function deletedProject(project) {
    const recentItem = document.createElement('p');
    recentItem.textContent = `Deleted ${project}`;
    return recentItem;
}


export {addedItem, removedItem, createdProject,deletedProject}