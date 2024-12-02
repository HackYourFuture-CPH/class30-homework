//Save a note
const notes = [];

function saveNote(content, id) {
  notes.push({content :content, id: id, completed:false})
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

//Get a note
function getNote(id) {
  for(let i =0; i<notes.length ;i++){
    if(notes[i].id === id){
      return notes[i].content;
    }
  }
  return 'The id is not valid!';
}

const firstNote = getNote(2);
console.log(firstNote);

//Log out notes
function logOutNotesFormatted() {
  for (let i =0; i<notes.length ;i++){
    console.log ( `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}.`);
  }
  
}

logOutNotesFormatted();

//Unigue feature
//Adding new key-value pair to indicate task completion.

function markTaskCompleted (id){
  for(let i =0; i<notes.length ;i++){
    if(notes[i].id === id){
      notes[i].completed = true;
    }
  }
  return notes;
}
markTaskCompleted(2)
console.log(notes)

//Checking if a task is completed or not

function checkTaskCompleted(content) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].content === content) {
      if (notes[i].completed) {
        console.log(`The task: "${notes[i].content}" with id: ${notes[i].id} is completed.`);
      } else {
        console.log(`The task: "${notes[i].content}" with id: ${notes[i].id} is NOT completed!`);
      }
    }
  }
}

checkTaskCompleted('Pick up groceries');
checkTaskCompleted('Do laundry');