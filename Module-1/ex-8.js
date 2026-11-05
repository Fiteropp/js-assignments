let start_year = prompt("Give the starting year")
let end_year = prompt("Give the end year")
let list_years = ""

for (let i = start_year; i < end_year; i++){
  list_years += '<li>' + i + '</li>\n'
}

document.querySelector("#year_list").innerHTML = list_years
