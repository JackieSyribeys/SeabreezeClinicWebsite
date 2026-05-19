document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM LOADED");

    // ================= HIGH-END EDITORIAL REVIEW CAROUSEL =================
    const reviewsList = [
        {
            text: "Dr. Syribeys is an amazing Dentist. I have been going to him for over 11 years and would never consider going anywhere else.",
            author: "— Sarah J."
        },
        {
            text: "The office environment is so modern and peaceful. The team took the time to explain everything thoroughly and kept me entirely at ease.",
            author: "— Michael K."
        },
        {
            text: "Incredible attention to detail. From routine cleanings to advanced dental work, they consistently deliver premier, comfortable care.",
            author: "— Amanda L."
        }
    ];

    let activeReviewIndex = 0;

    function updateEditorialReview(newIndex) {
        const textElement = document.getElementById("review-text");
        const authorElement = document.getElementById("review-author");
        const dots = document.querySelectorAll(".edit-dot");

        if (!textElement || !authorElement) return; // Safety check

        // Start fade down animation transition
        textElement.classList.add("review-fade-out");
        authorElement.classList.add("review-fade-out");

        setTimeout(() => {
            // Swap content index markers precisely mid-fade
            activeReviewIndex = newIndex;
            textElement.textContent = reviewsList[activeReviewIndex].text;
            authorElement.textContent = reviewsList[activeReviewIndex].author;

            // Sync operational dot tracking loops
            dots.forEach((dot, dotIdx) => {
                if (dotIdx === activeReviewIndex) {
                    dot.classList.add("active");
                } else {
                    dot.classList.remove("active");
                }
            });

            // Lift elements back up clearly into native focus
            textElement.classList.remove("review-fade-out");
            authorElement.classList.remove("review-fade-out");
        }, 300); // 300ms matches the transition timing exactly
    }

    // Attached directly to window so HTML onclick properties can target them
    window.nextReview = function () {
        let nextIndex = (activeReviewIndex + 1) % reviewsList.length;
        updateEditorialReview(nextIndex);
    };

    window.previousReview = function () {
        let prevIndex = (activeReviewIndex - 1 + reviewsList.length) % reviewsList.length;
        updateEditorialReview(prevIndex);
    };

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
