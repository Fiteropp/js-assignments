searchForm = document.querySelector("#search-form")
queryInp = document.querySelector("#query")

searchForm.addEventListener('submit', function (event) {
  event.preventDefault()
  const inputVal = queryInp.value
  getShows(inputVal)
})

async function getShows (input_value) {
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${input_value}`)
    if (!response.ok) {
      throw new Error(response.status)
    }
    const responseData = await response.json()
    console.log(responseData)
  } catch (err) {
    console.log(err.message)
  }
}
