import number_a from './a.js'
import number_b from './b.js'
import number_c from './c.js'

require('./style.css');

console.log("number_a : ",number_a)
console.log("number_b : ",number_b)
console.log("number_c : ",number_c)

const btnA = document.querySelector('#btn_a')
const btnB = document.querySelector('#btn_b')
const btnC = document.querySelector('#btn_c')
const display = document.querySelector('#display')

btnA.addEventListener("click",()=>{
    display.textContent = number_a
})
btnB.addEventListener("click",()=>{
    display.textContent = number_b
})
btnC.addEventListener("click",()=>{
    display.textContent = number_c
})