let a =["Hardik"  , "Jai" , "Saksham"]

let [b, ...rest] = a
console.log(b)
console.log(rest) 
let c = ["Garg","Goyal","Jindal"]
const d = [...a,...c]
console.log(d)
