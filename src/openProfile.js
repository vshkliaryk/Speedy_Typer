const openProfile = () => {
  document.querySelector('#profile').classList.add('profile-container');

  mainArea.classList.add('container-opacity');
  document.querySelector('.info').classList.remove('info-container');
  document.querySelector('#settings').classList.remove('settings-container');
  document.querySelector('.change-theme').classList.remove('theme-container');

  document.querySelector('#profile').style.backgroundColor = 
    getComputedStyle(mainArea).backgroundColor;


  if(localStorage.getItem('tests_completed')) {
    document.getElementById('tests-completed').innerText = 
      localStorage.getItem('tests_completed');
  }
  if(localStorage.getItem('best_accuracy')) {
    document.getElementById('best-accuracy').innerText = 
      localStorage.getItem('best_accuracy') + '%';
  }
  if(localStorage.getItem('best_speed')) {
    document.getElementById('best-speed').innerText = 
      localStorage.getItem('best_speed') + ' char/s';
  }

  document.getElementById('clear-profile').addEventListener('click', () => {
    localStorage.clear();
    testsCompleted = 0;

    document.querySelector('#tests-completed').innerText = '0';
    document.querySelector('#best-accuracy').innerText = 'N/A';
    document.querySelector('#best-speed').innerText = 'N/A';
  })
}