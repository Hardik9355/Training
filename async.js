// import fetch from 'node-fetch';

import fetch from "node-fetch";

try{
async function result(){
    console.log("execution start")
    const response  = await fetch("https://api.github.com/users/Hardik9355");
    const data = await response.json()
    console.log(data)
    console.log("execution end")
}
result()
}
catch{
    console.log("url not found")
}
function resolve (){
    return new Promise(result =>{
        setTimeout(() => {
            result('resolved');
            
        }, 5000);

    });
}