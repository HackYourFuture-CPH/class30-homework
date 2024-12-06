// Item array removal

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
console.log(names);
const nameToRemove = "Ahmad";

function remove(arrayOfNames = [], name) {
  const index = arrayOfNames.indexOf(name);
  if ([index !== -1]) {
    arrayOfNames.splice(index, 1);
  }

  return arrayOfNames;
}
remove(names, `Ahmad`);
console.log(names);

//When will we be there??

function travelTime(distance, speed) {
  return {
    calculate() {
      let time = distance / speed;
      let hourPart = Math.floor(time);
      let minutePart = Math.round((time - hourPart) * 60);
      return `${hourPart} hours and ${minutePart} minutes`;
    },
  };
}
const travel = travelTime(432, 50);
console.log(travel.calculate());

//Series duration of my life

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 7,
    hours: 19,
    minutes: 56,
  },
  {
    title: "Breaking bad",
    days: 4,
    hours: 23,
    minutes: 48,
  },
  {
    title: "How I meet your mother",
    days: 11,
    hours: 0,
    minutes: 12,
  },
];

function logOutSeriesText() {
  const lifespan = 80 * 365 * 24 * 60;

  for (let i = 0; i < seriesDurations.length; i++) {
    const moviTime =
      seriesDurations[i].days * 24 * 60 +
      seriesDurations[i].hours * 60 +
      seriesDurations[i].minutes;
    let percentOfLife = (moviTime / lifespan) * 100;
    console.log(
      `${seriesDurations[i].title} took ${percentOfLife.toFixed(2)} of my life`
    );
  }
}
logOutSeriesText();

//NOnoN0nOYes (Note taking app)
// Save a note

const notes = [];
function saveNote(content, id) {
  notes.push({ content, id });
  console.log(notes);
}
saveNote(`Pick up groceries`, 1);
saveNote(`Do laundry`, 2);
//console.log(notes)

// get a note
function getnote(id) {
  for (i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
  console.log(`Error: Note with id ${id} not found.`);
}
const firstNote = getnote(1);
console.log(firstNote);

//Log out notes

function logOutNotesFormatted() {
  for (i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`
    );
  }
}
logOutNotesFormatted();

//Unique feature(add date )

function addDte(id) {
  let currentDate = new Date();
  for (i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      notes[i].date = currentDate;
      console.log(notes[i]);
    }
  }
}
addDte(1);
addDte(2);

// CactusIO-interactive (Smart phone usage app) optional

// Adding an activity

let activities = [];
const usagelimit = 90;
function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
  console.log("Your phone activities are:");
  for (let activity of activities) {
    console.log(
      `Date: ${activity.date}, Activity: ${activity.activity}, Duration: ${activity.duration} mins`
    );
  }
}

//Show my status and Extra feature
function showStatus() {
  if (activities.length === 0) {
    return `Add some activities before calling showStatus`;
  }
  let amount = 0;

  for (let i = 0; i < activities.length; i++) {
    amount += activities[i].duration;
  }
  if (usagelimit > amount) {
    return `You have added ${activities.length} activities. They amount to ${amount} min. of usage`;
  }

  if (usagelimit < amount) {
    return `You have reached your limit, no more smartphoning for you!`;
  }
}
addActivity(`27/3/2024`, `Youtub`, 30);
addActivity(`27/3/2024`, `watching`, 40);
addActivity(`27/3/2024`, `news`, 25);
// console.log(activities);

console.log(showStatus());
