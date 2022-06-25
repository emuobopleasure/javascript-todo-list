const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

const generateTemplate = (todo) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>
        ${todo}
    </span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `
    list.innerHTML += html
}

// adding todo

addForm.addEventListener('submit', (e) => {
    e.preventDefault()
   const todo = addForm.add.value.trim()
   if (todo.length) {
       generateTemplate(todo)
       addForm.reset()
    }
})

// deleting todo

list.addEventListener('click', (e) => {
    if ( e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
})

// searching todos

const filterTodos = (press) => {
    // console.log(Array.from(list.children))
    Array.from(list.children)
        .filter((todo) => {
           return !todo.textContent.toLowerCase().includes(press)
        })
        .forEach((todo) => {
            return todo.classList.add('filtered')
        })

    Array.from(list.children)
        .filter((todo) => {
            return todo.textContent.toLowerCase().includes(press)
        })
        .forEach((todo) => {
            return todo.classList.remove('filtered')
        })
}

search.addEventListener('keyup', (e) => {
    const press = e.target.value.trim().toLowerCase()
    filterTodos(press)
})

