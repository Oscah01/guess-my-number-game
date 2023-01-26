const ourNumber = document.querySelector('.number');
const ourCheck = document.querySelector('.check');
const ourMessage = document.querySelector('.message');
const ourScore = document.querySelector('.score');
const ourHighscore = document.querySelector('.highscore');
const body = document.querySelector('body');


   const secretNumber = Math.trunc(Math.random()*20) +1;
   let scores = 20;
   let highscores = 0;

   ourNumber.textContent = secretNumber;
    ourCheck.addEventListener('click', function () {
        const ourGuess = Number(document.querySelector('.guess').value);  

         if(!ourGuess) {
            ourMessage.textContent = 'Empty Number';
            ourMessage.style.color = 'red';  
           
        } else if(ourGuess === secretNumber) {
            if (scores > highscores) {
                highscores === scores;
                ourHighscore.textContent = scores

            }
            ourMessage.textContent = 'Hoooray! you guessed correct number';
            ourMessage.style.color = 'white';
            body.style.backgroundColor = 'green'
 
        } else if (ourGuess > secretNumber) {
            ourMessage.textContent = 'Too High';
            ourMessage.style.color = 'red'; 
            body.style.backgroundColor = 'black'
            scores--;
            ourScore.textContent = scores;


        } else if (ourGuess < secretNumber) {
            ourMessage.textContent = 'Too Low';
            ourMessage.style.color = 'red'; 
            body.style.backgroundColor = 'black'
            scores--;
            ourScore.textContent = scores;


        }

    });
