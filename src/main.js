const collapsible = document.getElementsByClassName('main-left-bar');

collapsible[0].addEventListener('click', function () {
  this.classList.toggle('active');
  const content = this.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
  }
});

const menuBar = document.getElementById('menu-bar');

menuBar.addEventListener('click', function () {
  const hiddenMenu = document.getElementsByClassName('main-left');
  const taskHolder = document.getElementById('task-holder');
  taskHolder.classList.toggle('no-display');
  hiddenMenu[0].classList.toggle('showed');

});

const addSectionBtn = document.getElementById('add-button');

addSectionBtn.addEventListener('click', function () {
  addSectionBtn.classList.add('no-display');
  const addSection = document.getElementById('add-section');
  addSection.classList.remove('no-display');


});




