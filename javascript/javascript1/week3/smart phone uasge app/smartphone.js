let activities = [];
let mostTimeSpentActivity = null;

function addActivity(activity, duration) {
  if (typeof duration !== "number") {
    console.log("Duration must be a number");
  }
  const today = new Date();
  const date = today.toISOString().split("T")[0];
  const activityRecord = {
    date: date,
    activity: activity,
    duration: duration,
  };
  activities.push(activityRecord);

  if (!mostTimeSpentActivity || duration > mostTimeSpentActivity.duration) {
    mostTimeSpentActivity = activityRecord;
  }
}

addActivity("Youtube", 30);
addActivity("WhatsApp", 25);
addActivity("Instagaram", 20);
addActivity("WhatsApp", 15);

console.log(activities);

function showStatus() {
  let usageLimit = 120;
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
  }
  const totalActivities = activities.length;
  let totalDuration = 0;
  for (let i = 0; i < totalActivities; i++) {
    totalDuration += activities[i].duration;
  }
  if (totalDuration > usageLimit) {
    console.log(
      `You have reached your usage limit ${usageLimit} min., so no more smartphone usage`
    );
  }
  return `You have added ${totalActivities} activites. They amount to ${totalDuration} min. of usage`;
}

console.log(showStatus());

addActivity("LinkedIn", 35);

console.log(showStatus());
console.log(activities);

function getMostTimeSpentActivity() {
  if (!mostTimeSpentActivity) {
    return "No activities to analyze.";
  }
  return `You spent the most time on "${mostTimeSpentActivity.activity}" with a duration of ${mostTimeSpentActivity.duration} minutes.`;
}

console.log(getMostTimeSpentActivity());

addActivity("Youtube", 10);
console.log(showStatus());
console.log(activities);
console.log(getMostTimeSpentActivity());
