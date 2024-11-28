// Adding an activity
// const activities = [];

// function addActivity(activityDate, activityContent, activityDurationMin) {
//     let activityInfo = {
//         date: activityDate,
//         activity: activityContent,
//         duration: activityDurationMin,
//     };
//     activities.push(activityInfo);
// }


// addActivity("23/7-18", "Youtube", 30);
// addActivity("24/7-18", "Netflix", 50);
// addActivity("24/9-18", "Facebook", 20);
// console.log(activities);


// Show my status 
// function showStatus() {
//     if(activities.length === 0){
//         return 'Add some activities before calling showStatus.'
//     }else{
//         let timeOfUsage = 0;
//         for(i = 0; i < activities.length; i++){
//             timeOfUsage += activities[i].duration;
//         }
//         return `You have added ${activities.length} activities. They amount to ${timeOfUsage} min. of usage.`
//     }
// }

// console.log(showStatus());


// Usage limit
// About the function, I think people usually get the status or data at the moment. 
// The previous records already happened, it's not necessary to alert limit. So just calculate their total duration.
// So I set the latest activities of today, if the total duration is over 120 min., then alert of limit.
// Then a quetion pops up. Should we format the date input into a standard form, or adjust today's date fitting the input date?

// const today = new Date();
// const formatToday = (date) => {
//     const year = String(date.getFullYear()).slice(2);
//     const month = String(date.getMonth() + 1);
//     const day = String(date.getDate());
//     return `${year}/${month}-${day}`
// }
// const todayFormatted = formatToday(today);

// function showStatus() {
//     if(activities.length === 0){
//         return 'Add some activities before calling showStatus.'
//     }else{
//         let activitiesToday = activities.filter(activities => activities.date === todayFormatted);
//         if(activitiesToday.length > 0){
//             let usageOfToday = activitiesToday.reduce((totalDuration, activities) => totalDuration + activities.duration, 0);
//             if(usageOfToday >= 120) {
//                 return 'You have reached your limit, no more smartphoning for you!'
//             }else{
//                 return `You have added ${activities.length} activities. They amount to ${timeOfUsage} min. of usage.`
//             }
//         }else{
//             let timeOfUsage = 0;
//             for(i = 0; i < activities.length; i++){
//                 timeOfUsage += activities[i].duration;
//             }
//             return `You have added ${activities.length} activities. They amount to ${timeOfUsage} min. of usage.`
//         }
//     }
// }

// console.log(showStatus());
// // addActivity('24/11-26', 'Do Homework', 100);
// // addActivity('24/11-26', 'Coding', 100);
// console.log((activities));



//  input Date automatically
const activities = [];

// I tried to as order of date, content,then doration, it led content and duration move forward, so here I put date in the end.
function addActivity(activityContent, activityDurationMin, activityDateInput) { 
    const activityDate = activityDateInput || new Date().toLocaleDateString("en-US"); // input a specify day or automatically today's date
    let activityInfo = {
        date: new Date(activityDate).toLocaleDateString("en-US"),
        activity: activityContent,
        duration: activityDurationMin,
    };
    activities.push(activityInfo);
}
addActivity("Youtube", 130, "11/26/2024");
addActivity("Youtube", 30);
addActivity("Facebook", 20);
addActivity("Homework", 150)
console.log(activities)

// as date format is already unified, then showStatus should be updated. Here I would like to show status of today or a specific day.
// here I want to alert only for the usage limit of today, if the previous records sum over limit, it won't alert but a summary of usage.
function showStatus(dateInput) {
    if(activities.length === 0){
        return 'Add some activities before calling showStatus.'
    }else{
        let activitiesOneDay = activities.filter(activities => activities.date === dateInput);
        if(activitiesOneDay.length > 0){
            let usageOfOneDay = activitiesOneDay.reduce((totalDuration, activities) => totalDuration + activities.duration, 0);
            if(usageOfOneDay >= 120 && dateInput === new Date().toLocaleDateString("en-US")) {
                return 'You have reached your limit, no more smartphoning for you!'
            }else{
                return `You have added ${activitiesOneDay.length} activities today. They amount to ${usageOfOneDay} min. of usage.`
            }
        }else{
            return `Add some activities on ${dateInput} before calling showStatus.`
        }
    }
}

const checkToday = new Date().toLocaleDateString("en-US");
console.log(showStatus(checkToday)); //alert when sum of today are over limit.
console.log(showStatus("11/26/2024")); //previous records sum without alert.
console.log(showStatus("11/25/2024")); // no records in a specific day.


// Which activity has a user spent the most time on
function activityOfMostTime() {
    if(activities.length === 0){
        return "No activities found.";
    }else{
        let maxTimeActivity = activities[0];
        for(i = 0; i < activities.length; i++){
            if(activities[i].duration > maxTimeActivity.duration){
                maxTimeActivity = activities[i];
            }
        }
        return `The activity you spent the most time on is ${maxTimeActivity.activity} with ${maxTimeActivity.duration} minutes.`;
    }
    
}

console.log(activityOfMostTime());