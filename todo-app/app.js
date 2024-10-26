
let head=document.querySelector('h1')
let frm=document.querySelector('form')
let lst=document.querySelector('ul')
let head2=document.querySelectorAll('h2')
console.log(head2)

head.classList.add('first','third')
frm.children[1].classList.add('secound')
head2[0].classList.add('secound')
head2[1].classList.add('secound')


head.classList.add()

frm.addEventListener('submit',(event)=>{
    event.preventDefault()
    let li=document.createElement('li')
    ///style
    li.classList.add('fourth')
    
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

