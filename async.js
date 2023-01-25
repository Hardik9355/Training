// import fetch from 'node-fetch';

import fetch from "node-fetch";

try{
async function result(){
    // console.log("execution start")
    const response  = await fetch("https://bobbyhadz.com/blog/javascript-referenceerror-fetch-is-not-defined");
    const data = await response.json()
    console.log(data)
    console.log("execution end")
}
result()
}
catch{
    console.log("url not found")
}
// function resolve (){
//     return new Promise(result =>{
//         setTimeout(() => {
//             result('resolved');
            
//         }, 5000);

//     });
// }