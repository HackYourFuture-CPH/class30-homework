const notes = [];

function saveNote(content, id) {
  notes.push({ content, id }); 
  return `Note with id ${id} saved successfully!`;
}

console.log(saveNote('going on a run', 1)); 
console.log(saveNote('meeting with friends', 2)); 

// Get a note by id
function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i]; 
    }
  }
  return "Note cannot be found"; 
}

// Log all notes 
function logOutNotesFormatted() {
  let formattedNotes = ''; // Initialize an empty string to store all notes
  for (let i = 0; i < notes.length; i++) {
    formattedNotes += `The note with id: ${notes[i].id}, has the following content: "${notes[i].content}"\n`;
  }
  return formattedNotes; // Return all notes as a formatted string
}

console.log(getNote(1));
console.log(getNote(3)); 
console.log(logOutNotesFormatted()); 

// Optional feature: marking things as important

const notes2 = [];

function saveNote2(content, id) {
  notes2.push({ content, id, important: false });
  return `Note with id ${id} saved successfully!`;
}

function markAsImportant(id) {
  for (let i = 0; i < notes2.length; i++) {
    if (notes2[i].id === id) {
      notes2[i].important = true;
      return `Note with id ${id} is now marked as important.`;
    }
  }
  return `Note with id ${id} not found.`;
}

function logOutNotesFormatted2() {
  let formattedNotes = ''; 
  for (let i = 0; i < notes2.length; i++) {
    const note = notes2[i]; 
    if (note.important === true) {
      formattedNotes += `The note with id: ${note.id}, content: "${note.content}". Important!\n`;
    } else {
      formattedNotes += `The note with id: ${note.id}, content: "${note.content}"\n`;
    }
  }
  return formattedNotes; 
}

//Test
saveNote2("Pay bills", 1);
saveNote2("Go grocery shopping", 2);
saveNote2("Finish homework", 3);

console.log(markAsImportant(2)); 
console.log(markAsImportant(3)); 
console.log(logOutNotesFormatted2()); 
