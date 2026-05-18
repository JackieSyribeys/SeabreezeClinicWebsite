console.log("JS LOADED");
const reviews = [

    "Dr Syribeys is an amazing Dentist. I have been going to him for over 11 years and would never consider going anywhere else. He is professional, kind and an artist with making my partial fit perfect.",

    "The office is beautiful and the staff is incredibly friendly. Everything felt modern, clean, and welcoming from the moment I walked in.",

    "I was nervous about my procedure but the entire team made me feel comfortable. The results were amazing and completely natural looking."

];

let currentReview = 0;

const reviewText = document.getElementById("review-text");
const dots = document.querySelectorAll(".dot");

function updateReview() {

    reviewText.textContent = reviews[currentReview];

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[currentReview].classList.add("active");
}

function nextReview() {

    currentReview++;

    if(currentReview >= reviews.length) {
        currentReview = 0;
    }

    updateReview();
}

function previousReview() {

    currentReview--;

    if(currentReview < 0) {
        currentReview = reviews.length - 1;
    }

    updateReview();
}

setInterval(nextReview, 7000);


const contactPanel = document.getElementById("contactPanel");
const overlay = document.getElementById("overlay");

function openContactPanel() {
    document.getElementById("contactPanel").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closeContactPanel() {
    document.getElementById("contactPanel").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}
