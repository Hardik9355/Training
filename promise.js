let result = new Promise(function(myresolve,myreject){
    let a = 10
    let b = 20
    if (a%b == 0){
        myresolve("solved")
    }
    else{
        myreject("unsolved")
    }

});


    