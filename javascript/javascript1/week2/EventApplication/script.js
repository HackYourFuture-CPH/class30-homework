const today = new Date();
const dayOfWeek = today.getDay();
let dias = 5;

dayName = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday" ]

const fecha = (dayOfWeek + dias) % 7;

console.log(fecha);
console.log(dayOfWeek);
console.log(dayName[fecha]);