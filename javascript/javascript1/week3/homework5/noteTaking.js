let notes = [];
function saveNote (content, id){
    const newObj = {"content": content, "id": id};
    return notes.push(newObj)
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); 

function getNote(id){
 for (let i = 0; i< notes.length; i++){
    if(notes[i].id === id) {
        return notes[i]
    }
 }
 return alert('Invalid id, try again with an existing id value')
}

const firstNote = getNote(1);
console.log(firstNote);

function logOutNotesFormatted() {
    for (let note of notes) {
        console.log(`The note with id: ${note.id}, has the following note text: ${note.content} `)
    }
  }
  
  logOutNotesFormatted();