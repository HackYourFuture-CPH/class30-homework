// Exercise 3: Series duration of my life

const seriesDurations = [
	{
		title: "Yellowstone",
		days: 14,
		hours: 15,
		minutes: 48,
	},
	{
		title: "The Walking Dead",
		days: 25,
		hours: 5,
		minutes: 6,
	},
	{
		title: "Breaking Bad",
		days: 4,
		hours: 23,
		minutes: 48,
	},
	{
		title: "The Big Bang Theory",
		days: 9,
		hours: 6,
		minutes: 6,
	},
	{
		title: "The Ranch",
		days: 10,
		hours: 22,
		minutes: 6,
	},
	{
		title: "Vikings",
		days: 27,
		hours: 22,
		minutes: 22,
	},
	{
		title: "House Of Cards",
		days: 30,
		hours: 12,
		minutes: 25,
	},
	{
		title: "Narcos",
		days: 31,
		hours: 12,
		minutes: 55,
	},
];

function logOutSeriesText(series = seriesDurations) {
	let totalTime = 0;
	const lifeInMinutes = 80 * 365 * 24 * 60;

	series.map(({ title, days, hours, minutes }) => {
		const totalSeriesMinutes = days * 24 * 60 + hours * 60 + minutes;
		const percentageOfTime = (totalSeriesMinutes / lifeInMinutes) * 100;
		console.log(`${title} took ${percentageOfTime.toFixed(3)}% of my life. `);
		totalTime += percentageOfTime;
	});

	console.log(`In total that is ${totalTime.toFixed(3)}% of my life`);
}

logOutSeriesText();
