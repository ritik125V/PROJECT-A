document.addEventListener("DOMContentLoaded" ,()=>{
const todolist = document.getElementById("todolist")
const todoinput = document.getElementById("todoinput")
const btnenter = document.getElementById("btnenter")
const tasklist = document.getElementById("tasklist")
const dltbtn = document.getElementById('dltbtn')
const tasktext = document.getElementById("tasktext")


let arr = JSON.parse(localStorage.getItem("arr")) || []
arr.forEach(task => {
    console.log(task.text);
    rendertask(task)
    
});





btnenter.addEventListener('click' , (e)=>{
    if(todoinput === " ") return ;
    const inputvalue = todoinput.value.trim()
    const newtask = {
        id: Date.now(),
        text: inputvalue,
        completed: false
    }
    
    arr.push(newtask)
    savetask()
    rendertask(newtask)
    inputvalue = ""
    
    
    
})


const savetask = () => {
    localStorage.setItem("arr", JSON.stringify(arr));
    
}



function rendertask(task){
    const div = document.createElement('div');
    div.setAttribute("data-id" , task.id )
    div.setAttribute("class" , "text")
    div.innerHTML=`
        <i class="bi bi-check2-circle"></i>
        <p class="inputtext" >   ${task.text}</p>
        <button class="dltbtn">DELETE</button>`
    div.addEventListener("click" , (e)=>{
        
        if(e.target.tagName === 'P'){
            console.log(e.target)
            div.classList.toggle("underline")
            completed = true;
        }
        div.querySelector("button").addEventListener("click" , (e) =>{
            e.stopPropagation()
            arr = arr.filter(t => t.id !== task.id)
            div.remove()
            savetasks()

        })
    
    })

    todolist.appendChild(div)
    
}



})