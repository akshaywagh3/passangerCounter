//document.getElementById('count-element').innerText=5

let count =0

const counter=document.getElementById('increment-btn')
const save=document.getElementById('save-btn')
const total=document.getElementById('count-element')
const para =document.getElementById('para');

counter.addEventListener('click',()=>{
    count=count+1
    total.innerText=count
})

save.addEventListener('click',()=>{
    para.textContent+='- '+total.innerText
    total.innerText=0
    count=0

})