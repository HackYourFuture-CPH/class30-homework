//CactusIO-interactive (Smart phone usage app) optional

//Adding an activity

const activities=[];

function addActivity(date, activity, duration){
    activities.push({date: date, activity: activity, duration: duration });
    return activities;
}

addActivity("26/11-24", "Youtube", 30);
addActivity("27/11-24", "Game", 50);
addActivity("28/11-24", "Reading", 20);
console.log(activities);

//Show my status + Usage limit

let usageLimit = 100;

function showStatus(){
    let sum = 0;
    for (i=0; i<activities.length; i++){
     sum += activities[i].duration;
    }
    if(sum < usageLimit){
    return `You have added ${activities.length} activities. They amount to ${sum} min. of usage.`;
    }

    return "You have reached your limit, no more smartphoning for you!";
}

console.log(showStatus());


//New feature

function mostTimeSpent() {
    if (activities.length === 0) {
        return "No activities recorded yet.";
    }

    let maxActivity = activities[0];

    for (let i = 1; i < activities.length; i++) {
        if (activities[i].duration > maxActivity.duration) {
            maxActivity = activities[i];
        }
    }

    return `You spent most of your time on "${maxActivity.activity}" with ${maxActivity.duration} minutes.`;
}

console.log(mostTimeSpent());