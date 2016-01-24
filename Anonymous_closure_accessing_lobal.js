var global = 'I am the GLOBAL VARIABLE';
(function(){
  var scores = [89,94,79,64,79,85,90,69];

 var avg = function(){
    var total = scores.reduce(function(prev,curr){
    return prev+curr;
    });
    return 'Avg grade is '+total / scores.length;
  };
  
 var failing = function(){
   var failed = scores.filter(function(item){
   return item < 70;
   });
 return 'You have failed in '+failed.length + ' subjects';
 };
  global = 'This douchebag anonymous expression just changed me';
  console.log(avg());
  console.log(failing());
}());
console.log(global);


//"I am the GLOBAL VARIABLE"
//"Avg grade is 81.125"
//"You have failed in 2 subjects"
//"This douchebag anonymous expression just changed me"
