const changeLanguage = () => {

  if(document.getElementById('select-language').value === 'russian') {

    document.querySelector('#profile').innerHTML = `
      <h4 id="profile-highliths-text">Достижения</h4>
      <p>Тестов пройдено: <span id="tests-completed">${document.getElementById('tests-completed').innerText}</span></p>
      <p>Лучшая точность: <span id="best-accuracy">${document.getElementById('best-accuracy').innerText}</span></p>
      <p>Лучшая скорость: <span id="best-speed">${document.getElementById('best-speed').innerText}</span></p>
      <button id="clear-profile">Очистить Профиль</button>
    `;
    document.getElementById('clear-profile').style.backgroundColor = getComputedStyle(document.body).backgroundColor;
    document.getElementById('clear-profile').style.color = getComputedStyle(mainArea).backgroundColor;

    document.querySelector('#play').innerText = 'играть';
    document.querySelector('#profile-text').innerText = 'профиль';
    document.querySelector('#settings-text').innerText = 'настройки';
    document.querySelector('#about').innerText = 'о сайте';
    document.querySelector('#theme').innerText = 'тема';

    document.querySelector('#time-limit').innerHTML = `
      Лимит времени: 
      <span>
      <select id="select-time" class="select">
      <option value="60">60 сек</option>
      <option value="30">30 сек</option>
      <option value="120">120 сек</option>
      </select>
      </span>
    `;

    document.querySelector('#max-mistakes').innerHTML = `
      Ошибок допустимо: 
      <span>
      <select id="select-mistakes" class="select">
      <option value="off">выкл.</option>
      <option value="5">5</option>
      <option value="10">10</option>
      </select>
      </span>
    `;

    scaleSelects();


    document.querySelector('.info').innerHTML = `
      <h4>О проекте</h4>
      <p>Speedy Typer это игра в которой вам нужно набрать случайный текст
      как можно быстрее. Проект был создан чтобы пользователи могли проверить
      и улучшить свои навыки набора текста. Чтобы начать тест нажмите кнопку 
      'Начать Тест', затем попытайтесь набрать текст за отведенное время.
      После прохождения теста вам будет доступна детальная статистика, в том
      числе Точность и Скорость набора. Есть возможность уменьшить отведенное
      время или задать максимально допустимое число ошибок в настройках.
      <br />
      <br />
      Автор: Шклярик Владимир.
      </p>
    `;

    document.querySelector('#change-theme-text').innerText = 'Выберите тему';
    document.querySelector('#purple-yellow-text').innerText = 'Фиолетово-желтая';
    document.querySelector('#blue-white-text').innerText = 'Сине-белая';
    document.querySelector('#red-gray-text').innerText = 'Красно-серая';


    document.querySelector('.stats').innerHTML = `
      <p id="time-text">Осталось времени: <span id="timer">60</span></p>
      <p id="mistakes-text">Ошибок: <span id="mistakes">0</span></p>
    `;

    startBtn.innerText = 'Начать Тест';
    stopBtn.innerText = 'Закончить Тест';

    document.querySelector('#result-text').innerHTML = 'Результат';
    document.querySelector('.detailed-stats').innerHTML = `
      <p class="stats-item">Точность: <span id="accuracy">N/A</span></p>
      <p class="stats-item">Скорость: <span id="speed">N/A</span></p>
    `;

    document.getElementsByTagName('textarea')[0].placeholder = 'Введите текст здесь...';

    document.querySelector('.all-correct').innerText = 'Успех!';
    document.querySelector('.out-of-time').innerText = 'Время вышло!';
    document.querySelector('.too-many-mistakes').innerText = 'Слишком много ошибок!';
  }

  else {

    document.querySelector('#profile').innerHTML = `
      <h4 id="profile-highliths-text">Profile highlights</h4>
      <p>Tests completed: <span id="tests-completed">${document.getElementById('tests-completed').innerText}</span></p>
      <p>Best accuracy: <span id="best-accuracy">${document.getElementById('best-accuracy').innerText}</span></p>
      <p>Best speed: <span id="best-speed">${document.getElementById('best-speed').innerText}</span></p>
      <button id="clear-profile">Clear Profile</button>
    `;

    document.getElementById('clear-profile').style.backgroundColor = getComputedStyle(document.body).backgroundColor;
    document.getElementById('clear-profile').style.color = getComputedStyle(mainArea).backgroundColor;

    document.querySelector('#play').innerText = 'play';
    document.querySelector('#profile-text').innerText = 'profile';
    document.querySelector('#settings-text').innerText = 'settings';
    document.querySelector('#about').innerText = 'about';
    document.querySelector('#theme').innerText = 'theme';

    document.querySelector('#time-limit').innerHTML = `
      Time limit: 
      <span>
      <select id="select-time" class="select">
      <option value="60">60s</option>
      <option value="30">30s</option>
      <option value="120">120s</option>
      </select>
      </span>
    `;
    document.querySelector('#max-mistakes').innerHTML = `
      Max mistakes allowed: 
      <span>
      <select id="select-mistakes" class="select">
      <option value="off">off</option>
      <option value="5">5</option>
      <option value="10">10</option>
      </select>
      </span>
    `;

    scaleSelects();


    document.querySelector('.info').innerHTML = `
      <h4>About the project</h4>
      <p>Speedy Typer is a game where you need to type the given piece of text 
      as fast as you can. It was created so users could test and practice their
      typings skills. To start the test click the 'Start Test' button, then try
      to complete the task within the given amount of time. After the test there
      are detailed stats available, such as Accuracy, Speed and others. You can
      challenge yourself by reducing the time limit or setting the number of mistakes 
      allowed. 
      <br />
      <br />
      Created by Vladimir Shkliaryk.
      </p>
    `;

    document.querySelector('#change-theme-text').innerText = 'Pick a theme';
    document.querySelector('#purple-yellow-text').innerText = 'Purple-Yellow';
    document.querySelector('#blue-white-text').innerText = 'Blue-White';
    document.querySelector('#red-gray-text').innerText = 'Red-Gray';


    document.querySelector('.stats').innerHTML = `
      <p id="time-text">Time left: <span id="timer">60</span></p>
      <p id="mistakes-text">Mistakes: <span id="mistakes">0</span></p>
    `;

    startBtn.innerText = 'Start Test';
    stopBtn.innerText = 'Stop Test';

    document.querySelector('#result-text').innerHTML = 'Result';
    document.querySelector('.detailed-stats').innerHTML = `
      <p class="stats-item">Accuracy: <span id="accuracy">N/A</span></p>
      <p class="stats-item">Speed: <span id="speed">N/A</span></p>
    `;

    document.getElementsByTagName('textarea')[0].placeholder = 'Input text here...';
  }

  closeStats();
  document.querySelectorAll('.select')[0].style.backgroundColor = 
    getComputedStyle(mainArea).backgroundColor;
  document.querySelectorAll('.select')[2].style.backgroundColor = 
    getComputedStyle(mainArea).backgroundColor;

  document.getElementById('clear-profile').addEventListener('mouseenter', () => {
    document.getElementById('clear-profile').style.transform = 'scale(1.1)';
  })
  document.getElementById('clear-profile').addEventListener('mouseleave', () => {
    document.getElementById('clear-profile').style.transform = 'none';
  })
}