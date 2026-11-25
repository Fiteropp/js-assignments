searchForm = document.querySelector("#search-form")
queryInp = document.querySelector("#query")
resultDiv = document.createElement("div")
resultDiv.id = "results"
document.body.appendChild(resultDiv)

searchForm.addEventListener('submit', async function (event) {
  event.preventDefault()
  const inputVal = queryInp.value
  const movies = await getShows(inputVal)
  constructArticles(movies)
})

async function getShows (input_value) {
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${input_value}`)
    if (!response.ok) {
      throw new Error(response.status)
    }
    const responseData = await response.json()
    console.log(responseData)
    return responseData
  } catch (err) {
    console.log(err.message)
  }
}

async function constructArticles(responseData) {
  resultDiv.innerHTML = ''

  for (let movieData of responseData) {
    const article = document.createElement("article")
    const heading = document.createElement("h2")
    heading.textContent = movieData.show.name || ""

    const link = document.createElement("a")
    link.textContent = "Show link"
    link.setAttribute("href", movieData.show.url || "")

    const img = document.createElement("img")
    img.setAttribute("src", movieData.show.image?.medium || "")
    img.setAttribute("alt", movieData.show.name || "")

    const summary = document.createElement("div")
    summary.innerHTML = movieData.show.summary

    article.appendChild(heading)
    article.appendChild(img)
    article.appendChild(link)
    article.appendChild(summary)

    resultDiv.appendChild(article)
  }

}
