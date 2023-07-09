const input = document.querySelector('input')
const addBtn = document.querySelector('.add-btn')
const remove = document.querySelector('.remove-btn')
const ul = document.querySelector('ul')

localStorage.setItem('test',JSON.stringify({title:'go to school',id:1}))

function view (){
    let task = JSON.parse(localStorage.setItem('test'))
    let allList = ''
    task.map(el=>{
        allList += '<li class="list-group-item">${el.title} </li>'
    })
    ul.innerHTML = allList
}