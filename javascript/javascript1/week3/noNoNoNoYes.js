const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

function getNote(id) {
  if (typeof id !== "number") {
    console.log("Error: ID must be a number.");
    return null;
  }
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
  console.log("Note not found.");
  return null;
}

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`
    );
  }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

logOutNotesFormatted();

const firstNote = getNote(1);
console.log(firstNote);
