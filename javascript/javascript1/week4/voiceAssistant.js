let userName = '';
const toDoList = [];


function getReply(command) {
    command = command.toLowerCase()
    if(command.startsWith('hello my name is')) {
        return userNameLogin(command);
    }

    if (command === 'what is my name') {
        return replyMyName()
    }

    if (command.startsWith('add') && command.endsWith('to my todo')) {
        return addToDoList(command)
    }

    if (command.startsWith('remove') && command.endsWith('from my todo')) {
        return removeToDoList(command)
    }

    if (command === 'what is on my todo?') {
        return showToDoList()
    }

    if (command === 'what day is it today?') {
        return findTodayDate()
    }

    if (command.startsWith('what is')) {
        return numberCalculator(command)
    }

    if (command.startsWith('set a timer for')) {
        return setTimer(command)
    }
    
    if (command.startsWith('remind me to')) {
        return setReminder(command)
    }

    else{
        return `Sorry, I don't understand your command`
    }
}


function userNameLogin(command) {
    let loginName = command.split(' ')[4].toLowerCase().trim();
    if (loginName === '') {
        return 'Please tell me your name'
    }else if (loginName === userName) {
        return `Nice to meet you again, ${userName}`
    }else{
        userName = loginName;
        return `Nice to meet you ${userName}`
    }
}


function replyMyName() {
    if(userName != ''){
        return `Your name is ${userName}`
    }else return 'Please tell me your name'
}


function addToDoList(command) {
    const addStartIndex = command.indexOf('add') + 4;
    const addEndIndex = command.indexOf('to my todo');
    let thingToDo = command.slice(addStartIndex, addEndIndex).trim();
    if (thingToDo === '') {
        return 'What do you want to add to your todo?'
    }else if (toDoList.includes(thingToDo)) {
        return `You have already added ${thingToDo} to your todo`
    }else{
        toDoList.push(thingToDo);
        return `${thingToDo} added to your todo`
    }
}


function removeToDoList(command) {
    const removeStartIndex = command.indexOf('remove') + 7;
    const removeEndIndex = command.indexOf('from my todo');
    let thingToRemove = command.slice(removeStartIndex, removeEndIndex).trim();
    if (thingToRemove === '') {
        return 'What do you want to remove from your todo?'
    }else if (!toDoList.includes(thingToRemove)) {
        return `You don't have ${thingToRemove} on your todo list`
    }else{
        let IndexOfThingToRemove = toDoList.indexOf(thingToRemove);
        toDoList.splice(IndexOfThingToRemove, 1)
        return `Remove ${thingToRemove} from your todo`
    }
}


function showToDoList() {
    if (toDoList.length === 0) {
        return 'There is no todo on the list'
    }else if (toDoList.length === 1) {
        return `You have ${toDoList.length} todo - ${toDoList[0]}.`
    }else{
        let tasksOutput = toDoList.slice(0, toDoList.length - 1).join(', ');
        let lastTask = toDoList[toDoList.length - 1]
        return `You have ${toDoList.length} todos - ${tasksOutput} and ${lastTask}.`
    }
}


function findTodayDate() {
    let todayDate = new Date();
    let todayDateYear = todayDate.getFullYear();
    const allMonths = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let todayDateMonth = allMonths[todayDate.getMonth()]
    let todayDateDay= todayDate.getDate();

    return `Today is ${todayDateDay}. of ${todayDateMonth} ${todayDateYear}` 
}


function numberCalculator(command) {
    let calculatedString = command.slice(8).trim();
    let result = eval(calculatedString);
    return result;
}


function setTimer(command) {
    let timerNum = parseInt(command.split(' ')[4]);
    let timeUnit = command.split(' ')[5];
    let actualTimerNum = timerNum * 60 * 1000;
    setTimeout(() => {
        console.log(`Time's up!`);
    }, actualTimerNum);
    return `Timer has been set for ${timerNum} ${timeUnit}.`
}


function setReminder(command) {
    let actionStartIndex = command.indexOf('remind me to') + 12;
    let actionEndIndex = command.indexOf('at time');
    let actionToRemind = command.slice(actionStartIndex, actionEndIndex).trim();
    let actionTimeString = command.slice(command.indexOf('at time') + 8).trim();

    const currentTime = new Date();
    const actionTime = new Date();
    const timeFormat = actionTimeString.split(':');
    actionTime.setHours(parseInt(timeFormat[0]));
    actionTime.setMinutes(parseInt(timeFormat[1]));

    if (actionTime < currentTime) {
        return `Please set a future time.`
    }

    let delayTime = actionTime - currentTime;
    setTimeout(() => {
        console.log(`It's time to ${actionToRemind}`);
    }, delayTime);
    return `Reminder is set: to ${actionToRemind} at ${actionTimeString}`;
}


console.log(getReply('Hello this is Alice'));
console.log(getReply('Hello my name is Alice'));
console.log(getReply('Hello my name is Alice'));
console.log(getReply('What is my name'))
console.log(getReply('Add cooking lunch to my todo'))
console.log(getReply('Add to my todo'))
console.log(getReply('Add cooking lunch to my todo'))
console.log(getReply('Add doing homework to my todo'))
console.log(getReply('Add checking email to my todo'))
console.log(getReply('Add buying gifts to my todo'))
console.log(getReply('Remove from my todo'))
console.log(getReply('Remove shopping from my todo'))
console.log(getReply('Remove cooking lunch from my todo'))
console.log(getReply('What is on my todo?'))
console.log(getReply('what day is it today?'));
console.log(getReply('What is 9 * 9'));
console.log(getReply('Set a timer for 1 minutes'))
console.log(getReply('Remind me to attend meeting at time 19:00'))