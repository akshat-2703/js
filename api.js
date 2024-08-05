//the fetch api provides an interface for fetching (sending/receiving) resources
//api basically request - response cycle
//api calls 
//fetch api provides an interface for fetching (sending/recieving) resources 


//it uses request and response objects ,fetch methods is used to fetch a resource(data).
/*
const URL = "https://cat-fact.herokuapp.com" ;
let promise =  fetch(URL) ;
console.log(promise);
(async () =>{
    console.log("getting data");
    let response = await fetch(URL); 
    console.log(response); //JSON frmt   
})() ;
//wo requests jiska  kaam hota sirf data lane ka kaam hoti that request get request  we say maximum time we have use get request as there is other format data that we have in the window we call api and after fetching api that api in different format 
//ajax =  asynchronous js and xml as before time data come in the format of xml
//now the data ja rha hoga wo json form m javascript object notation
//as json data aur json parse to deals more easy manner as compare to xml format as data return in json format that we say ajaj also asynchronous javascript and json
//network m koi request bj rhe and that getting response from their side that is ajax 
//API process work 1.FIrst we request to api and that response come in json format and now that 2. json format we convert into javascript object form  i.e.usable format wo convert krne k liee we use json method i.e asynchronous promise return krta h fetch first promise and second promise as json method 
//JSON() method returns a second promise that resolves with the result of parsing the response body text as json (input is json and output is js object) json method se hm actual data hm nikalte h object response k through

//as in response  we have come in which fetch api there in then response in json format that we hae to js object
//json as returns 

const URL = "https://cat-fact.herokuapp.com/facts" ; 
const factPara = document.querySelector('#fact') ;
(async () => {
    console.log("getting data....") ;
    let response = await fetch(URL) ;
    console.log(response.status) ;
    let data = await response.json() ;
    factPara.innerText =  data[0].text ;
})() ;
 


const URL = "https://cat-fact.herokuapp.com/facts" ; 
const factPara = document.querySelector('#fact') ;
const btn = document.querySelector('#btn')

const getFact =  async () => {
    console.log("getting data....") ;
    let response = await fetch(URL) ;
    console.log(response.status) ;
    let data = await response.json() ;
    factPara.innerText =  data[1].text ;
};

btn.addEventListener("click",getFact) ;

const URL = "https://cat-fact.herokuapp.com/facts" ; 
const factPara = document.querySelector('#fact') ;
const btn = document.querySelector('#btn')


function getFact() {
    fetch(URL)
    .then((response) => {
        return response.json() ;
    })
    .then((data) => {
        console.log(data);
        factPara.innerText =  data[2].text ;
    })
}
btn.addEventListener("click",getFact) ;
//requests and response we have some http verbs or some rules http verbs btati h hm kis type ki request bj rhe
1.Get = to retrieve data 
2.Post = to send data
3.delete = to delete 
4. patch = to update 
 
//RESPONSE STATUS CODE == 
200 = SUCCESSFUL Response
400 = client error jo api exist ni krti
404 = page bit found 
500 = server error response 
HTTP RESPONSE HEADERS also contain details about the responses,such as content type , http status code,etc.
*/