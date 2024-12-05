function getOutfit  (temp){
    let outfit = "";
    if (temp < 10 || temp === 10 ) {return outfit = "Better  get in your boots and jacket !"}
    else if ( temp < 20 || temp === 20) { return outfit = "A sweater or a light cardigan are the way to go today .."}
    else { return outfit = " A tshirt and shorts are the ideal outfit for today!"}
}
console.log(getOutfit(12));