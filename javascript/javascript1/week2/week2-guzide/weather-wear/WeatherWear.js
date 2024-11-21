function chooseClothes(temperature) {
  switch (true) {
    case temperature < 0:
      console.log("Wear at least 3 layers and use at least 1 termal layer");
      break;
    case temperature >= 0 && temperature < 10:
      console.log("Wear 2 layers; outer layer can be a coat");
      break;
    case temperature >= 10 && temperature < 20:
      console.log("Wear 2 layers; outer layer can be a jacket");
      break;
    case temperature >= 20 && temperature < 30:
      console.log("Wear 1 thin layer");
      break;
    default:
      console.log("You don't have to wear anything!");
      break;
  }
}

chooseClothes(40);
chooseClothes(-40);
