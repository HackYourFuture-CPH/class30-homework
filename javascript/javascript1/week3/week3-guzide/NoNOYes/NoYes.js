const notes = [];

function saveNote(content, id) {
  if (typeof content !== "string") {
    console.log("Error: 'content' should be a string");
  }
  if (typeof id !== "number") {
    console.log("Error: 'id' should be a number");
  }
  const newObject = { content: content, id: id };
  notes.push(newObject);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {
  if (id === undefined || typeof id !== "number") {
    console.log("Error: Invalid or Missing id");
  }
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      return notes[i];
    }
  }
  console.log("Error: Note not found");
}

const firstNote = getNote(1);
console.log(firstNote);
