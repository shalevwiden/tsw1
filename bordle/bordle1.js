// this will be the script for the longer playing one, and slightly modified for the daily one.

// I need to make sure the images are the same size



const imageDisplay = document.getElementById('imagedisplay');
const playernotifier = document.getElementById('playernotifier');

// Game data (image file paths and correct answers)
const gameRounds = [
    { image: 'image1.jpg', answer: 'FAC' },
    { image: 'image2.jpg', answer: 'PCL' },
    { image: 'image3.jpg', answer: 'GDC' }
];

// remember its zero indexed
// Ok I can make some big arrays

let currentRound = 0;


// example console entry
// console.log(gameRounds[2].answer)
let attemptsCount = 3;
let attemptsElement=document.getElementById('attempts');


function checkImageguess3letters() {

    // Trim removes spaces from the input
    let imageguess = document.getElementById('imageguess').value.trim();

    // Remove all classes initially
    playernotifier.classList.remove('correct', 'incorrect');
// if the guess equals the answer for a currentround
    if (imageguess.toLowerCase() === gameRounds[currentRound].answer.toLowerCase()) {
        playernotifier.innerText = 'Correct!';
        playernotifier.classList.add('correct'); // Apply green bold style

        // incremenet attemps:

        

        // Move to the next round
        
        currentRound++;
        // the if here checks if there are enough rounds to keep going
        if (currentRound < gameRounds.length) {
            imageDisplay.src = gameRounds[currentRound].image; // Change the image
            document.getElementById('imageguess').value = ''; // Clear input field
            playernotifier.innerText = 'Correct'; // Reset notifier text

            attemptsCount = 3;  // Reset attempts count
            attemptsElement.innerText = 'Attempts: ' + attemptsCount;  // Reset display for new round
            
        } 
        
        else {
            playernotifier.innerText = 'Thats all the rounds for now…until we code more!\
             Or if you still want more try another campus near you! Thanks for playing.';

        }
    } else {
        playernotifier.innerText = 'Incorrect, try again';
        playernotifier.classList.add('incorrect'); // Apply red bold style
        attemptsCount--;
        attemptsElement.innerText = 'Attempts: ' + attemptsCount;
    }
}

// function checkImageguessFullname(){

// }

// Attach event listener to button
// first line defines a variable checkimagebutton, next line adds an event listener
const checkimagebutton=document.getElementById('checkimagebutton')
checkimagebutton.addEventListener('click', checkImageguess3letters)