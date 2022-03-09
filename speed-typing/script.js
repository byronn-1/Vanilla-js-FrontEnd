const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingBtn = document.getElementById('setting-btn');
const settings = document.getElementById('settings');
const settingForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

const words = [
  'appear',
  'extend',
  'assessment',
  'step',
  'spread',
  'vain',
  'embarrassment',
  'instal',
  'applied',
  'shout',
  'stem',
  'ignite',
  'protect',
  'launch',
  'flu',
  'candidate',
  'filter',
  'desk',
  'clinic',
  'aloof',
]

//init variables
let randomWord;
let score = 0;
let time = 10;
//set difficulty level to local storage value if there isn't one initialise it to medium. This will set the value but it wont set the text in the dropdown- if it was just the below snippet you could select it but hte dropdown would revert back to the initial value
let difficulty = localStorage.getItem('difficulty') !== null ?
  localStorage.getItem('difficulty') : 'medium';

//Set difficulty to selected value
difficultySelect.value = localStorage.getItem('difficulty') !== null ?
  localStorage.getItem('difficulty') : 'medium';

//Focus on text on start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

//Generate random word
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

console.log(getRandomWord())
//Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

//Update Score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

//Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval)
    //end game
    gameOver()
  }
}

//Game over, show end screen
function gameOver() {
  endgameEl.innerHTML = `
  <h1>Time ran out<h1>
  <p>Your final score is ${score}</p>
  <button onclick="location.reload()">Reload Game</button>
  `;
  endgameEl.style.display = 'flex';
}

addWordToDOM();


// Event listeners

text.addEventListener('input', e => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    //Clear
    e.target.value = "";

    if (difficulty === 'hard') {
      time += 2;
    } else if (difficulty === 'medium') {
      time += 3;
    } else if (difficulty === 'easy') {
      time += 5;
    }

    updateTime();
  }
});

//Settings btn Click
settingBtn.addEventListener('click', () =>

  settings.classList('hide'));

//Settings select 
settingForm.addEventListener('change', e => {
  // difficulty = e.target.value;
  console.log(difficulty);
  localStorage.setItem('difficulty', difficulty)
})