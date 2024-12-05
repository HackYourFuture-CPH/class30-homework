let theirName = undefined;
let todoList = [];



function saveName(command){
    let name = command.split(" ")[4];
    theirName = name;
    return(`Nice to meet you${theirName}`);
}



function getName(){
    if(theirName){
        return (`You name is ${theirName}`);
    }else {
        return ("Who are You ahahhha");
    }
}


function addTodoList(command){
    let todo = command.slice(4, command.indexOf("to my todo"));
    todoList.push(todo);
    return `${todo} added to you todo`;
}








function getReply(command){
        if(command.startsWith("Hi my name is")){
            return saveName(command);
        }


        if (command == "What is my name?") {
            return getName();
        }

        return "Im not advanced enough to answer this."
}