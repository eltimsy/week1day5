var wrapLog = function (callback, name) {
  return function(){
    var result = callback.apply(this, arguments);
    var args = []
    for(var i in arguments){
      args.push(arguments[i])
    }
    console.log(`${name}(${args.join(",")}) => ${result}`);
    return result;
  };
};

var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5
