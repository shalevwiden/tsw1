
// this will be code for the not daily one
// gotta modify it for the daily one shouldnt be too hard tho 
// I'll just define a day variable

// the image array
const images= [
    {beforesrc:"utimages/welch1zoomed3.png"
        ,aftersrc:"utimages/welch1.jpg", 
        buildinganswer:"welch", 
        buildingcode:"wel"
    },
    {beforesrc: "https://utzoomedimages.s3.us-east-2.amazonaws.com/jester1zoomed1.png"
            ,aftersrc:"https://utzoomedimages.s3.us-east-2.amazonaws.com/jester.1jpg.jpg"
            , 
            buildinganswer:"jester"
            , 
            buildingcode:"jes"
    },
    {beforesrc: "https://utzoomedimages.s3.us-east-2.amazonaws.com/gdczoomed.png"
        ,aftersrc:"https://utzoomedimages.s3.us-east-2.amazonaws.com/GDC.jpg"
        , 
        buildinganswer:"gates dell center"
        , 
        buildingcode:"gdc"
}





]
// gameimage is bordleimage. This is the image that is changed alot.
let gameImage=document.getElementById("bordleimage")
// with the daily we will set a day of the month to be the one we reference
// Or can just use an array of numbers 1-30
// I will create that after this
gameImage.src= images[0].beforesrc


let currentRound=0;
// score stuff
let scoreElement=document.getElementById('scoretext')
let score=0;
// userguess


let displayAnswer=document.getElementById('displayanswer')
// Building name followed by Building Code
// in here do score.textContent=score

// with the daily we will set a day of the month to be the one we reference
// Or can just use an array of numbers 1-30
// I will create that after this
gameImage.src= images[0].beforesrc
// testing
displayAnswer.textContent=`${images[currentRound].buildinganswer} - ${images[currentRound].buildingcode}`;

// this is for testing too
function changeImage(){
    currentRound+=1;

    gameImage.src=images[currentRound].aftersrc;
    displayAnswer.textContent=`${images[currentRound].buildinganswer} - ${images[currentRound].buildingcode}`;

}
let imagechangebutton=document.getElementById('imagechangebutton')
imagechangebutton.addEventListener('click', changeImage)

// end of testing

// start of actual bordle function
let attemptsElement=document.getElementById('attempts');
let attempts=3;
// notifier entered
let notifier=document.getElementById('notifier');

// trim and lowercase too 
let blduserguess= document.getElementById('bldnameguess').value.trim().toLowerCase()
let codeuserguess= document.getElementById('bldcodeguess').value.trim().toLowerCase()
gameImage.src= images[currentRound].beforesrc

function checkBldname(){
    let blduserguess= document.getElementById('bldnameguess').value.trim().toLowerCase()

    currentRound=0
    // we would first assign a correct answer and make it a huge number of things inside a file
    gameImage.src= images[currentRound].beforesrc
    if (blduserguess==images[currentRound].buildinganswer){
        notifier.style.display='block';
        notifier.textContent='Correct'
        gameImage.src= images[currentRound].aftersrc
        

        
// testing
        displayAnswer.textContent=`${images[currentRound].buildinganswer} - ${images[currentRound].buildingcode}`;
        
    }
    else{
        notifier.style.display='block';
        notifier.textContent='That is wrong. Try again.'


    }
    

}
// adding button functionality
let bldcheckbutton=document.getElementById('checkbldnamebutton')
bldcheckbutton.addEventListener('click',checkBldname)

// establish the checkCode function to be used in the for loop
function checkCode(coderoundguess){
    // for now it will be simple
    if(coderoundguess===images[currentRound].buildingcode){
        return true;
    }
    return false;
}
let codecheckbutton=document.getElementById('checkbldcodebutton')

// get the round notifier
let roundnotifier=document.getElementById('roundnotifier')
// logic now- assign it to the guess code.
// this for loop will run 5 times and increment round each time
function playGame(){
    for (let round = 0; round < 3; round++) {
        gameImage.src= images[round].beforesrc;
        roundnotifier.textContent=`Round ${round}`;
        let attempts=3;
        attemptsElement.textContent=`${attempts}`

        // reset attempts to 3 for every round

        // Listen for the button click for each round
        codecheckbutton.addEventListener('click', function() {
            let codeuserguess = document.getElementById('bldcodeguess').value.trim().toLowerCase();

            if (checkCode(codeuserguess)) {
                gameImage.src = images[round].aftersrc;
                notifier.style.display = 'block';
                notifier.textContent = 'Correct, moving to next round';
                return; // Exit the round after correct answer
            } else {
                attempts--;
                attemptsElement.textContent = `${attempts}`;
                if (attempts > 0) {
                    notifier.style.display = 'block';
                    notifier.textContent = 'Incorrect, try again';
                } else {
                    notifier.style.display = 'block';
                    notifier.textContent = 'Out of attempts, going to next round.';
                    return; // Exit the round after attempts run out
                }
            }
        });
    }
}
// playgame button
let playgame=document.getElementById('playgame')
playgame.addEventListener('click', playGame)






    // add the for and while loop stuff from searching.py

    