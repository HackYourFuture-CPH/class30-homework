//NOnoN0nOYes (Note taking app)

//Save a note

const notes=[]

function saveNote( content, id){
    const note = { content, id };
   notes.push(note);
}
saveNote( "Pick up groceries", 1);
saveNote( "Do laundry", 2);

console.log(notes);

//Get a note

function getNote(id) {
    const findNote = notes.find((note) => note.id === id);
    return findNote;
  }
  
  const firstNote = getNote(1);
  console.log(firstNote);

  //Log out notes

  function logOutNotesFormatted() {
    notes.forEach((note) => {
      console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`);
    });
  }
  
  logOutNotesFormatted();

  //Set Reminders for Notes

  function setReminder(id, reminderTime) {
    const note = notes.find((note) => note.id === id);
    if (!note) {
      console.log(`Note with id: ${id} not found.`);
      return;
    }
    note.reminder = new Date(reminderTime); // Store the reminder as a Date object
    console.log(`Reminder set for note with id: ${id} on ${note.reminder}`);
  }