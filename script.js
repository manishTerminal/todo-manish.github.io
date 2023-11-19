//1. select all the required element

const form = document.querySelector("#form")
const input = document.querySelector("#item")
const orderedlist = document.querySelector(".orderedlist")

//2. Add item to the html page

form.addEventListener("submit", (e) => {
	e.preventDefault()

	const item = document.createElement("li")
	item.innerText = input.value
	item.classList.add("list")

	orderedlist.appendChild(item)

	input.value = ""

	item.addEventListener("click", () => {
		item.remove()
	})
})
