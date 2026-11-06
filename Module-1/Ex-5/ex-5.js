user_year = prompt("Enter a year")
leap_year = false
leap_year_print = ""

if (user_year % 4 == 0) {
  if (user_year % 100 != 0) {
    leap_year = true
  } else {
    if (user_year % 400 != 0) {
      leap_year = false
    } else {
      leap_year = true
    }
  }
}

if (leap_year) {
  leap_year_print = 'Year ' + user_year + ' is leap'
} else {
  leap_year_print = 'Year ' + user_year + ' is not leap'
}


document.querySelector('#leap_year').innerHTML = leap_year_print
