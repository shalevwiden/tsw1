

let score=0;
let clickbutton=document.getElementById('clickbutton')
let clicks=0;
let textColor=document.getElementById('textcolor');

function increaseScore(){
    score+=100;
    clicks+=1;
    document.getElementById("score").textContent = `Your score is: ${score}`;
    document.getElementById("clicks").textContent = `You have clicked ${clicks} times`;
    if (score>500){
        textColor.style.color='red'
    }

}





clickbutton.addEventListener('click', increaseScore)