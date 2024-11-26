const notes = [];

function saveNote(content, id) {
  notes.push({ content: content, id: id });
}

function getNote(id) {
  if (typeof id !== "number") {
    console.log("Error: ID should be a number");
    return;
  }
  return notes.find(note => note.id === id);
}

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`);
  }
}

// Example usage:
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(getNote(1));  // {content: 'Pick up groceries', id: 1}
logOutNotesFormatted();  // Logs out all notes with formatting