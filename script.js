//GAME CODES
var boss = document.getElementById("boss");
var enemy = document.getElementById("enemy");
var leftPad = document.getElementById("left-pad");
var rightPad = document.getElementById("right-pad");
var bossmove = 0;

function moveLeft (){ //CONTROLS LEFT MOVEMENT
    if(bossmove >= 200){
        bossmove = -100;
    }
    bossmove += 100;
    boss.style.left = bossmove + "px";    
}
leftPad.onclick = moveRight;
 

function moveRight (){ //CONTROLS RIGHT MOVEMENT
    if(bossmove <= 0){
        bossmove = 300;
    }
    bossmove -= 100;
    boss.style.left = bossmove + "px";
}
rightPad.onclick = moveLeft;

var enemyMove;
enemyMove = 0;
function  randomEnemy(){
    var random = Math.floor(Math.random() * 3);
    enemyMove = random * 100;
    enemy.style.left = enemyMove + "px";
}
enemy.onanimationiteration = randomEnemy;


var topCount = 0;
function topMove(){
    topCount += 1;
    if(topCount >= 2){
        topCount = 0;
    }
    document.getElementById("test").innerHTML = topCount;
}
setInterval(topMove, 961.50);

//GAME OVER FUNCTION
function over(){
    if(enemyMove==bossmove && topCount == 1){
        enemy.style.position = "initial";
        document.getElementById("status").innerHTML ="Game Over" + "<br>" + "Your Score is: " + mark ;;
        clearInterval(markInterval);   
        document.getElementById("game").style.borderColor = "red";       
        start.style.display = "initial";

    }
}

//MARK AWARDING FUNCTION
var mark = 0;
score.innerHTML = "Scores: " + mark;
setInterval(over, 1);
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