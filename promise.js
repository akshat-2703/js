const promise = new Promise(function(resolve,reject){
 //do an async task
 //db calls,cryptography,network
 setTimeout(function(){
    console.log('Async task is complete');
    resolve()
 },1000)
})

promise.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "chai",email :"chai@gmail.com"})
    },1000)
}).then(function(user){
   console.log(user);
})

const promise4 = new Promise(function(resolve,reject){
   setTimeout(function(){
     let error = true;
     if(!error){
        resolve({username:"hitesh",password:"123"})
     }
     else{
        reject('ERROR:Something went wrong')
     }
   },1000)
})
promise4
.then((user)=>{
    console.log(user);
    return  user.username
})
.then((username)=>{
 console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("promise is either resolved or rejected"))


const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
           resolve({username:"hitesh",password:"123"})
        }
        else{
           reject('ERROR:Something went wrong')
        }
      },1000)
});

async function consumePromise5(){
 try {
    const response =  await promise5
    console.log(response);
 }
 catch(error){
    console.log(error);
 }
}

consumePromise5()

 /*async function getAlluser(){
    try{
        const response =  await fetch('https://jsonplaceholder.typicode.com/users')
        
        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log("E :",error);
    }
}
getAlluser()*/
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))