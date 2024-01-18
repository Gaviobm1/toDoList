function makeProject(name) {
    let project =  {
        name
    }
    return Object.assign(project, addItemToProject(project))
}

const addItemToProject = (project) => ({
    additem: (item) => {
        project[item.title] = item;
    }
})

export {makeProject}