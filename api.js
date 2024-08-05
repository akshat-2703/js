//the fetch api provides an interface for fetching (sending/receiving) resources
//api basically request - response cycle
//api calls 
//fetch api provides an interface for fetching (sending/recieving) resources 


//it uses request and response objects ,fetch methods is used to fetch a resource(data).
const URL = "https://cat-fact.herokuapp.com" ;
let promise =  fetch(URL) ;
console.log(promise);
(async () =>{
    console.log("getting data");
    let response = await fetch(URL); 
    console.log(response.status);   
})() ;
