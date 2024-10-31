
const hellos = [
    "Hello", "Hola", "Bonjour", "Hallo", "Ciao", "Olá", "नमस्ते", "こんにちは", "안녕하세요", "你好",
    "Привет", "مرحبا", "Azul", "שלום", "வணக்கம்", "Sawubona", "Xin chào", "Sawasdee", "Hei", "Hej",
    "Halo", "Yassas", "Selam", "Merhaba", "Saluton", "Tere", "Kumusta", "Salam", "Mingalaba",
    "Selamat siang", "Dzień dobry", "Sveiki", "Labas", "Aloha", "Jambo", "Bula", "Szia", 
    "Goddag", "Salve", "Cześć", "Kamusta", "Olá", "Håfa adai"
];

let welcome = document.querySelector('#opening');

function openingRoll(array) {
    let index = 0;

    function displayGreeting() {
        welcome.innerText = array[index];
        index = (index + 1) % array.length; // Increment and reset index

        // Repeat every second
        setTimeout(displayGreeting, 1000); 
    }

    displayGreeting(); // Start the loop
}

openingRoll(hellos);