function submitForm() {
    alert('Form submitted!');
}

const slides = document.querySelectorAll('.slideshow-container img');
const testimonialElement = document.getElementById('testimonial');

const testimonials = [
    '"The best travel experience ever!" - Alex Johnson',
    '"Amazing service and wonderful destinations!" - Sarah Williams',
    '"I loved every moment of my trip!" - Michael Brown'
];

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? '1' : '0';
    });
    testimonialElement.innerHTML = `<p>${testimonials[index]}</p>`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); 

showSlide(currentSlide);