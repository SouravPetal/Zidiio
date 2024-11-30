const reviews = [
    '"Zidio is exceptional. From start to finish, they demonstrated a deep understanding of our goals and provided invaluable guidance throughout the process."',
    '"Great service, highly recommend. Very professional and efficient."',
    '"Absolutely satisfied with their work. Professional team and top-notch services."',
    '"Services are very good."',
    '"customer care service is very good"',
    '"very satisfied with their work"',
    '"they are doing great work"'
];

function showReview(index) {
    const reviewText = document.getElementById('review-text');
    reviewText.classList.remove('fade-in');
    setTimeout(() => {
        reviewText.innerText = reviews[index];
        reviewText.classList.add('fade-in');
    }, 100);
}

// Add animation class
const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        animation: fadeIn 0.5s ease-in-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
function showVideo(url) { 
    const videoFrame = document.getElementById('video-frame'); videoFrame.src = url;
  }
  document.querySelector(".contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    try {
        const response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        alert(data.message);
    } catch (error) {
        alert("Failed to send the message. Please try again.");
    }
});

// Fetch reviews
async function loadReviews() {
    try {
        const response = await fetch("http://localhost:5000/reviews");
        const reviews = await response.json();
        console.log(reviews);
    } catch (error) {
        console.error("Failed to load reviews:", error);
    }
}

loadReviews();
   