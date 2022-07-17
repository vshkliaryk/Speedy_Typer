const openStats = () => {
  document.querySelector('.container').style.height = '30rem';
  openStatsBtn.style.display = 'none';
  closeStatsBtn.style.display = 'block';

  let mistakesTotal = document.getElementById('mistakes').innerText;
  let correctChars = document.getElementsByClassName('success').length;
  let timeSpent = parseInt(document.getElementById('select-time').value) -
    parseInt(document.getElementById('timer').innerText);

  if(document.getElementById('select-language').value === 'english') {
    document.querySelector('.detailed-stats').innerHTML += `
      <p id="mistakes-total" class="stats-item">Mistakes total: <span>${mistakesTotal}</span></p>
      <p id="time-taken" class="stats-item">Time spent: <span>${timeSpent}s</span></p>
      <p id="correct-chars" class="stats-item">Correct characters: <span>${correctChars}</span></p>
      <p id="proficiency" class="stats-item">Proficiency level: <span>${proficiencyLevel}</span></p>
    `;
  }
  else {
    document.querySelector('.detailed-stats').innerHTML += `
      <p id="mistakes-total" class="stats-item">Всего ошибок: <span>${mistakesTotal}</span></p>
      <p id="time-taken" class="stats-item">Времени потрачено: <span>${timeSpent} сек</span></p>
      <p id="correct-chars" class="stats-item">Правильных символов: <span>${correctChars}</span></p>
      <p id="proficiency" class="stats-item">Общий уровень: <span>${proficiencyLevel}</span></p>
    `;
  }
}

const closeStats = () => {
  document.querySelector('.container').style.height = '';
  openStatsBtn.style.display = 'block';
  closeStatsBtn.style.display = 'none';

  if(document.getElementsByClassName('stats-item')[2]) {
    document.getElementById('mistakes-total').parentNode.removeChild(document.getElementById('mistakes-total'));
    document.getElementById('time-taken').parentNode.removeChild(document.getElementById('time-taken'));
    document.getElementById('correct-chars').parentNode.removeChild(document.getElementById('correct-chars'));
    document.getElementById('proficiency').parentNode.removeChild(document.getElementById('proficiency'));
  }
}