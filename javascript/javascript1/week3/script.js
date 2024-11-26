// WARM UP TASK
const names = [
  'Peter',
  'Ahmad',
  'Yana',
  'kristina',
  'Rasmus',
  'Samuel',
  'katrine',
  'Tala',
];

const nameToRemove = 'Ahmad';

const indexToRemove = names.includes(nameToRemove);
if (indexToRemove !== 1) {
  names.splice(indexToRemove, 1);
}

console.log(names);
