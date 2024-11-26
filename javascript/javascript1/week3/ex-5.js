// Exercise 5: CactusIO-interactive (Smart phone usage app) optional

const activities = [];
const usageLimit = 75;

function addActivity(date, activity, duration) {
	const actualDate = new Date().toLocaleDateString("dk-DK");
	activities.push({ date: actualDate, activity, duration });
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

addActivity("Youtube", 30);
addActivity("Facebook", 40);
addActivity("Facebook", 25);

console.log(activities);
showStatus(activities);
