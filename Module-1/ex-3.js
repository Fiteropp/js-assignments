numbers = []
var summ = 0
var product = 0
var avg = 0

while (numbers.length < 3){
  var num = prompt("Give an int")
  var num = parseInt(num)
  if (Number.isInteger(num)) {
    numbers.push(num)
  } else {
    alert("Please input only valid ints")
    continue
  }
}
for (let num of numbers) {
  summ += num
}

product = numbers[0] * numbers[1] * numbers[2]

avg = (numbers[0] + numbers[1] + numbers[2]) / 3

document.querySelector('#summ').innerHTML = 'Sum of three ints: ' + summ
document.querySelector('#product').innerHTML = 'Product of three ints: ' + product
document.querySelector('#avg').innerHTML = 'Average of three ints: ' + avg

nfsu2-xyz-dean-goofy-silly-comma-ebook-syrup-ankle-error
