// Save a note
const notes = [];

function saveNote(content, id) {
  let myNote = {
    content: content,
    id: id
  };
  notes.push(myNote);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]


// Get a note
function getNote(id){
  for(i = 0; i < notes.length; i++){
    if(notes[i].id === id){
      return notes[i];
    }
  }
  return "Note not found."; // Incase wrong or not existed number is given.
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}


// Log out notes
function logOutNotesFormatted() {
  for(i = 0; i < notes.length; i++){
    console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content} `)
  }
}
  
logOutNotesFormatted(); // should log out the text below
  

  
  
// Unique feature: Get the latest ID to input the next one.
function getLatestId() {
  let latestId = notes[notes.length - 1].id;
  console.log(`The latest ID is ${latestId}.`);
}

getLatestId();


// Unique feature: What if user forgets the id, and just remember a keyword of content, how to find the note.
function getNoteWithoutId(keyword) {
  const lowerKeyword = keyword.toLowerCase(); //consider the input with uppercase or lowercase.
  for(i = 0; i < notes.length; i++) {
    if(notes[i].content.toLowerCase().includes(lowerKeyword)){
      return notes[i];
    }
  }
  return 'Note not found.'
}

console.log(getNoteWithoutId('Laundry'));
console.log(getNoteWithoutId('shopping'));