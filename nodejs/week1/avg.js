console.log("Hi I'm avg.js");

const args = process.argv.slice(2);


function checkIfNumber(arg) {
   return !isNaN(parseFloat(arg)) && isFinite(arg);
};

function getAVG(args) {
    const sum = args.reduce((acc, arg) => acc + parseFloat(arg), 0);
    return sum / args.length;
}

function main(args) {
    

    if (args.length === 0) {
        console.log("No arguments provided, please provide at least one number");
        return;
    } 
    
    if (!args.every(checkIfNumber)) {
        console.log("Please provide only numbers");
        return;
    } 
    
    const average = getAVG(args);
    console.log(`The average of ${args.join(", ")} is ${average}`);
    return average;
    } 

    



console.log(main(args));


