let notes = [];

function saveNote (content, id) {
  // The saveNote function should push an object to the notes array with the keys content and id
  notes.push({
    content,
    id
  });
}

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
  return "Error"; 
}

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log("The note with id: " + notes[i].id + ", has the following note text: " + notes[i].content);
  }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

logOutNotesFormatted(); 

console.log(notes); 
