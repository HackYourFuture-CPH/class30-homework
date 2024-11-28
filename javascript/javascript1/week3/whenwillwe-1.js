const travelInformation = {
    speed: 50, 
    destinationDistance: 432, 
};

function getArrival() {
    const totalTimeInHours = travelInformation.destinationDistance / travelInformation.speed;
    const hours = Math.floor(totalTimeInHours);
    const minutes = Math.floor((totalTimeInHours - hours) * 60);
    const seconds = Math.round(((totalTimeInHours - hours) * 60 - minutes) * 60);

    return `${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}

console.log(getArrival());
