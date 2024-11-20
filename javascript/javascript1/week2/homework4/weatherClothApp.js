const winterClothes = {
    coats: ['Winter Coat1', 'Winter Coat2',],
    headwear: ['beanie', 'hat'],
    scarves: ['Heavy Scarf1', 'Heavy Scarf 2'],
    tops: ['turtle-neck', 'wool sweater', 'thick hoodie', 'crew neck sweater'],
    gloves: ["Winter gloves"],
    pants: ['Winter pants1', 'rain pants', 'Winter pants2'], 
    socks: ['winter socks', 'chrismas socks', 'wool socks'],
    shoes: ['winter boots', 'leather boots', 'high boots']
}

const fallSpringClothes = {
    coats: ['light jacket1', 'light jacket2'],
    scarves: ['light scarf1', 'light scarf2'],
    tops: ['warm top', 'thick shirt', 'sweater', 'hoodie'],
    gloves: ['light gloves'],
    pants: ['grey pants', 'rain pants', 'blue pants'],
    socks: ['regular socks'],
    shoes: ['leather boots', 'light shoes', 'sport shoes', 'sneackers']
}

const summerClothes = {
    
    tops: ['light shirt', 't-shirt1', 't-shirt2', 'v-neck', 'light shirt2'],
    headwear: ['baseball cap', 'bob'],
    pants: ['light pants', 'shorts'],
    socks: ['regular socks'], 
    shoes: ['fliflops', 'sandals', 'light sneackers']
}

function getRandomValues(obj) {
    const result = {};
    for (let key in obj) {
        const valuesArray = obj[key];
        const randomIndex = Math.floor(Math.random() * valuesArray.length);
        result[key] = valuesArray[randomIndex];
    }
    return result;
}

function getClothes(degrees){
    if (degrees === undefined) { return `please enter and int value of the temperature in Celsius`}
    else if(degrees < -40 || degrees > 50)  {
        return `you entered ${degrees}°C.
        That means you either made a mistake, or that we are paying the consequences of climate change and all is left is to pray!
        This function is designed for the range of -40°C to +50°C`
    } else if (degrees < 5) {
        const clothes = getRandomValues(winterClothes);
        return `Brrr! It's freezing. Here's a suggestion for what to wear: 
        Coats: ${clothes.coats || 'None'}, Headwear: ${clothes.headwear || 'None'}, Scarves: ${clothes.scarves || 'None'}, 
        Tops: ${clothes.tops}, Gloves: ${clothes.gloves || 'None'}, Pants: ${clothes.pants}, 
        Socks: ${clothes.socks}, Shoes: ${clothes.shoes}`;
    } else if (degrees >= 5 && degrees <= 20) {
        const clothes = getRandomValues(fallSpringClothes);
        return `It's cool outside. Here's a suggestion for what to wear: 
        Coats: ${clothes.coats || 'None'}, Scarves: ${clothes.scarves || 'None'}, 
        Tops: ${clothes.tops}, Gloves: ${clothes.gloves || 'None'}, Pants: ${clothes.pants}, 
        Socks: ${clothes.socks}, Shoes: ${clothes.shoes}`;
    } else if (degrees > 20) {
        const clothes = getRandomValues(summerClothes);
        return `It's warm outside. Here's a suggestion for what to wear: 
        Tops: ${clothes.tops}, Headwear: ${clothes.headwear || 'None'}, 
        Pants: ${clothes.pants}, Socks: ${clothes.socks}, Shoes: ${clothes.shoes}`;
    } 
}

//testing values
/* 
console.log(getClothes());
console.log(getClothes(0));
console.log(getClothes(-45));
console.log(getClothes(550));
console.log(getClothes(25));
console.log(getClothes(15));
*/