function f1 (callback){
    console.log("olá1");
    if (callback) callback();
    };

function f2 (callback){
console.log("olá2");
if (callback) callback();
};
function f3 (func){
console.log("olá3");
if(func)func();
};

f1( function(){
    f3(function(){
        f2();
    });
});



// f2();
// f3();