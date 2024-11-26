const notes = [];
// Save the note
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

console.log(notes);

console.log("--------------------------");

// Get the note
function getNote(id) {
  if (id === undefined || typeof id !== "number") {
    console.log("Error: Invalid or Missing id");
    return null;
  }
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      return notes[i];
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote);
const secondNote = getNote("note");
console.log(secondNote);

console.log("--------------------------");

//Log out notes

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with id: " +
        notes[i].id +
        " has the following note text: " +
        notes[i].content
    );
  }
}

logOutNotesFormatted();
