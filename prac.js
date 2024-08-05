//reverse a string

const { get } = require("mongoose");

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

//callback function example == 
//callback basically wo jese jo function ek bna rkha h us function ko hm kisi dusre function m as argument pass kre i.e. callback function
function sum(a,b){
    console.log( a+b ) ;
}
function cse(a,b,sumi){
    sum(a,b) ;
}
cse(4,2,sum) ;

//using callback hell or as series of callback 
function getData(data,getNextData) {
     setTimeout(()=>{
         console.log(data); 
         if(getNextData){
            getNextData() ;
         }
     },2000)
}
getData(1,()=>{
    getData(3,()=>{
        getData(4) ;
    });
}) ;

//To resolve the issue of callback hell we use promises
//promise is for eventual completion of task it is an object in js

let promise = new Promise((resolve,reject) => {
    console.log("I am a promise") ;
       resolve("success") ;
})
       
function getData(dataId,getNextData){
        return new Promise((resolve,reject) =>{
            setTimeout((resolve,reject) =>{
            console.log("data",dataId) ; 
            resolve("success");
            if(getNextData){
                getNextData() ;
            }
            },2000) ;
        })
      }
 
//for promise to fullfil we use then function and for reject we use catch function

const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I am a promise"); 
      //  resolve("success") ;
      reject("error") ;
    })
};

let promise = getPromise();
 promise.then((res)=>{
    console.log("promise fullfilled",res) ;
 });

 promise.catch((err) =>{
    console.log("rejected",err);
    
 })
    
 function asyncFunc() {
    return new  Promise((resolve,reject) => {
   setTimeout(()=>{
    console.log("some data1");
    resolve("success") ;
   },3000) ;
    });
 }
 console.log(("fetching data"));
 
 let p1 = asyncFunc() ;
 p1.then((res)=>{
    console.log((res)) ;
    
})
 
function getData(dataId,getNextData){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success") ;
            if(getNextData){
                getNextData() ;
            }
        },2000) ;
    });
}
//Promise Chain
console.log("getting data1....");
getData(1)
.then((res) => {
    console.log("getting data2...");
  return getData(2) ;
})
.then((res) => {
    console.log("getting data3...");
   return getData(3) ;
})
.then((res) =>{
    console.log("getting data4...");
    return getData(4) ;
})
.then((res) => {
    console.log(res) ;  
})

//async function always return a promise 
//await pauses the execution of its surrounding async function until the promise is settled
async function hello() {
     console.log("hello");    
}
//await only used inside async funct

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
       resolve(200) ;
        },2000) ;
    }) ;
}
async function  getWeatherData() {
     await api() ; //1st 
     await api() ; //2nd 
}

function getData(dataId){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
   console.log("data",dataId);
   resolve("success") ;
        },2000);
    }); 
}
async function getAlldata() {
    console.log("getting all datas");
   await getData(1) ;
   console.log("getting data1...");
   await getData(2); 
   console.log("getting data2...");
   await getData(3) ;
   console.log("getting data1...");
}
getAlldata() ;
//iife is a function that is called immediately as soon as it is defined
//iife use kuki jese async function aur await k liye ek naya function banana pad rha aur fr call fr alg krna pad rha to there is more greater approach we use iife 
*/
function getData(dataId){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
   console.log("data",dataId);
   resolve("success") ;
        },2000);
    }); 
}

(async function () {
    console.log("getting all datas");
   await getData(1) ;
   console.log("getting data1...");
   await getData(2); 
   console.log("getting data2...");
   await getData(3) ;
   console.log("getting data1...");
})()  ;
//iife function ko dobara use ni kr payge
