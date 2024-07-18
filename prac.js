//reverse a string
/*const str = "hello" ;
 function rev(str){
    return str.split('').reverse().join('') ;
}
console.log(rev(str)) ;
*/
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
