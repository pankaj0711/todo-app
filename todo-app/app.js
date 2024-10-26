

let frm=document.querySelector('form')
let lst=document.querySelector('ul')

frm.addEventListener('submit',(event)=>{
    event.preventDefault()
    let li=document.createElement('li')
    if(event.target.children[1].value !=""){
        li.innerText=event.target.children[1].value
    lst.append(li)
    }else{
        return;
    }
    event.target.children[1].value=""
    ///task2 remove task when we click on it
    li.addEventListener('click',()=>{
        li.remove()
    })
    
})

