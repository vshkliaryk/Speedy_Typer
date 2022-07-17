const openSettings = () => {
  document.querySelector('#settings').classList.add('settings-container');

  mainArea.classList.add('container-opacity');
  document.querySelector('.info').classList.remove('info-container');
  document.querySelector('.change-theme').classList.remove('theme-container');
  document.querySelector('#profile').classList.remove('profile-container');

  document.querySelector('#settings').style.backgroundColor = 
    getComputedStyle(mainArea).backgroundColor;
}

