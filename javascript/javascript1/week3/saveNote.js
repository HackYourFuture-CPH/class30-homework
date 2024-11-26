const notes = [];

function saveNote(content, id) {
  const note = {
    content: content,
    id: id
  };
  notes.push(note);
}

function getNote(id) {
  if (typeof id !== "number") {
    console.log("Error: ID should be a number");
    return;
  }

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }

  console.log("Error: Note not found");
}

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(`The note with id: ${notes[i].id}, has the following note text: "${notes[i].content}"`);
  }
}


saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

logOutNotesFormatted();
// The note with id: 1, has the following note text: "Pick up groceries"
// The note with id: 2, has the following note text: "Do laundry"

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

const secondNote = getNote(2);
console.log(secondNote); // {content: 'Do laundry', id: 2}

const invalidNote = getNote(3);