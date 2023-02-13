
const nav=document.querySelector('nav')
const ul=nav.querySelector('ul')
const bars=nav.querySelector('.fa-bars')
const xmark=nav.querySelector('.fa-xmark')


bars.addEventListener('click', ()=>{
ul.classList.toggle('menu')
})
xmark.addEventListener('click',()=>{
    ul.classList.toggle('menu')
})