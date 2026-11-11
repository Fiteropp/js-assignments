"use strict"

const even = (number_arr) => {
  even_num_arr = []

  for (let num of number_arr) {
    if (num % 2 == 0) {
      even_num_arr.push(num)
    }
  }

  return even_num_arr
}

test_arr = [32, 35, 1, 4, 34565, 44245, 232, 8, 52]

output_array = even(test_arr)

const print_div = document.createElement("div")
const input_h = document.createElement("h2")
const cont = document.createTextNode(`Input arr: ${test_arr}`);
input_h.appendChild(cont)
const output_h = document.createElement("h2")
const cont2 = document.createTextNode(`Output: ${output_array}`);
output_h.appendChild(cont2)

print_div.appendChild(input_h)
print_div.appendChild(output_h)

document.body.appendChild(print_div)
