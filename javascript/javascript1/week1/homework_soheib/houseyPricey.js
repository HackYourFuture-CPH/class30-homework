let peterHouse = {
    width: 8,
    depth: 10,
    height: 10,
    garden: 100,
    price: 2500000
};

let juliaHouse = {
    width: 5,
    depth: 11,
    height: 8,
    garden: 70,
    price: 1000000
};

function volumeCalc(house){
    let volume = house.depth * house.width * house.height
    return volume;
}

function houseValueCalc(house){
    let houseValue = volumeCalc(house) * 2.5 * 1000 + house.garden * 300;
    return houseValue
}

function compareValue(house) {
    if(houseValueCalc(house) > house.price ) {
        let diff = Math.floor(houseValueCalc(house)) - house.price; 
        return console.log(`Ouch! This person is paying ${diff} too much for the house :(`)
    } else if (houseValueCalc < house.price) {
        diff = house.price - Math.floor(houseValueCalc(house))
        return console.log(`This person got a good deal, and saved ${diff} on the price of the house`)
    } else {
        console.log(`Bingo! you've paid the right price`)
    }
}

compareValue(peterHouse);
compareValue(juliaHouse);