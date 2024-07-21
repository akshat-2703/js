//document.getElementById('owl').onclick = function(){
  //  alert('owl clicked')
//}
//document.getElementById('owl').addEventListener('click',function(){
 // alert("owl clicked again")
 //},false)

/*document.getElementById('images').addEventListener('click',function(e){
 console.log("clicked inside the ul") ;
},false)
document.getElementById('owl').addEventListener('click',function(e){
 console.log("owl click") ;
 e.stopPropagation()
},false)
document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault() ;
    e.stopPropagation() ;
    console.log("google clicked");
},false)

document.querySelector('#images').addEventListener('click',function(e){
   // console.log(e.target.parentNode);
    
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove() ;
    }
   
   //   removeIt.parentNode.removeChild(removeIt)

},false )
*/
//Javascript - Synchronous,single thread each operation waits for the last one compete
//blocing code vs non blocing code, Execution Context

//type,timestamp,defaultPrevented,target,toelemet,srcelement,currenttarget,clientx,clienty,screenx 
//attach event
/*
const sayHitesh = function() {
    console.log("akshat");
}
const changeText = function(){
   document.querySelector('h1').innerHTML = "best JS series"
}

const changeMe = setTimeout(changeText,2000)

//clearTimeout(changeMe) 
document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeMe)
    console.log("Stopped");
},false) 

 const sayDate = function(str){
    console.log(str,Date.now());
 }
const intervalId =  setInterval(sayDate,1000,"hi") 

clearInterval(intervalId)

let intervalId ;
document.querySelector('#start').addEventListener('click',function(){
   intervalId = setInterval(function(){
    console.log(Date()); 
   },1000);
   console.log(intervalId);
},false) 
document.querySelector('#stop').addEventListener('click',function(){
  clearInterval(intervalId);
},false) ;
*/