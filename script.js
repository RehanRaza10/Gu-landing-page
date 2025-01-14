
document.addEventListener('DOMContentLoaded', () => {
// Carousel Data
const carouselData = [
    {
        title: "Placement News 1",
        image: "https://placehold.co/150x200",
        date: "14th SEPT., 2024",
        venue: "D BLOCK, SEMINAR HALL"
    },
    {
        title: "Placement News 2",
        image: "https://placehold.co/250x300",
        date: "15th SEPT., 2024",
        venue: "C BLOCK, ROOM 101"
    },
    {
        title: "Placement News 3",
        image: "https://placehold.co/300x400",
        date: "16th SEPT., 2024",
        venue: "MAIN AUDITORIUM"
    }
];

let currentIndex = 0;

// Get elements
const titleElement = document.getElementById('carouselTitle');
const imageElement = document.getElementById('carouselImage');
const dateElement = document.getElementById('carouselDate');
const venueElement = document.getElementById('carouselVenue');

// Update Carousel Content
function updateCarousel(index) {
    titleElement.textContent = carouselData[index].title;
    imageElement.src = carouselData[index].image;
    dateElement.textContent = carouselData[index].date;
    venueElement.textContent = carouselData[index].venue;
}

// Event Listeners
document.getElementById('prevButton').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
    updateCarousel(currentIndex);
});

document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselData.length;
    updateCarousel(currentIndex);
});

// Initialize Carousel
updateCarousel(currentIndex);
});



document.addEventListener('DOMContentLoaded', () => {
    // Carousel Data
const carouselData = [
    {
        title: "Placement News 1",
        image: "https://placehold.co/150x200",
        date: "14th SEPT., 2024",
        venue: "D BLOCK, SEMINAR HALL"
    },
    {
        title: "Placement News 2",
        image: "https://placehold.co/250x300",
        date: "15th SEPT., 2024",
        venue: "C BLOCK, ROOM 101"
    },
    {
        title: "Placement News 3",
        image: "https://placehold.co/300x400",
        date: "16th SEPT., 2024",
        venue: "MAIN AUDITORIUM"
    }
];

let currentIndex = 0;

// Get elements
const titleElement = document.getElementById('carouselTitle1');
const imageElement = document.getElementById('carouselImage1');
const dateElement = document.getElementById('carouselDate1');
const venueElement = document.getElementById('carouselVenue1');

// Update Carousel Content
function updateCarousel(index) {
    titleElement.textContent = carouselData[index].title;
    imageElement.src = carouselData[index].image;
    dateElement.textContent = carouselData[index].date;
    venueElement.textContent = carouselData[index].venue;
}

// Event Listeners
document.getElementById('prevButton1').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
    updateCarousel(currentIndex);
});

document.getElementById('nextButton1').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselData.length;
    updateCarousel(currentIndex);
});

// Initialize Carousel
updateCarousel(currentIndex);
});



const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
const cardWidth = 360;  // width of a single card
const totalCards = carousel.children.length;  // total number of cards

// Move carousel by shifting it to the right
function updateCarousel() {
    const offset = -(cardWidth * index);
    carousel.style.transform = `translateX(${offset}px)`;
}

// Move to the next card
nextBtn.addEventListener('click', () => {
    if (index < totalCards - 4) {
        index++;
        updateCarousel();
    }
});

// Move to the previous card
prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

// Initial setup
updateCarousel();



document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    
    // Clone the first set of images to create the infinite loop effect
    images.forEach((img) => {
      const clonedImage = img.cloneNode(true);
      carousel.appendChild(clonedImage);
    });
  
    // Adjust the animation duration based on the number of images (adjust 30s accordingly)
    const carouselWidth = carousel.scrollWidth;
    const animationDuration = (carouselWidth / 5) * 30; // Adjust timing here based on your design
    carousel.style.animationDuration = `${animationDuration}s`;
  });
   