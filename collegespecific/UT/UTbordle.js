
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
    {beforesrc: "../../../thespeedway/BuildingImages/UT/Zoomed/Welch/Welch1Zoomed1.png"
            ,aftersrc:"../../../thespeedway/BuildingImages/UT/Zoomed/Welch/welch1.jpg"
            , 
            buildinganswer:"jester"
            , 
            buildingcode:"jes"
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


// logic now



attempts-=1
        attemptsElement.innerText="Attempts: "+attempts;
        notifier.style.display='block';
        notifier.textContent='Wrong, try again.'

    // add the for and while loop stuff from searching.py

    