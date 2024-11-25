//  Exercise 2: When will we be there??

const travelInformation = {
	speed: 50,
	destinationDistance: 432,
};

function calculateTravelTime(travel) {
	const totalTravelMinutes = (travel.destinationDistance / travel.speed) * 60;
	const travelHours = Math.floor(totalTravelMinutes / 60);
	const travelMinutes = totalTravelMinutes % 60;
	return `Travel time is: ${travelHours} hours and ${travelMinutes.toFixed()} minutes`;
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
