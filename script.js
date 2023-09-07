
let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;

function rollDice() {
  const img = document.getElementById("img");
  let roll = Math.floor(Math.random() * 6) + 1;
  img.setAttribute("src", `images/${roll}.png`);
  setTimeout
  return roll;
}

function refresh(){
    const score=rollDice();
    const messageElement = document.getElementById('title');
    const score_1= document.getElementById('score-1')
    const score_2= document.getElementById('score-2')
    const btn_1=document.getElementById("btn-1")
    const btn_2=document.getElementById("btn-2")
    const reset_btn=document.getElementById("reset-btn")
    setTimeout(() => {
    if(currentPlayer === 1){
        player1Score+=score;
        score_1.innerHTML=`${player1Score}`
        messageElement.textContent = `Player-2 to play`;
        btn_1.disabled = true;
        btn_2.disabled = false;
        reset_btn.disabled=true;
        currentPlayer = 2;
    }
    else {
        player2Score+=score;
        score_2.innerHTML=`${player2Score}`
        messageElement.textContent = `Player-1 to play`;
        btn_1.disabled = false;
        btn_2.disabled = true;
        reset_btn.disabled=true;
        currentPlayer = 1;
    }
    if (player1Score >= 30) {
        messageElement.textContent = 'Player 1 wins!';
        btn_1.disabled = true;
        btn_2.disabled = true;
        reset_btn.disabled=false;
      
    } else if (player2Score >= 30) {
        messageElement.textContent = 'Player 2 wins!';
        btn_1.disabled = true;
        btn_2.disabled = true;
        reset_btn.disabled=false;
    }
    else if (player2Score===player1Score&&player2Score >= 30) {
        messageElement.textContent = 'Match draw';
        btn_1.disabled = true;
        btn_2.disabled = true;
        reset_btn.disabled=false;
    }
}, 200); 
};
function reset(){
    const title = document.getElementById('title');
    const score1=document.getElementById('score-1');
    const score2= document.getElementById('score-2');
    const btn1=document.getElementById("btn-1")
    const btn2=document.getElementById("btn-2")
    player1Score=0;
    player2Score=0;
    currentPlayer = 1;
    title.textContent='Role dice to start'
    score1.innerHTML=`0`
    score2.innerHTML=`0`
    btn1.disabled = false;
    btn2.disabled = false;
    img.setAttribute("src", `images/2.png`);
}
