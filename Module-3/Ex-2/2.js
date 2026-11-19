const li_order = ["First", "Second", "Third"]

const ul = document.getElementById("target")


for (let x of li_order) {
  const li = document.createElement("li")
  const content = document.createTextNode(`${x} element`)
  if (x == "Second") {
    li.className = "my-item"
  }
  li.appendChild(content)
  ul.appendChild(li)
}
