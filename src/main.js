const collapsible = document.getElementsByClassName('main__left__bar');

collapsible[0].addEventListener('click', function () {
  this.classList.toggle('active');
  const content = this.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
  }
});

const menuBar = document.getElementById('menu_bar');

menuBar.addEventListener('click', function () {
  const hiddenMenu = document.getElementsByClassName('main__left');
  hiddenMenu[0].classList.toggle('showed');
});