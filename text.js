/*
const hero = ["akshat","deepak"] 
const her = ["name","ndm"] 
//hero.push(her)
 const kd = [...hero,...her] //spread operartor
console.log(kd);
const jd = [1,2,3,[3,9,[2,3]],[3,4,[3,2]]] 
const real = jd.flat(Infinity) ;
console.log(real) ;

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));

console.log(Array.from({name:"Hitesh"}));
let score1 = 100 ;
let score2 = 200 ;
let score3 = 300 ;
console.log(Array.of(score1,score2,score3));

const mySym = Symbol("key1") 
const object = {
    name : "akshat",
    email : "akshatbhatt2703@gmail.com",
    dob : "27-03-2004",
    [mySym] : "mykey",
    isLog : false ,
    age : 22
}

/*object.name = "sartha" 
Object.freeze(object) ;
object.name = "saa" 
console.log(object.name);
console.log(object["email"]);
console.log(object[mySym]);

object.greeting = function(){
    console.log('Hello object');
}
object.greetingTwo = function(){
    console.log(`Hello object,${this.name}`);
}
console.log(object.greeting()) ;
console.log(object.greetingTwo()) ;

//const tinderUser = new  Object() ;//singleton object

const tinderUser = {} ;//non singleton object

tinderUser.id = "123abc" 
tinderUser.name = "Sammy" 
tinderUser.isLogged = false 
//console.log(tinderUser);
/*
const regular = {
   email : "some@gmail.com",
   fullname : {
    user : {
       first : "as",
       last : "bha"
    }
   } 
}
//console.log(regular.fullname.user.first);


//const obj3 = {tinderUser,regular} ;
//const obj3 = Object.assign({},tinderUser,regular) //here it defines that all the objects goes into 1 object  so we prefer to use empty object as before it for better purpose 
const obj3 = {...r}
console.log(obj3);
console.log(obj3);

 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));

 console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 const course = {
    coursename : "js in hindi",
    price :"090",
    courseIns :"hite"
 }

 const {courseIns : ins} = course  ;
//console.log(courseIns);
console.log(ins);

function sayMy(){
    console.log("h");
    console.log("i");
    console.log("a");
    console.log("k");
    console.log("s");
}
sayMy();

function calculateCartPrice(...num1){
    return num1 
}
console.log(calculateCartPrice(200,300,100));   

console.log(addOne(5)); 
function addOne(num){
return num + 1 ;
}
console.log(addTwo(5)) ;
const addTwo =  function(num){
    return num + 2 ;
}
console.log(addTwo(5)) ;
            ^

//ReferenceError: Cannot access 'addTwo' before initialization   

const user = {
    username  : "akshat",
    price : 999 ,
    welcomeMessage : function(){
      console.log(`${this.username},welcome to website`);
       console.log(this);
    }
}
//user.welcomeMessage() ;

//user.username = "same" ;
//user.welcomeMessage() ;

//console.log(this);
//js previous as only method in browsser only jo engine h wo actual m paya jata h broser k andr ab us engine ko nikala node,dino,bun etc standalone hai but browser k andr jo global object h wo windows  object hai 
function chai(){
    console.log(this);
    // as it printing many things regarding this 
}
chai()

function chai(){
    let username = "hitesh" ;
    console.log(this.username);
}
chai() ;
// as it printing undefind for above as this can only  be used in objects not in functions 

const chai = () => {
    let username = "hitesh" ;
    console.log(this.username);
}
chai() ;
const chaii = function(){
    let username = "hitesh" ;
    console.log(this.username);
}

chaii() ;

   
const addTwo = (n1,n2) => {
    return n1 +n2 ;
}
    
const addTwo = (n1,n2) =>  n1+n2 ;

const addTwo = (n1,n2) => (n1+n2) ;
console.log(addTwo(4,3)) ;

//IIFE =this is basically jo func imm3eediately executed ho jaay
//THE MAIN DEF FOR IIFE = GLOBAL SCOPE KE POLLUTION SE PROBLEM HOTI HAI KAI BAAR,US GLOBAL SCOPE KE POPULATION KO HATANE KE LIE USE KIA HAI 

(function chai(){
    console.log(`DB CONNECTED`);
})() ;
((name) =>  {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')

Javascript Execution Context = 
Global EC ;
-Global EC 
-Function EC
-eval EC 
{} -> Memory Creation Phase only memory allocate 
 - Execution Phase 
-Global Ec = > this 
-memory phase memory allocate val1 - undefined ,val2 = undefined 

const month = 3 ;
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 3:
        console.log("mar");
       break;
//if break will comment out then all the cases output print except default ;
    default:
        console.log("m");
        break;
}
//falsy values
false,0,-0,BigInt 0n,"",null,undefined,NaN except this all are truthy 
//truthy values 
"0",'false'," ",[],{},function(){} 

const emptyObj = {} ;
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
    
//Nullish Coalescing Operator (??) : null undefined
 //for of 
 //["","",""]
 //[{},{},{}]
 const arr = [1,2,3,4,5] 
 for(const val of arr){
 // console.log(val);
 }
 const greeting = "hello world" 
 for(const greet of greeting){ 
   // console.log(`Each char is ${greet}`) ;
 }
 //map 
 
 const map = new Map() ;
 map.set('IN','India') ;
map.set('USA','United State of America') ;
for(const [key,value] of map){
 console.log(key,':-',value) ;
}
 
const myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman' 
}
for(const [key,value] of myObject){
    console.log(key,':-',value);
}
//not possible
const coding = ["js","ruby","java","cpp"] 
coding.forEach(function (val){
    console.log(val);
})
coding.forEach((val1)=>{
  console.log(val1);
})
  
 const coding = {
    {
        lang: "javascript",
        langFile : "java"
    },
    {
        lang: "javasc",
        langFile : "java"
    },
    {
        lang: "javascript",
        langFile : "java"
    },
 }

const myNum = [21,2,33,1,3] ;
//const ne = myNum.filter((num) => num>4) ;
//console.log(ne);
const ne = myNum.filter((num) => {
   return num > 4 ;
}) ;
console.log(ne);

const myNum = [1,2,3,5,6,7] 
// const newn = myNum.map((num)=>num+10) ;
const newNums = myNum.map((num)=> num*10).map((num)=>num+1).filter((num) => num >= 40) ;
console.log(newNums);

const arr = [1,2,3,4,5] ;

const nume = arr.reduce(function(acc,currval){
    return acc*currval
},4)

console.log(nume);

const shopping = [
    {
        itemName : "py",
        price : 1200
    },
    {
        itemName : "js",
        price : 12000
    },
    {
        itemName : "cp",
        price : 13424
    },
    {
        itemName : "sct",
        price : 452342
    }
] 
const priceto = shopping.reduce((acc,item)=>acc+item.price , 0)
console.log(priceto);
*/
