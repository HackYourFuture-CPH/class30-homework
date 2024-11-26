let notes = [];
function saveNote (content, id){
    const newObj = {"content": content, "id": id};
    return notes.push(newObj)
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); 