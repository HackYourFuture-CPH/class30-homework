const activities = [];
let usageLimit = 120; // in minutes

function addActivity(date, activity, duration) {
  const newActivity = {
    date: date || new Date().toLocaleDateString(),
    activity: activity,
    duration: duration,
  };
  activities.push(newActivity);
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

// Example usage:
addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Facebook", 45);
addActivity("23/7-18", "News Reading", 50);

showStatus(); // "You have added 3 activities. They amount to 125 min. of usage"