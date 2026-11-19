'use strict';
const names = ['John', 'Paul', 'Jones'];

const ul = document.getElementById("target")

for (let x of names) {
  ul.innerHTML += `<li>${x}</li>`
}
