const startTest = () => {
  selectedLanguage = document.getElementById('select-language').value;
  document.getElementById('quote').innerHTML = '';
  mistakes = 0;
  document.querySelector('.all-correct').style.display = 'none';
  document.querySelector('.out-of-time').style.display = 'none';
  document.querySelector('.too-many-mistakes').style.display = 'none';
  document.getElementById('mistakes').innerText = '0';

  document.getElementById('timer').innerText = document.getElementById('select-time').value;
  timer = '';

  userInput.disabled = false;
  userInput.value = '';
  userInput.focus();

  timeReduce();

  startBtn.style.display = 'none';
  stopBtn.style.display = 'block';
  restartBtn.style.display = 'none';

  togglePreloader();
  renderNewQuote();
  resultContainer.style.display = 'none';
}
