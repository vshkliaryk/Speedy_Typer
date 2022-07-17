const preloader = document.querySelector('.preloader');
preloader.classList.add('done');

const togglePreloader = () => {
  preloader.classList.remove('done');
  setTimeout(() => {
    preloader.classList.add('done');
  }, 500);
}