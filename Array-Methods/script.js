const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionairesBtn = document.getElementById('show-millionaires')
const sortBtn = document.getElementById('sort')
const calculateWealthBtn = document.getElementById('calculate-wealth')

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();


//Fetch random user and add money 
async function getRandomUser() {
  const res = await fetch('https:randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 10000000)
  }
  addData(newUser);
}

//Double everyones money using =====> MAP
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  })

  updateDOM();
}

//Sort by the most amount of money using =====> SORT 
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}

// show only millionares =========> FILTER

function showMillionaires() {
  data = data.filter(user => user.money > 1000000);

  updateDOM();
}

//Add new obj to data arr
function addData(obj) {
  data.push(obj);
  updateDOM();
}

//Update the DOM  ============> FOREACH
function updateDOM(provideData = data) {
  //clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>'
  provideData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong>
   ${formatMoney(item.money)}`
    main.appendChild(element)
  });
}

//Total the amount of wealth shown 
function calculateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth:<strong>${formatMoney(wealth)} </h3>`;
  main.appendChild(wealthEl)
}

//Format number as money
function formatMoney(number) {
  return '$ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth)
