const peterHouse = {
    width: 8,
    depth: 10,
    height: 10,
    garden: 100,
    price: 2500000
};

const juliaHouse = {
    width: 5,
    depth: 11,
    height: 8,
    garden: 70,
    price: 1000000
};

function calculateVolume(house){
    return house.depth * house.width * house.height
}

function calculateHouseValue(house){
    return Math.floor(calculateVolume(house) * 2.5 * 1000 + house.garden * 300);
}

function compareValue(house) {
    const houseValue = calculateHouseValue(house);
    const priceDifference = Math.abs(house.price - houseValue);

    if(houseValue > house.price ) { 
        return console.log(`Ouch! This person is paying ${priceDifference}kr. too much for the house :(`)
    } else if (houseValue < house.price) {
        return console.log(`This person got a good deal, and saved ${priceDifference}kr. on the price of the house`)
    } else {
        console.log(`Bingo! you've paid the right price`)
    }
}

compareValue(peterHouse);
compareValue(juliaHouse);