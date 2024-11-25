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