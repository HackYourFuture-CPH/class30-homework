//  Exercise 4: NOnoN0nOYes (Note taking app)

const notes = [];

function saveNote(content, id) {
	const note = { content, id };
	notes.push(note);
}

function getNote(id) {
	for (let i = 0; i < notes.length; i++) {
		if (notes[i].id === id) {
			return notes[i];
		}
	}

	return console.log(`Note with ID ${id} not exists.`);
}

function logOutNotesFormatted(arr = notes) {
	arr.map(({ content, id }) =>
		console.log(
			`The note with id: ${id}, has the following note text: ${content}`
		)
	);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

const firstNote = getNote(1);
const secondNote = getNote(2);
const thirdNote = getNote(3);
console.log(firstNote);
console.log(secondNote);
console.log(thirdNote);

logOutNotesFormatted();
