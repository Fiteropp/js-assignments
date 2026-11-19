'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];


const select = document.getElementById("target")


for (let student of students) {
  const option = document.createElement("option")
  option.value = student["id"]
  const name = document.createTextNode(student["name"])
  option.appendChild(name)
  select.appendChild(option)
}
