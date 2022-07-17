const openInfo = () => {
  document.querySelector('.info').classList.add('info-container');

  mainArea.classList.add('container-opacity');
  document.querySelector('#settings').classList.remove('settings-container');
  document.querySelector('.change-theme').classList.remove('theme-container');
  document.querySelector('#profile').classList.remove('profile-container');

  document.querySelector('.info').style.backgroundColor = 
    getComputedStyle(mainArea).backgroundColor;
}