const changeTheme = () => {
  document.querySelector('.change-theme').classList.add('theme-container');

  mainArea.classList.add('container-opacity');
  document.querySelector('.info').classList.remove('info-container');
  document.querySelector('#settings').classList.remove('settings-container');
  document.querySelector('#profile').classList.remove('profile-container');

  document.getElementById('blue-white').addEventListener('click', () => {
    document.body.style.backgroundColor = '#3066f6';
    mainArea.style.backgroundColor = 'white';
    document.querySelector('.menu').style.color = 'white';
    document.querySelector('.theme-container').style.backgroundColor = 'white';
    document.querySelectorAll('.select').forEach((elem) => (elem.style.backgroundColor = 'white'));
    startBtn.style.cssText += 'background-color: #3066f6; color: white';
    stopBtn.style.cssText += 'background-color: #3066f6; color: white';
    document.getElementById('clear-profile').style.cssText += 'background-color: #3066f6; color: white';
    preloader.style.backgroundColor = 'white';
    document.querySelector('.loader').style.cssText = `border: 10px solid #3066f6; 
            border-top-color: white`;
  })

  document.getElementById('purple-yellow').addEventListener('click', () => {
    document.body.style.backgroundColor = '#52098d';
    mainArea.style.backgroundColor = '#f5c320';
    document.querySelector('.menu').style.color = '#f5c320';
    document.querySelector('.theme-container').style.backgroundColor = '#f5c320';
    document.querySelectorAll('.select').forEach((elem) => (elem.style.backgroundColor = '#f5c320'));
    startBtn.style.cssText += 'background-color: #52098d; color: #f5c320';
    stopBtn.style.cssText += 'background-color: #52098d; color: #f5c320';
    document.getElementById('clear-profile').style.cssText += 'background-color: #52098d; color: #f5c320';
    preloader.style.backgroundColor = '#f5c320';
    document.querySelector('.loader').style.cssText = `border: 10px solid #52098d; 
        border-top-color: #f5c320`;
  })

  document.getElementById('red-gray').addEventListener('click', () => {
    document.body.style.backgroundColor = '#961a04';
    mainArea.style.backgroundColor = '#bbbbbb';
    document.querySelector('.menu').style.color = '#bbbbbb';
    document.querySelector('.theme-container').style.backgroundColor = '#bbbbbb';
    document.querySelectorAll('.select').forEach((elem) => (elem.style.backgroundColor = '#bbbbbb'));
    startBtn.style.cssText += 'background-color: #961a04; color: #bbbbbb';
    stopBtn.style.cssText += 'background-color: #961a04; color: #bbbbbb';
    document.getElementById('clear-profile').style.cssText += 'background-color: #961a04; color: #bbbbbb';
    preloader.style.backgroundColor = '#bbbbbb';
    document.querySelector('.loader').style.cssText = `border: 10px solid #961a04; 
        border-top-color: #bbbbbb`;
  })
}
