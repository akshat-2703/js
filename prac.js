//reverse a string
/*const str = "hello" ;
 function rev(str){
    return str.split('').reverse().join('') ;
}
console.log(rev(str)) ;

// JavaScript function to check if an object has a certain property.
function hasProperty(obj,property){
    if(obj[property]){
        return true ;
    }
    else
    return false ;
}
const obj = {
    a : 1,
    b : 2,
    c:3 
}
console.log(hasProperty(obj,"a"));
console.log(hasProperty(obj,"z"));

//JavaScript function to find the maximum value in an array.
const array = [1,2,3,4,5] ;
let mini = -1e9 ;
for (let index = 0; index < array.length-1; index++) {
     if(array[index+1] > array[index]){
        mini = array[index+1] ;
     }
}
console.log(mini);

//More precise 
const array = [1,2,3,4,5] ;
console.log(Math.max(...array));

const str = "racecar" ;
let n = str.length ;
let i = 0 , j = n-1 ;
while(i <= j){
    if(str[i++] != str[j--]){
        console.log("false");
        break ;
    }
}
console.log("true");
console.log('5'+2);
console.log('5'-2);

var x = 20 ;
function foo(){
    console.log(x);
 var  x = 10 ;
}
foo();

const arr = [1,2,3,4] ;
const arr2 = arr ;
arr2[1] = 5 ;
console.log(arr);
console.log(arr2);

console.log(typeof(NaN));

console.log(NaN === NaN);

console.log(1<2<3);
console.log(3>2>1);

//const arr = ["neha","nidhi","lalit","kamal"]
const x = document.getElementsById('hello') ;
console.log(x);
x.onclick = ()=>{
    x.innerHtML = "hi"
}
    
const helloWorld = document.getElementById('hello-world');
const myArray = ['elem1', 'elem2', 'elem3', 'elem4'];

let clickCount = 0;

helloWorld.addEventListener('click', () => {
  clickCount++;
  if (clickCount > myArray.length) {
    clickCount = 1;
  }
  helloWorld.textContent = myArray[clickCount - 1];
})
*/