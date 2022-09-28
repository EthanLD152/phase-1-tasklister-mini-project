document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    handleTask(e.target.new_task_description.value)
  })
});

function handleTask(task){
  let p = document.createElement('p')
  let btn = document.createElement("button")
  btn.addEventListener("click", handleDelete)
  btn.textContent = "x"
  p.appendChild(btn)
  p.textContent = `${task} `
  document.querySelector("#list").appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}