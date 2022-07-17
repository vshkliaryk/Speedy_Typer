document.querySelectorAll('i').forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.2)';
  })
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'none';
  })
})

document.querySelectorAll('button').forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.1)';
  })
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'none';
  })
})


const scaleSelects = () => {
  document.querySelectorAll('select').forEach((item) => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.1)';
    })
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'none';
    })
  })
}
scaleSelects();

document.querySelectorAll('input').forEach((item) => {
  item.nextElementSibling.addEventListener('mouseenter', () => {
    item.nextElementSibling.style.fontSize = '110%';
  })
  item.nextElementSibling.addEventListener('mouseleave', () => {
    item.nextElementSibling.style.fontSize = '100%';
  })
})