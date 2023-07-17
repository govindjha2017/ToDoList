const input=document.querySelector('input');
const add= document.querySelector('button');
// console.log(input,add);

const tasklist=document.querySelector('.task-list')

const obj=[];

add.addEventListener('click',(e)=>{
   if(input.value!=''){
    const str=`<div class="section-A">
            <input type="checkbox" class="checkbox">
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
if(localStorage.getItem('todo')==true)
   obj= json.parse(localStorage.getItem('todo'));
obj.push(input.value)
localStorage.setItem('todo',JSON.stringify(obj));

input.value='';
}
})


function fun(){
    console.log('onload loded');
    
    let x= JSON.parse(localStorage.getItem('todo'));
    console.log(x);
    for(let i=0;i<x.length;i++){

        console.log(localStorage.getItem(localStorage.key(0)));

        const str=`<div class="section-A">
            <input type="checkbox" class="checkbox">
                <p>${x[i]}</p>
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
    }


}
onload=fun();

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
         
       let x= JSON.parse(localStorage.getItem('todo'));
        for(let i=0;i<x.length;i++){
            
            if(x[i]==e.target.parentElement.previousElementSibling.children[1].innerText){
                x.splice(i,1);
                console.log(x);
                localStorage.setItem('todo',JSON.stringify(x));
            }
        }
     
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
    else if(taskclass === 'checkbox'){
        e.target.nextElementSibling.classList.toggle('checked');

        let x= JSON.parse(localStorage.getItem('todo'));
        for(let i=0;i<x.length;i++){
            
            if(x[i]==e.target.nextElementSibling.innerText){
                x.splice(i,1);
                x.push(e.target.nextElementSibling.innerText)
                localStorage.setItem('todo',JSON.stringify(x));
            }
        }
    }
})