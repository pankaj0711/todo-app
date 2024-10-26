//////////selector

// let p=document.getElementsByTagName("p")

// p[0].style.color='red'
// p[1].style.fontSize='4px'
// p[2].style.backgroundColor='yellow'
// console.log(p)

// let idd=document.getElementById('name')
// console.log(idd)

// let cls=document.getElementsByClassName('is')
// console.log(cls)
// cls[0].style.color='violet'
// cls[1].style.color='orange'

// let select= document.querySelector('#name')
// console.log(select)
// select.style.fontSize='25px';


// let all=document.querySelectorAll('.is')


// all[0].style.color='yellow';
// all[1].style.color='magenta';

// console.log(all)

// let ele=document.querySelector('p')
// console.log(ele.innerText)
// ele.innerText='hello hello'
// console.log(ele.innerText)

// console.log(ele.textContent)
// ele.textContent='helo'
// console.log(ele.textContent)

// let cla=document.querySelector(".is")
// console.log(cla)
// console.log(cla.innerText)
// console.log(cla.textContent)

// console.log(cla.innerHTML)
// console.log(ele.innerHTML)

// cla.innerHTML=<h1>pankaj</h1>



// let a=document.querySelector('p')

// a.style.cssText = "background-color:pink;font-size:55px;border:2px dashed green;color:white;"

// a.style.cssText="color:red;background-color:yellow;font-size:78px"

// a.style.cssText=`color:red;background-color:yellow;font-size:78px;`

// a.innerText='<h1>pankaj</h1>'
// a.innerHTML="<h1>pankaj</h1>"
// console.log(a.innerHTML)


///////////get attribute and set attributes


// let a=document.querySelector('a')
// a.getAttribute('href')
// console.log(a.getAttribute('href'))
//('href','https://www.youtube.com')


///cursol project

///setTimeout() and //setInterval()
///setTimeout(()=>{},2000) ///callback function run after give time interval and only once not repeatedly
///setInterval(()=>{},4000)///callback function run repeatdly after given time interval and to stop setInterval we used
////clearInterval()
///let interval=setInterval(()=>{},4000)
////clearInterval(interval)


//////setTimeout

// setTimeout(()=>{
//     console.log('pankaj')
// },5000)

// setInterval(()=>{
//     console.log('rahul')
// },6000)

//cursol


// let a=document.querySelector('img')
// console.log(a)
let b=[
    "https://media.istockphoto.com/id/2149530993/photo/digital-human-head-concept-for-ai-metaverse-and-facial-recognition-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=nyP4c-s5cSZy1nv1K0xn1ynC-Xuc1sY4Y29ZQqcrztA=",
    "https://plus.unsplash.com/premium_photo-1698405202949-1313de4a437d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1698405202892-2c3cc39fb90c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlfGVufDB8fDB8fHww"]

// 














// let i=0
// let interval=setInterval((a=document.querySelector('img'))=>{
//     a.setAttribute('src',b[i])
//     i=(i+1)%b.length
// },2000)


// setTimeout(()=>{
//     clearInterval(interval)
// },10000)

// let a=10;
// let c=20;

// function sum(){
//     let d=a+c;
//     console.log(d)
// }

// sum();


// let obj={
//     m:10,
//     n:20,
//     fn:function(a,c) {
//         let p=a+c
//         console.log(p)
        
//     }
// }
// obj.fn(a,c)

// let h=document.querySelector('h2')


//////////traversing html element

// h.nextElementSibling.style.color='red';
// h.previousElementSibling.style.color='blue';
// h.parentElement.style.color='yellow';

// let h2=document.querySelector('div')
// console.log(h2.children)
// h2.children[1].style.color='magenta'

//////////classlist


// let h=document.querySelector('h1')

// h.classList.add('first','secound')

// h.classList.remove('secound')

// h.classList.toggle('secound')

// h.classList.toggle('secound')

// h.classList.contains('third')
// console.log(h.classList.contains('third'))
// console.log(h.classList.contains('first'))

//////////////cursol

// let image=document.querySelector('img')

// let arr=['https://plus.unsplash.com/premium_photo-1700169563710-7c5d5bb92876?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
//     'https://images.unsplash.com/photo-1729218621503-b4a57a7ab7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
//     'https://images.unsplash.com/photo-1729434228800-846f37e3f13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
//     'https://images.unsplash.com/photo-1729742200990-eca03d45ad73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1729731322066-183911deb95b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D'
// ]


// let i=0;

// let time=  setInterval(()=>{
//         image.setAttribute('src',arr[i])
//         i=(i+1)%arr.length
    
//         },2000)

// setTimeout(()=>{
//     clearInterval(time)
// },15000)







