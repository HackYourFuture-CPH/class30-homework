
const peterHouse = {
    width : 8,
    height:10,
    depth:10,
    garden:100,
    price:2500000
}
const peterExpectedPrice = peterHouse.width * peterHouse.height * peterHouse.depth * 2.5 * 1000 + peterHouse.garden * 300;
const juliaHouse = {
    width : 5,
    height:8,
    depth:11,
    garden:70,
    price:1000000
}
const juliaExpectedPrice = juliaHouse.width * juliaHouse.height * juliaHouse.depth * 2.5 * 1000 + juliaHouse.garden * 300;
if(peterHouse.price <= peterExpectedPrice )
    console.log("Peter is paying too little!")
else{
    console.log("Peter is paying too much!")
}
if(juliaHouse.price <= juliaExpectedPrice )
    console.log("Julia is paying too little!")
else{
    console.log("Julia is paying too much!")
}
