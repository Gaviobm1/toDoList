import { makeToDoItem } from "./itemCreator";
import { makeProject } from "./makeProjectFolder";
import { returnDate } from "./getDate";

const button = document.createElement('button')
button.innerHTML = 'Button';

document.body.appendChild(button);
button.addEventListener('click', function() {
    const daily = makeToDoItem('Get groceries', 'Go to the market to pick up some stuff', returnDate(7, 7, 2024), 2, 'Remeber to get some ice too!');
    const dinner = makeToDoItem('Ham', 'Get the special ham for dinner', returnDate(6, 7, 2024), 3, 'Honey for the glaze')
    const shopping = makeProject('Shopping');
    const exercise = makeProject('Exercise');
    const weights = makeToDoItem('Weightlifting', 'Get to the gym', returnDate(5, 7, 2024), 1, 'remember your motivation!');
    const yoga = makeToDoItem('Yoga', 'Find your center', returnDate(8, 7, 2024), 1, 'Remember your karma');
    exercise.additem(weights);
    exercise.additem(yoga);
    shopping.additem(daily);
    shopping.additem(dinner);
    console.log(shopping);
    console.log(exercise);
    console.log(shopping.dinner);
    

})
