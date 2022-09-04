//GAME CODES
var boss = document.getElementById("boss");
var enemy = document.getElementById("enemy");
var leftPad = document.getElementById("left-pad");
var rightPad = document.getElementById("right-pad");
var bossmove = 0;

//CONTROLS LEFT MOVEMENT
function moveLeft (){ 
    if(bossmove >= 200){
        bossmove = -100;
    }
    bossmove += 100;
    boss.style.left = bossmove + "px";    
}
leftPad.onclick = moveRight;
 
//CONTROLS RIGHT MOVEMENT
function moveRight (){ 
    if(bossmove <= 0){
        bossmove = 300;
    }
    bossmove -= 100;
    boss.style.left = bossmove + "px";
}
rightPad.onclick = moveLeft;

//Enemy Move On HORIZONTAL AXIS & VERTICAL AXIS
var enemyMove;
enemyMove = 0;
function  randomEnemy(){
    var random = Math.floor(Math.random() * 3);
    enemyMove = random * 100;
    enemy.style.left = enemyMove + "px";
}
enemy.onanimationiteration = randomEnemy;


//GAME OVER FUNCTION
function over(){
    var enemyTop = parseInt(window.getComputedStyle(enemy).getPropertyValue("top"));
    if(enemyMove==bossmove && enemyTop < 500 && enemyTop > 300){
        enemy.style.position = "initial";
        document.getElementById("status").innerHTML ="Game Over" + "<br>" + "Your Score is: " + mark ;;
        clearInterval(markInterval);   
        document.getElementById("game").style.borderColor = "red";       
        start.style.display = "initial";
    }
}
setInterval(over, 1);

//MARK AWARDING FUNCTION
var mark = 0;
score.innerHTML = "Scores: " + mark;
function markFunc(){    
    mark+=1;
    var score = document.getElementById("score");
    score.innerHTML = "Scores: " + mark;
}
var markInterval = setInterval(markFunc, 1000);


//RESTART GAME
function startFunc(){   
     window.location.reload();
}
var start = document.getElementById("start");
start.style.display = "none";
start.onclick = startFunc;


// TOUCHPAD CONTROLS
var leftTouch = document.getElementById("leftTouch");
leftTouch.ontouchstart = moveRight;

var rightTouch = document.getElementById("rightTouch");
rightTouch.ontouchstart = moveLeft;
