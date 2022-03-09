const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');


//Toggle nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});

//show modal 
open.addEventListener('click', () => modal.classList.add('show-modal'));

//Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

//Hide modal when clicking outside of it
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false)