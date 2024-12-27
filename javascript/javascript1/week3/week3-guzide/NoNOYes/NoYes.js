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
    return;
  }
  for (const note of notes) {
    if (id === note.id) {
      return note;
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
  for (const note of notes) {
    console.log(
      `The note with id: ${note.id} has the following note text: ${note.id}`
    );
  }
}

logOutNotesFormatted();

//new feature: Remove Note

function removeNote(id) {
  let index = 0;
  for (const note of notes) {
    if (note.id === id) {
      const deletedNote = notes.splice(index, 1)[0];
      return console.log(`The note by id: ${deletedNote.id} is deleted.`);
    }
    index++;
  }
  console.log(`Error: Note with id:${id} is not found.`);
}

removeNote(1);
removeNote(2);
