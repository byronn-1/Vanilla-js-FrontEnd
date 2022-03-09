
const list = document.querySelectorAll('#list-item');

for (let listItem of list) {
  if (listItem.classList.contains('flag')) {
    console.log(listItem.classList)
  }
}
