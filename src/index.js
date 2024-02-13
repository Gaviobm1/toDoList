import './style.css';
import { createMyProjectsSidebar} from './createMyProjectSidebar';
import { generateListListener } from './eventListeners';
import { createDefaultProject } from './localStorage';
import { seeAllItems } from './toDoListItemDivs';

export function createHomePage() {
    createMyProjectsSidebar();
    createDefaultProject('My To Do List')
    generateListListener();
    seeAllItems();
}

createHomePage()




