const input=document.querySelector('input');
const add= document.querySelector('button');
// console.log(input,add);

const tasklist=document.querySelector('.task-list')

add.addEventListener('click',(e)=>{
   if(input.value!=''){
    const str=`<div class="section-A">
            <input type="checkbox">
                <p>${input.value}</p>
            </div>
            <div class="section-B">
                <span class="up-arrow">⬆️</span>
                <span class="bin">🗑️</span>
                <span class="down-arrow">⬇️</span>
            </div>`
 
const task=document.createElement('div')
task.classList.add('task')
task.innerHTML=str;
tasklist.appendChild(task);
input.value='';
}
})

const bin= document.querySelectorAll('.bin');

// for(let b of bin){
//     b.addEventListener('click',(e)=>{
//         console.log(e.target);
//     })
// }

tasklist.addEventListener('click',(e)=>{
    console.log(e.target.getAttribute('class'));
    const taskclass=e.target.getAttribute('class');
    if(taskclass==='bin'){
        const currTask=e.target.parentElement.parentElement;
        currTask.remove();
    }
    else if(taskclass==='up-arrow'){
        const currTask=e.target.parentElement.parentElement;
        const prevTask=currTask.previousElementSibling;
        prevTask.before(currTask);
    }
    else if(taskclass==='down-arrow'){
        const currTask=e.target.parentElement.parentElement;
        const nextTask=currTask.nextElementSibling;
        nextTask.after(currTask);
    }
})