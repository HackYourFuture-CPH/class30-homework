

//  ML12

function applyML12Animation(element) {
    element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
        .add({
            targets: element.querySelectorAll('.letter'),
            translateX: [40, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 500 + 30 * i
        }).add({
            targets: element.querySelectorAll('.letter'),
            translateX: [0, -30],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 4100,
            delay: (el, i) => 100 + 30 * i
        });
}

function applyML12ToAll() {
    const elements = document.querySelectorAll('.ml12');
    elements.forEach(element => {
        applyML12Animation(element);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    applyML12ToAll();
});


// ML 11
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

//ML17


var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 200,
    easing: "easeOutExpo",
    delay: 5000
  });

    // Rotating Text
    const rotatingText = document.querySelector('.rotating-text');
    if (rotatingText) {
        const textArray = [
            'Frontend Developer',
            'Backend Developer',
            'Video Editor',
            'Graphic Designer'
        ];
        let currentIndex = 0;

        function changeText() {
            const currentText = rotatingText.querySelector('.current');
            const nextText = document.createElement('span');
            nextText.className = 'next';
            nextText.textContent = textArray[currentIndex];
            rotatingText.appendChild(nextText);

            setTimeout(() => {
                if (currentText) {
                    currentText.classList.remove('current');
                    rotatingText.removeChild(currentText);
                }
                nextText.classList.remove('next');
                nextText.classList.add('current');
            }, 1000); // Tiempo de transición de texto

            currentIndex = (currentIndex + 1) % textArray.length;
        }

        setInterval(changeText, 2500); // Intervalo de cambio de texto
    }

    let currentSlide = 0;

    
function showSlide(index) {
    const carousel = document.getElementById('carousel');
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

showSlide(currentSlide);

let skillSlideIndex = 0;

function showSkillSlides() {
    const slides = document.querySelectorAll('#skills-carousel .carousel1-item');
    const totalSlides = slides.length;
    
    if (skillSlideIndex >= totalSlides) skillSlideIndex = 0;
    if (skillSlideIndex < 0) skillSlideIndex = totalSlides - 1;
    
    const carouselInner = document.getElementById('skills-carousel');
    carouselInner.style.transform = `translateX(${-skillSlideIndex * 100}%)`;
}


function nextSkillSlide() {
    skillSlideIndex++;
    showSkillSlides();
}

function prevSkillSlide() {
    skillSlideIndex--;
    showSkillSlides();
}

showSkillSlides();


// Cambiar entre modo claro y oscuro al usar el interruptor
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

