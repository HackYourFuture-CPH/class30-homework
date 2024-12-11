const notes = [];

function saveNote(content, id) {
  if (notes.find((item) => item.id === id)) {
    console.log(
      `The Id you just entered ${id}, exists in notes please enter another ID`
    );
  } else {
    notes.push({ content: content, id: id });
  }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

function getNote(id) {
  return notes.find((item) => item.id === id);
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
  let allNotes = "";
  for (let item of notes) {
    allNotes += `The note with id: ${item.id}, has the following note text: ${item.content}\n`;
  }
  console.log(allNotes);
}
function deleteNote(id) {
  let noteToDelete = notes.includes(id);
  let indexToDelte = notes.indexOf(noteToDelete);
  notes.splice(indexToDelte, 1);
  console.log(`notes with this id: ${id} has been deleted`, notes);
}

logOutNotesFormatted();

deleteNote(2);
