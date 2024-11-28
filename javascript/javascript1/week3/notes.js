var notes = [];

function saveNote(content, id){
    if(typeof(id) === "number" && typeof(content) === "string" && content !=""){
        notes.push({content, id});
    } else{
        return "Incorrect note";
    }
}

function getNote(id){
    if(typeof(id) === "number"){
        for (let i = 0; i < notes.length; i++) {
            if(notes[i].id === id){
                return notes[i];
            }
            return "Error! Incorrect number."
        }
    } else{
        return "Error!"
    }
}

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`);
    }
}



saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}


  
logOutNotesFormatted(); // should log out the text below
  
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

function findByWord(word){
    const regex = new RegExp(`\\b${word}\\b`, "i");
    if(typeof(word) === "string" && word != ""){
        const result = notes.find(note => regex.test(note.content));
        return result;
    } else {
        return 0;
    }
} // I added the function for finding a note with a specified word

console.log(findByWord("up"));
console.log(findByWord("Do"));