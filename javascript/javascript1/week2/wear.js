//Weather wear
let tempurture= propmt("What is the tempurture?");

function decideClothes(tempurture,clothes){
    if (tempurture>= 23);{
        return clothes="T-shirt and Shorts";
    }
    else if (tempurture<23 && tempurture>=18){
        return clothes="Sweater and Jeans";
    }
    else if (tempurture<18 && tempurture>= 10){
        return clothes="Light jakket";
    }
    else{
        return clothes="winter jakket";
    }
}

const clothesToWear = decideClothes(tempurture,clothes);
console.log(clothesToWear);