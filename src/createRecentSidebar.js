import { attachItemsToActivityList } from "./localStorage";

export function createRecentActivitySidebar() {
    const recentActivityDiv = document.createElement('div');
    recentActivityDiv.classList.add('recent-activity');
    const recentActivityHeading = document.createElement('p');
    recentActivityHeading.classList.add('headings');
    recentActivityHeading.textContent = 'Recent Activity'
    recentActivityDiv.appendChild(recentActivityHeading);
    document.body.appendChild(recentActivityDiv);
    attachItemsToActivityList();
}

