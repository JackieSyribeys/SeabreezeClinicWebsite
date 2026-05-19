document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM LOADED");

    // ================= REVIEWS CAROUSEL DATA & ENGINE =================
    const reviews = [
        "Dr Syribeys is an amazing Dentist. I have been going to him for over 11 years and would never consider going anywhere else. He is professional, kind and an artist with making my partial fit perfect.",
        "The office is beautiful and the staff is incredibly friendly. Everything felt modern, clean, and welcoming from the moment I walked in.",
        "I was nervous about my procedure but the entire team made me feel comfortable. The results were amazing and completely natural looking."
    ];

    let currentReview = 0;
    const reviewText = document.getElementById("review-text");
    const dots = document.querySelectorAll(".dot");

    function updateReview() {
        if (reviewText && dots.length > 0) {
            reviewText.textContent = reviews[currentReview];
            dots.forEach(dot => dot.classList.remove("active"));
            dots[currentReview].classList.add("active");
        }
    }

    window.nextReview = function () {
        currentReview = (currentReview + 1) % reviews.length;
        updateReview();
    };

    window.previousReview = function () {
        currentReview = (currentReview - 1 + reviews.length) % reviews.length;
        updateReview();
    };

    if (reviewText && dots.length > 0) {
        setInterval(nextReview, 7000);
    }

    // ================= CONTACT SIDE PANEL ENGINE =================
    window.openContactPanel = function () {
        document.getElementById("contactPanel").classList.add("active");
        document.getElementById("overlay").classList.add("active");
    };

    window.closeContactPanel = function () {
        document.getElementById("contactPanel").classList.remove("active");
        document.getElementById("overlay").classList.remove("active");
    };
    
    const contactBtn = document.getElementById("contactBtn");
    if (contactBtn) {
        contactBtn.addEventListener("click", openContactPanel);
    }

    // ================= BULLETPROOF DROPDOWN ENGINE =================
    const dropBtn = document.querySelector(".dropbtn");
    const dropdown = document.querySelector(".dropdown");

    if (dropBtn) {
        dropBtn.addEventListener("click", function (e) {
            e.stopPropagation(); // Stop window click from instantly closing it
            dropdown.classList.toggle("open");
        });
    }

    // Close the services dropdown automatically if user clicks anywhere else outside of it
    window.addEventListener("click", function () {
        if (dropdown && dropdown.classList.contains("open")) {
            dropdown.classList.remove("open");
        }
    });
});

// ================= SCROLL REVEAL OBSERVER ENGINE =================
document.addEventListener("DOMContentLoaded", function () {
    const itemsToReveal = document.querySelectorAll(".reveal-left, .reveal-right");

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Stops watching once animated to boost site performance
            }
        });
    };

    const revealOptions = {
        root: null, // Default to browser viewport window
        threshold: 0.15 // Triggers when 15% of the card is visible
    };

    const observer = new IntersectionObserver(revealCallback, revealOptions);

    itemsToReveal.forEach(item => {
        observer.observe(item);
    });
});
