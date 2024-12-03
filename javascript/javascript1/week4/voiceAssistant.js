let theirName = undefined;

function saveName(command){
    let name = command.split(" ")[4];
    theirName = name;
    console.log(`Nice to meet you${theirName}`);
}





function getName(){
    if(theirName){
        return (`You name is ${theirName}`);
    }else {
        return ("Who are You ahahha");
    }
}

function getReply(command){

}