document.querySelector('.menu-icon-wrapper').onclick = function(){
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  document.querySelector('.nav__list-holder').classList.toggle('nav__list-holder--visible');
};

document.querySelector('.nav__list').onclick = function(){
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  document.querySelector('.nav__list-holder').classList.toggle('nav__list-holder--visible');
};

let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('(999) 999-99-99');
im.mask(selector);