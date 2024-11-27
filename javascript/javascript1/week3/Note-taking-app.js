const notes = [];

function saveNote(content,id) {
        notes.push({ content: content, id: id});
}


saveNote("Wash clothes",1);
saveNote("Clean room",2)




function getNote(id){

        if(  id === undefined || typeof  id !== "number"){
                console.log("Please provide a valid number");
                
        }

        for(let i = 0; i < notes.length; i++ ){
                if(notes[i].id === id){
                        return notes[i];
                }
        }

       
}

function logsOutNotesFormated(){

        for(let i = 0; i < notes.length; i++){
                console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`); 
        }
        
}

logsOutNotesFormated();

console.log(getNote(1));