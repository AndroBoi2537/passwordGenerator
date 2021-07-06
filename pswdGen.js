const chars = `1234567890-_=!@$%^&abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`
const newChars = chars.split('')
const div = document.querySelector('.password')
const btn = document.querySelector('.button')
const input = document.querySelector('#input')
const p = document.querySelector('.p')

// This function returns a random number which is later used to
// get array stings using index.
function counter(){
  let n =  Math.round(Math.random()*70)
  return n
}
// event listener to get the value from input
input.addEventListener('click',()=>{
    let inputVal = input.value-1
    p.innerHTML = inputVal+1
    btn.addEventListener('click',()=>{
      // two empty arrays
      const arr = [];
      const arr2 = [];
      // Recursive function
      function p(num){
        // push counter() to arr until num is 0
        arr.push(counter())
        if(num != 0){
          // deducting inputvalue for every recursion
          p(num-1)
        }
      }
        p(inputVal)
        // This function produces the string
        stringMaker(arr,arr2)
        // returns string without (,)
        let finalResult = arr2.join("")
        div.innerHTML = finalResult
    })
})

function stringMaker(pa1,pa2){
  for(let i = 0 ; i<pa1.length;i++){
    let str =  newChars[pa1[i]]
     pa2.push(str)
  }
}
