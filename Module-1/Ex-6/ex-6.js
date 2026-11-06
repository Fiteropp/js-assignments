"use strict";
let sqrt_bool = confirm("Should I calculate the square root?")
let print_num = ""
let num_sqrt = 0

if (sqrt_bool) {
  num = prompt("Give a num for sqrt")
  num = parseInt(num)

  let num_sqrt = Math.sqrt(num)
}


document.querySelector('#print_num').innerHTML = num_sqrt
