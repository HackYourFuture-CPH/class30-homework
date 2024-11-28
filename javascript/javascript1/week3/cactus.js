const activities = [];

// Function to add activities with the actual date
function addActivity(activity, duration) {
    const date = new Date();
    const today = date.toISOString().split('T')[0]; // Format date as "YYYY-MM-DD"
    activities.push({ date: today, activity: activity, duration: duration, done: false });
    console.log(`${activity} for ${duration} minutes added on ${today}`);
}


// Function to check the number of activities today
function showStatus() {
    const date = new Date();
    const today = date.toISOString().split('T')[0]; // Format date as "YYYY-MM-DD"
    const todayActivities = activities.filter(activity => activity.date === today);

    if (todayActivities.length === 0) {
        console.log("No activities logged today.");
    } else {
        console.log(`You have logged ${todayActivities.length} activities today.`);
        console.log("Activities:");
        todayActivities.forEach(act => 
            console.log(`- ${act.activity}, ${act.duration} minutes, Done: ${act.done}`)
        );
    }
}

// Function to mark an activity as done
function markAsDone(activityName) {
    for (let i = 0; i < activities.length; i++) {
        if (activities[i].activity === activityName) {
            activities[i].done = true; // Update the "done" status
            return `Activity "${activityName}" is now marked as done.`;
        }
    }
    return `Activity "${activityName}" not found.`;
}


addActivity('Study', 120);
addActivity('Exercise', 60);
showStatus();

console.log(markAsDone('Study')); 
console.log(markAsDone('Cooking')); 
showStatus(); 
