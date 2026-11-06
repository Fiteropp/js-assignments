"use strict";

function getRandInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function rollDice() {
  return getRandInt(1, 6);
}

function createProbArr(dice_count) {
  const prob_array = new Map();

  for (let i = 1; i <= 6 * dice_count; i++) {
    prob_array.set(i, { val: 0 });
  }

  return prob_array;
}

function simulateDiceSumProb(dice_count, prob_array) {
  let si = 0;

  while (si < 10000) {
    let temp_sum = 0;

    for (let i = 0; i < dice_count; i++) {
      temp_sum += rollDice();
    }

    prob_array.get(temp_sum).val++;
    si++;
  }

  return prob_array;
}

let user_dice_count = parseInt(prompt("Give count of dices"))
let user_target_sum = parseInt(prompt(
  `Give a desired sum of ${user_dice_count} dice (1-${user_dice_count * 6})`,
))
let distrib_chart = ""

const prob_array = createProbArr(user_dice_count);
const distrib_array = simulateDiceSumProb(user_dice_count, prob_array);
const sum_probability = (distrib_array.get(user_target_sum).val / 100);

document.querySelector("#print_num").innerHTML =
  `Probability to get sum ${user_target_sum} with ${user_dice_count} is ${sum_probability}%`;


const maxNumWidth = String(user_dice_count * 6).length + 1;

for (let x = 1; x <= user_dice_count * 6; x++) {
  const entry = distrib_array.get(x);
    if (!entry) continue;

    const numLabel = `${x}.`.padStart(maxNumWidth, " ");
    const percentage = (entry.val / 100).toFixed(2);
    const pctLabel = `${percentage}%`.padStart(7, " ");
    const barLength = Math.round(entry.val / 100);

    distrib_chart += `${numLabel} ${pctLabel} ${"#".repeat(barLength)}<br>`;

}

document.querySelector("#chart").innerHTML = distrib_chart.replace(/ /g, "&nbsp;");
