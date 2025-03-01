let sum = 0;

if (process.argv.length === 2) {
    console.log("Please enter a number");
    return 0;
}

for (let i = 2; i < process.argv.length; i++) {
    for (let j = 2; j < process.argv.length; j++) {
        if (isNaN(process.argv[j])) {
            console.log("Please enter a number");
            return 0;
        }
    }
    sum += parseInt(process.argv[i], 10);
}

const avg = sum / (process.argv.length - 2);
console.log("avg is : " + avg);