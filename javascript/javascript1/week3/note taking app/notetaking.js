let notes = [];

function saveNote(content, id) {
  const note = {
    content: content,
    id: id,
    completed: false,
  };
  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Cut vegetables", 3);
saveNote("Clean the cupboard", 4);

console.log(notes);

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      return notes[i];
    }
  }
  return `ID ${id} is not in the array`;
}

const firstNote = getNote(5);
console.log(firstNote);

function logOutNotesFormatted() {
  for (let note of notes) {
    console.log(
      `The note with id: ${note.id}, has the following note text ${
        note.content
      } and it is ${note.completed ? "completed" : "not completed"}.`
    );
  }
}

logOutNotesFormatted();

function markNoteAsCompleted(id) {
  const note = notes.find((note) => note.id === id);
  if (note) {
    note.completed = true;
    console.log(`Note with id: ${id} marked as completed.`);
  } else {
    console.log(`Note with id: ${id} not found.`);
  }
}

markNoteAsCompleted(2);
markNoteAsCompleted(4);
markNoteAsCompleted(5);
logOutNotesFormatted();
