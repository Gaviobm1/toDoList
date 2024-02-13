const newProject = (name) => {
    return {
        name
    }
}

const createNewItem = (title, description, dueDate, notes, priority) => {
    return {
        title,
        description,
        dueDate,
        notes,
        priority,

    }
}

export {newProject, createNewItem}