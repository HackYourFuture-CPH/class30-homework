

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  


let horas = travelInformation.destinationDistance / travelInformation.speed;

let horasCompletas = Math.floor(horas);

let minutos = Math.round((horas - horasCompletas) * 60);

console.log(horasCompletas + " hours and " + minutos + " minutes");






