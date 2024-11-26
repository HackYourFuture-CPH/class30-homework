// Exercise 5: CactusIO-interactive (Smart phone usage app) optional

const activities = [];
const usageLimit = 75;

function addActivity(date, activity, duration) {
	activities.push({ date, activity, duration });
}

function showStatus(arr = activities) {
	let totalDuration = 0;
	arr.map(({ duration }) => (totalDuration += duration));
	console.log(
		`You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage`
	);

	totalDuration > usageLimit
		? console.log("You have reached your limit, no more smartphoning for you!")
		: console.log("You may continue to use a bit");
}

addActivity("23/7-18", "Youtube", 30);
addActivity("25/7-18", "Facebook", 40);
addActivity("26/7-18", "Facebook", 25);

console.log(activities);
showStatus(activities);
