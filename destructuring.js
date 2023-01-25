const a =[ "Hardik"  , "Jai" , "Saksham"]

// const [a,b] = a;
// console.log(aa,bb)

// console.log(b)
// console.log(rest) 
let c = ["Garg","Goyal","Jindal"]
const d = [...a,...c]

console.log(d)
n= a.length
for (const[i,value] of a.entries()){
    console.log(i,value)
    for (const[j,value] of c.entries()){
        console.log(i,value)
    }
}
// for (i in n){
//     for (j in i+1){
//         console.log(a[])

//     }
// }
// const e = (item,index) => {
// const a =["Hardik", "Saksham","Jai","Chitresh"]
// const [aa,bb,c,d] = a
// console.log(c,d,aa)
// const a =["Hardik"]
// const b = (num)=>{
    // return num+ " " +"Garg"
    
// }
// const d = a.map(b)
// console.log(d)   
// let [aa,bb]= a
// console.log(aa,bb)
// }
// var name= "1"
// name = "1"
// function readme(){
//     console.log(name)
// }
// readme()
// var  name