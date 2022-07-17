const quoteApiUrl = 'http://api.quotable.io/random';

const mainArea = document.querySelector('.container');
const quoteSection = document.getElementById('quote');
const userInput = document.getElementById('quote-input');
const startBtn = document.querySelector('#start-test');
const stopBtn = document.querySelector('#stop-test');
const restartBtn = document.querySelector('.restart');
const resultContainer = document.querySelector('.result');
const openStatsBtn = document.querySelector('.open-stats');
const closeStatsBtn = document.querySelector('.close-stats');
const playBtn = document.querySelector('.fa-play');
const openProfileBtn = document.querySelector('.fa-user');
const openInfoBtn = document.querySelector('.fa-info-circle');
const openSettingsBtn = document.querySelector('.fa-cogs');
const switchThemeBtn = document.querySelector('.fa-paint-brush');

let quote = '';
let time = 60;
let timer = '';
let mistakes = 0;
let proficiencyLevel = 'N/A';
let testsCompleted = 0;

const renderNewQuote = async () => {
  const response = await fetch(quoteApiUrl);
  let data = await response.json();
  quote = data.content;

  let arr = quote.split('').map((value) => {
    return "<span class='quote-chars'>" + value + '</span>';
  })
  quoteSection.innerHTML += arr.join('');
}

userInput.addEventListener('input', () => {
  let quoteChars = document.querySelectorAll('.quote-chars');
  quoteChars = Array.from(quoteChars);

  let userInputChars = userInput.value.split('');

  quoteChars.forEach((char, index) => {
    if (char.innerText == userInputChars[index]) {
      char.classList.add('success');
    } else if (userInputChars[index] == null) {
      if (char.classList.contains('success')) {
        char.classList.remove('success');
      } else {
        char.classList.remove('fail');
      }
    } else {
      if (!char.classList.contains('fail')) {
        mistakes += 1;
        if (mistakes > document.getElementById('select-mistakes').value) {
          document.querySelector('.too-many-mistakes').style.display = 'flex';
          displayResult();
        }
        char.classList.add('fail');
      }
      document.getElementById('mistakes').innerText = mistakes;
    }

    let check = quoteChars.every((element) => {
      return element.classList.contains('success');
    })
    if (check) {
      document.querySelector('.all-correct').style.display = 'flex';
      displayResult();

      localStorage.setItem('tests_completed', ++testsCompleted);
      if (parseInt(document.getElementById('accuracy').innerText) > localStorage.getItem('best_accuracy')) {
        localStorage.setItem('best_accuracy', parseInt(document.getElementById('accuracy').innerText));
      }
      if (parseFloat(document.getElementById('speed').innerText) > localStorage.getItem('best_speed')) {
        localStorage.setItem('best_speed', parseFloat(document.getElementById('speed').innerText));
      }
    }
  })
})

playBtn.addEventListener('click', () => {
  mainArea.classList.remove('container-opacity');
  document.querySelector('#profile').classList.remove('profile-container');
  document.querySelector('#settings').classList.remove('settings-container');
  document.querySelector('.info').classList.remove('info-container');
  document.querySelector('.change-theme').classList.remove('theme-container');
})

window.onload = () => {
  userInput.value = '';
  startBtn.style.display = 'block';
  stopBtn.style.display = 'none';
  userInput.disabled = true;
}

startBtn.addEventListener('click', startTest);
stopBtn.addEventListener('click', displayResult);
restartBtn.addEventListener('click', startTest);
restartBtn.addEventListener('click', closeStats);
openStatsBtn.addEventListener('click', openStats);
closeStatsBtn.addEventListener('click', closeStats);
openProfileBtn.addEventListener('click', openProfile);
openSettingsBtn.addEventListener('click', openSettings);
openInfoBtn.addEventListener('click', openInfo);
switchThemeBtn.addEventListener('click', changeTheme);
document.querySelector('#select-language').addEventListener('change', changeLanguage);