// Exercise 2: Event application

function getEventWeekday(days) {
	const weekdays = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const numberOfEventDay = (new Date().getDay() + days) % 7;

	return `Event will be on: ${weekdays[numberOfEventDay]}` 
}

console.log(getEventWeekday(7));
console.log(getEventWeekday(2));
console.log(getEventWeekday(10));
