const activities = [];
let usageLimit = 120; // in minutes

function addActivity(activity, duration) {
  const date = new Date().toLocaleDateString();
  activities.push({ date, activity, duration });
}

function showStatus() {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  let totalDuration = 0;
  activities.forEach(activity => {
    totalDuration += activity.duration;
  });

  if (totalDuration > usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  } else {
    console.log(`You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage`);
  }
}

function mostTimeSpentActivity() {
  if (activities.length === 0) {
    console.log("No activities to analyze");
    return;
  }

  let maxActivity = activities[0];
  activities.forEach(activity => {
    if (activity.duration > maxActivity.duration) {
      maxActivity = activity;
    }
  });

  console.log(`The activity you spent the most time on is "${maxActivity.activity}" with ${maxActivity.duration} minutes.`);
}

// Example usage:
addActivity("Youtube", 30);
addActivity("Facebook", 40);
addActivity("Instagram", 50);

showStatus(); // "You have added 3 activities. They amount to 120 min. of usage"
mostTimeSpentActivity(); // "The activity you spent the most time on is 'Instagram' with 50 minutes."