"use strict"

const concat = (array) => {
  concat_str = ""

  for (let str of array) {
    concat_str += str
  }

  return concat_str
}

test_arr = ["Johnny", "DeeDee", "Joey", "Marky"]
result_str = concat(test_arr)

document.getElementById("print_num").innerHTML = result_str
