const content = document.querySelector('.popup-content');
const btn = document.querySelector('button');
const bg = document.querySelector('.popup-bg')
const cross = document.querySelector('.popup-close')

btn.addEventListener('click', () => {
  bg.style.display = 'inline-block';
  // content.style.zIndex = '1';
  content.style.display = 'block';
});

cross.addEventListener('click', () => {
  bg.style.display = 'none';
  content.style.display = 'none';
})

bg.addEventListener('click', () => {
  bg.style.display = 'none';
  content.style.display = 'none';
})