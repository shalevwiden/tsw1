// List of 30 images and their correct answers


// This is Bordle Logic from Daily stuff...

const images = [
    { src: "images/apple.jpg", answer: "apple" },
    { src: "images/banana.jpg", answer: "banana" },
    { src: "images/car.jpg", answer: "car" },
    { src: "images/dog.jpg", answer: "dog" },
    { src: "images/elephant.jpg", answer: "elephant" },
    { src: "images/flower.jpg", answer: "flower" },
    // Add 24 more images...
];

// Get the current day (1-30) and select the corresponding image
const today = new Date().getDate() % images.length;
const dailyImage = images[today];

// Set the daily image
document.getElementById("daily-image").src = dailyImage.src;

// Get stored score (or set to 0)
let score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;
document.getElementById("score").textContent = `Score: ${score}`;

// Check user guess
function checkGuess() {
    const userGuess = document.getElementById("user-guess").value.trim().toLowerCase();
    
    if (userGuess === dailyImage.answer) {
        score += 1;
        localStorage.setItem("score", score);
        document.getElementById("result").textContent = "✅ Correct!";
    } else {
        document.getElementById("result").textContent = "❌ Wrong! Try again.";
    }

    document.getElementById("score").textContent = `Score: ${score}`;
}

// Reset game at midnight
function resetGame() {
    localStorage.removeItem("score");
    location.reload(); // Refresh the page to load the new image
}

// Check if it's midnight every minute
setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        resetGame();
    }
}, 60000); // Check every 60 seconds


