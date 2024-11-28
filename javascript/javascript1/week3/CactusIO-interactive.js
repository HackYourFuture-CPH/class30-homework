let activities =[];
let limit = 180;
let value = 0;
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();

function addMoreLimit(minutes){ // I added the "addMoreLimit" function if user wants to change the limit
    if(typeof(minutes) != "number" && minutes < 0){
        return "Error! Incorrect number";
    } else {
        if(limit < 300){
            if(minutes < 120){
                limit += minutes;
                console.log(`${minutes} minutes added. Now limit is ${limit} minutes`);
            } else{
                return "It's too much. Add less";
            }
        } else {
            return "You're on the phone a lot today!";
        }
    }
}

function addActivity(date, activity, duration){
    x = ((typeof(activity) === "string" && activity != "") && (typeof(date) === "string" && date != "") && typeof(duration) === "number");
    if(x){
        if(limit < value+duration){
            return console.log("You have reached your limit, no more smartphoning for you!");
        } else{
            value =+ duration;
            return activities.push({date, activity, duration});
        }
    } else {
        return "Error";
    }
}

function showStatus(activities){
    if(activities.length === 0){
        return "Add some activities before calling showStatus";
    }

    let count = 0;
    let amount = 0;
    for (let i = 0; i < activities.length; i++) {
        count += 1;
        amount += activities[i].duration;
    }

    console.log(`You have added ${count} activities. They amount to ${amount} min. to usage`);
    if(amount >= limit){
        console.log("You have reached your limit, no more smartphoning for you!");
    }
}

function mostTimeAct(){
    if(activities.length>0){
        let mostAct = activities[0];
        for (let i = 0; i < activities.length; i++) {
            if(activities[i].duration > mostAct.duration){
                mostAct = activities[i];
            }
        }
        return `The most time activitie: ${mostAct.activity}. It takes ${mostAct.duration} minutes`;
    } else {
        return "0 activities. Add few more."
    }
}

addActivity('2023, 7 , 19', "Youtube", 30);
showStatus(activities);
addActivity('2023, 7 , 18', "Twitch", 60);
showStatus(activities);
addActivity('2023, 7 , 18', "CS2", 180);
console.log(mostTimeAct());
showStatus(activities);

addMoreLimit(90);

addActivity('2023, 7 , 18', "CS2", 150);
console.log(mostTimeAct());
showStatus(activities);