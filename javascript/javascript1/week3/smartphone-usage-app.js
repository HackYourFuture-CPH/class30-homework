//Adding an activity
const activities =[]

function addActivity(activity, duration){
  const today = new Date();
  const date = today.toLocaleDateString("en-US");
  activities.push({date:date, activity:activity, duration:duration })
}
addActivity( "YouTube", 60);
addActivity("Instagram", 30);


console.log(activities);

//Show status and usage limit

const limitation = 180;

function showStatus(){
  const quantity = activities.length;
  let totalDuration = 0 ;
  
  if (quantity !== 0){
    for(let i = 0; i < activities.length; i++){
      totalDuration += activities[i].duration; 
    }
    if (totalDuration< limitation)
      return `You have added ${quantity} activities. They amount to ${totalDuration} min. of usage.`
    else
      return `You have added ${quantity} activities. They amount to ${totalDuration} min. of usage.
You have reached your limit, no more smartphoning for you!`
  } else{
    return `Add some activities before calling showStatus.`;
  } 
}

//Test cases
let myStatus = showStatus();
console.log(myStatus);

addActivity("Call of Duty", 90);
 myStatus = showStatus();
console.log(myStatus);



//Extra feature
//Adding new key value pair to indicate activities category
const appCategories = {
  socialMedia: ['Instagram', 'WhatsApp', 'Facebook', 'Twitter', 'Snapchat', 'LinkedIn', 'TikTok', 'Reddit', 'Pinterest', 'WeChat'],
  gaming: ['PUBG Mobile', 'Call of Duty', 'Candy Crush', 'Minecraft', 'Pokémon GO', 'Among Us', 'Clash Royale', 'Genshin Impact', 'Asphalt 9', 'Roblox'],
  productivity: ['Google Calendar', 'Trello', 'Notion', 'Evernote', 'Microsoft To Do', 'Zoom', 'Slack', 'Google Docs', 'Forest', 'Habitica'],
  entertainment: ['Netflix', 'Spotify', 'Disney+', 'YouTube', 'Twitch', 'Amazon Prime Video', 'Hulu', 'Audible', 'Apple Music', 'Crunchyroll']
};

function categorizeActivity(activities,categoies){
  for( let i = 0; i < activities.length; i++){
    for(const [category,apps] of Object.entries(categoies)){
      if (apps.includes(activities[i].activity)){
        activities[i].type = category;
        break;
      }
    }
  }
}

categorizeActivity(activities, appCategories);
console.log(activities);