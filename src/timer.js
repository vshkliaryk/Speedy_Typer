const updateTimer = () => {
  if(time == 0) {
    document.querySelector('.out-of-time').style.display = 'flex';
      displayResult();
  }
  else {
    document.getElementById('timer').innerText = --time;
  }
}
    
const timeReduce = () => {
  time = parseInt(document.getElementById('select-time').value);
  timer = setInterval(updateTimer, 1000);
}