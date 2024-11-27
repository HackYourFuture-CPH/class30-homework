
const activities = []

function addActivity(activity, duration) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    const date = today.toLocaleDateString("en-GB", options)

    activities.push({ date: date, activity: activity, duration: duration })
    console.log(`Activity ${activity} with date ${date} with duration of ${duration} has been added.`)
}
function showStatus(arr) {
    if (arr === undefined || arr.length == 0) {
        console.log("Add some activities before calling showStatus")
    } else {
        let activitiesInfo = ""
        let totalDuration = 0
        for (let item of arr) {
            totalDuration += item.duration;
        }
        activitiesInfo += `You have added ${arr.length} activities. They amount to ${totalDuration}`
        console.log(activitiesInfo)
        if (totalDuration >= 150) {
            console.log("You have reached your limit, no more smartphoning for you!")
        }
    }
}
function findTheActivityWithMostTimeSpentOn(arr = []) {
    const activitiesDurations = []
    for (let item of arr) {
        activitiesDurations.push(item.duration);
    }
    const maxActivityDuration = Math.max(...activitiesDurations)
    const maxActivityName = arr.find(x => x.duration === maxActivityDuration)
    console.log(`Activity ${maxActivityName.activity}: Duration ${maxActivityDuration}`)
}
addActivity("Youtube", 30);
addActivity("Instagram", 112);
addActivity("Facebook", 25);
showStatus(activities)
findTheActivityWithMostTimeSpentOn(activities)
