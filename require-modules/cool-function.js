'use strict';


var crazyNum = [1,10,2000,5,30];
var someData = {
  crazyNum: [1,10,2000,5,30],
  name: "Tom",
  code: 123456,
  doSomething: crazyNum.forEach(biggerNum, " lala"),
  other: somethingElse
}

function biggerNum(value,num){
  console.log(value * num + this)
}

function somethingElse(x,y){
  return x+y
}
someData.doSomething
console.log(someData.other(1,2))
module.exports ={
  someData: someData
}
