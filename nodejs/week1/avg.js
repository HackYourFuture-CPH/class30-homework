const arguments = process.argv;

let numbers = []; 

for (let arg of arguments) { 
    let num = Number(arg); 
    if (!isNaN(num)) { 
        numbers.push(num);
    }
}


if (numbers.length === 0) {
    console.log("Provide a valid number");
} else {

    let sum = 0; 
    for (let num of numbers) { 
        sum = sum + num; 
    }   
    const average = sum / numbers.length;
    
    console.log(average);
}


