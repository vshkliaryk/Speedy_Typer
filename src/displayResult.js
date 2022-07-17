const displayResult = () => {
  resultContainer.style.display = 'block';
  clearInterval(timer);
  stopBtn.style.display = 'none';
  userInput.disabled = true;

  let timeTaken = 1;
  if (time != 0) timeTaken = (parseInt(document.getElementById('select-time').value) - time);

  let speed = (document.getElementsByClassName('success').length / timeTaken).toFixed(2);
  let accuracy = Math.round(((userInput.value.length - mistakes) / userInput.value.length) * 100);

  if (isFinite(speed) && speed > 0) {
    if (selectedLanguage === 'english') {
      document.getElementById('speed').innerText = speed + ' char/s';
    } else {
      document.getElementById('speed').innerText = speed + ' симв./сек';
    }

    if (accuracy >= 85 && speed >= 4) {
      if (selectedLanguage === 'english') proficiencyLevel = 'Advanced';
      else proficiencyLevel = 'Продвинутый';
    } else if (accuracy >= 65 && speed >= 3) {
      if (selectedLanguage === 'english') proficiencyLevel = 'Good';
      else proficiencyLevel = 'Хороший';
    } else if (accuracy >= 50 && speed >= 2) {
      if (selectedLanguage === 'english') proficiencyLevel = 'Medium';
      else proficiencyLevel = 'Средний';
    } else if (selectedLanguage === 'english') proficiencyLevel = 'Poor';
    else proficiencyLevel = 'Низкий';
  } else {
    document.getElementById('speed').innerText = 'N/A';
    proficiencyLevel = 'N/A';
  }

  if (isFinite(accuracy)) {
    document.getElementById('accuracy').innerText = accuracy + '%';
  } else {
    document.getElementById('accuracy').innerText = 'N/A';
  }

  restartBtn.style.display = 'flex';
};
