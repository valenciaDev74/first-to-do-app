const btnAdd = document.querySelector("#add")
const textBox = document.querySelector("#textBox")
const container = document.querySelector("#container")

function add(e){
	e.preventDefault()

	if (textBox.value == "") {
		return alert("You cannot create empty notes")
	}

	const title = document.createElement('h2');
	title.textContent = textBox.value;

	const todo = document.createElement('div')
	todo.classList.add('to-do__element')

	todo.appendChild(title)

	const iconUpdate = document.createElement('i')
	iconUpdate.classList.add('fa-solid', 'fa-pen')
	const btnUpt = document.createElement('button')
	btnUpt.appendChild(iconUpdate)
	btnUpt.classList.add('button')
	todo.appendChild(btnUpt)

	const iconTrash = document.createElement('i')
	iconTrash.classList.add('fa-solid', 'fa-trash-can')
	const btnDel = document.createElement('button')
	btnDel.appendChild(iconTrash)
	btnDel.classList.add('button')
	btnDel.classList.add('red')
	todo.appendChild(btnDel)

	container.appendChild(todo)

	textBox.value = ""

	btnUpt.addEventListener("click",() => {
		if (iconUpdate.className == "fa-solid fa-pen") {
			title.setAttribute("contenteditable", "true")
			iconUpdate.classList.toggle('fa-pen')
			iconUpdate.classList.toggle("fa-circle-check")
			btnUpt.classList.toggle("green")
			title.style.color = "#e15e60"
		} else {
			if (title.innerText == "") {
				return alert("You can't have empty notes")
			}

			title.removeAttribute("contenteditable")
			iconUpdate.classList.toggle('fa-pen')
			iconUpdate.classList.toggle("fa-circle-check")
			btnUpt.classList.toggle("green")
			title.style.color = "#efefef"
		}
	})

	btnDel.addEventListener("click",() => {
		container.removeChild(todo)
	})

}

btnAdd.addEventListener('click', add)