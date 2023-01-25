try{
async function result(){
    console.log("execution start")

    let a = await fetch("https://github.com/")
    debugger

    // let b =
    console.log(a)
    console.log("execution end")
}
result()
}
catch {
    console.log("not found")
}
function resolve (){
    return new Promise(result =>{
        setTimeout(() => {
            result('resolved');
            
        }, 5000);

    });
}