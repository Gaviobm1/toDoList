export function returnDate(day, month, year) {
    day = new Date(`${year}-${month}-${day}`).getDate();
    month = new Date(`${year}-${month}-${day}`).getMonth();
    year = new Date(`${year}-${month}-${day}`).getFullYear();
    return `${day}/${month+1}/${year}`
}

