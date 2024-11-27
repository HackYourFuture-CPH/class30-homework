
//Exercise 1

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];

const nameToRemove = "Ahmad";

function removeName(names, nameToRemove) {
    const remove = names.indexOf(nameToRemove);
    if (remove !== -1) {
        names.splice(remove, 1);
    }
}

removeName(names, nameToRemove);

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']


//2nd Exercise

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
function travelCalculation(travelInformation) {
    const timeInHours = (travelInformation.destinationDistance / travelInformation.speed);
    const hours = Math.floor(timeInHours);
    const minutes = Math.round((timeInHours - hours) * 60);

    return hours + " hours " + "and " + minutes + " minutes";


}

const travelTime = travelCalculation(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes


//3rd Exercise 

const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
    },
];


function logOutSeriesText() {
    const averageLifespan = ((80 * 365 * 24 * 60) / 100); // assuming 80 years
    let totalPercentage = 0;
    seriesDurations.forEach((series) => {
        const total = series.days * 24 * 60 + series.hours * 60 + series.minutes;


        const percentage = (total / averageLifespan) * 100;
        totalPercentage += percentage;

        console.log(series.title + " took : " + percentage.toFixed(2) + " % of my life");
    });

    console.log("In total that is " + totalPercentage.toFixed(1) + " % of my life");

}

logOutSeriesText();

//4th Exercise  and 5, 6
const notes = [];
function saveNote(content, id) {
    notes.push({ content: content, id: id });

    console.log(" Content: " + content + " id :" + id);

}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

function getNote(id) {

    if (id === undefined || typeof id !== "number") {
        return "Error, Id have to be defined and have to be a number";
    }

    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            return notes[i];
        }
    } console.log("No found")
}

console.log(getNote(2));
const firstNote = getNote(1);
console.log(firstNote);

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        console.log(" The note with id: " + note.id + ", has the following note text: " + note.content)
    }
}
logOutNotesFormatted();

//Unique feature 
//I would like to add remove note 

function delateNote(id) {
    const noteIndex = notes.findIndex(note => note.id === id);

    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);
        console.log("The note with the Id: " + id + " has been eliminated")
    } else {
        console.log("Note not found")
    }

}
delateNote(2);
console.log(notes); 
logOutNotesFormatted();