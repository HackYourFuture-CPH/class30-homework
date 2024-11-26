const notes = [];

function saveNote(content, id) {
  const newObject = { text: content, value: id };
  notes.push(newObject);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]
