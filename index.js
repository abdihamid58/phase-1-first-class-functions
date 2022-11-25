function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function fn(){
        "Returns an anonymous function"
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        "Returns an anonymous function"
    }
}