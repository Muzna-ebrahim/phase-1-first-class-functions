function receivesAFunction (spy){
     spy();
}

function returnsANamedFunction(){
    function namedfunction (){
        console.log("fn");
    }
    return namedfunction;
    
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("fn")
    };
}