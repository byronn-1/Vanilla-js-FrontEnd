const navBtn = document.getElementById('toggle-nav');
const drpContent = document.getElementById('myDropdown');
const dropdownArea = document.getElementById('drop-area')
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');


function toggleNavBurger() {
  bar1.classList.toggle('change');
  bar2.classList.toggle('change');
  bar3.classList.toggle('change');
}

navBtn.addEventListener('click', () => {
  drpContent.classList.toggle('show');
  toggleNavBurger();
});

document.addEventListener('click', e => {
  var clickOnNav = dropdownArea.contains(e.target);

  if (!clickOnNav) {
    drpContent.classList.remove('show');
    toggleNavBurger();
  }
});


/* 
toggleNavBurger function needs to be changed to a class list based selection method and iterative change method
--the nav button (navBtn) event listener toggles the show class on and off to show the nav
--the document event listener checks to see if the event came from the open menu and if not it will remove the show class from the menu to close it.
*/