import { editListItem, editStatus } from "./editItem"

function makeToDoItem(title, description, dueDate, priority, notes) {
    let item = {
        title,
        description,
        dueDate,
        priority,
        notes
    }
    return Object.assign(item, changeKey(item));
}

const changeKey = (obj) => ({
    changekey: (key, value) => {
        obj[key] = value;
    }
})

export {makeToDoItem}