function getRandInt(min, max){
  return Math.round(Math.random() * (max - min) + min)
}

const classes = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"]
var choice = getRandInt(0, 3)

var user_name = prompt("What is your name?")

console.log(choice)
console.log(classes[choice])

document.querySelector('#name').innerHTML = user_name + ', you are ' + classes[choice]
