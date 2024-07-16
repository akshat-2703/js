const hero = ["akshat","deepak"] 
const her = ["name","ndm"] 
//hero.push(her)
 /*const kd = [...hero,...her] //spread operartor
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
*/