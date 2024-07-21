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
*/ 
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

//type,timestamp,defaultPrevented,target,toelemet,srcelement,currenttarget,clientx,clienty,screenx 
//attach event