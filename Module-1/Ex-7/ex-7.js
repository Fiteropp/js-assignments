"use strict";

function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function rollDice() {
  return getRandInt(1, 6)
}

function rollDices(count, diceArray) {
  for (let i = 0; i < count; i++) {
    let dice = rollDice()
    diceArray.push(dice)
  }
}

let dices = []
let sum_of_dices = 0
let throw_count = prompt("How many dice rolls?")

rollDices(throw_count, dices)
sum_of_dices = dices.reduce(
  function (total, currentDice) {
    return total + currentDice
  }, 0
)

document.querySelector("#print_num").innerHTML = 'Dices: ' + dices + ' sum of dice rolls: ' + sum_of_dices
