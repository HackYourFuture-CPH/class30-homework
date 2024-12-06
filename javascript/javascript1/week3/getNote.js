
const activities = [];

let usageLimit = 60; 


function addActivity(activity, duration) {
  const date = new Date().toLocaleDateString(); 
  const activityRecord = {
    date: date,
    activity: activity,
    duration: duration
  };
  activities.push(activityRecord);  
}


function showStatus(activities) {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  let totalDuration = 0;
  for (let i = 0; i < activities.length; i++) {
    totalDuration += activities[i].duration;
  }

  
  if (totalDuration > usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  } else {
    console.log(`You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage`);
  }
}




addActivity("Youtube", 30);  
addActivity("Facebook", 45);  
addActivity("Instagram", 20);  

showStatus(activities);  // You have reached your limit, no more smartphoning for you!