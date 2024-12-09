// Select the container
const cardContainer= document.getElementById('card-container');

// Creat the card element
const card=document.createElement('div');
card.setAttribute('class', 'card');

//Append the card to the container
cardContainer.appendChild(card);

//Card style

card.innerHTML = `
  <img src="https://cdn.prod.website-files.com/5e4e48af45b75d848013007e/5e5948433f44fd4044f9a30b_kids_english_animals_turtle.png" alt="Placeholder Image">
  
`;
card.style.maxWidth='400px';
card.style.aspectRatio = '4 / 3';
card.style.borderRadius = '8px';
card.style.boxShadow = '0 4px 8px';
card.style.padding = '16px';
card.style.margin = '16px auto';
card.style.display = 'flex';
card.style.justifyContent = 'center'; // Center items horizontally

//Flipping
