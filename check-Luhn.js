'use strict';
var newValues = [];

function numberList(number) {
  var newNum = number;
  var list = [];
  for(var i = newNum; i > 0; i = Math.floor(i/10)) {
    list.push(newNum % 10);
    newNum = Math.floor(newNum/10);
  }
  return list;
}

function editNum(num,index) {
  if (index % 2 === 0) {
    var newNum = num * 2;

    if (newNum > 9) {
      newNum -= 9;
    };
  }else{
    var newNum = num;
  }
  newValues.push(newNum);
}

function checkLuhn(number) {
  if(isNaN(Number(number))){
    return "Not a number!";
  }
  newValues = [];
  var lastNum = Number(number.toString().slice(-1));
  var numMinusLast = Math.floor(Number(number) / 10);
  var total = 0
  var numList = numberList(numMinusLast);

  numList.forEach(editNum);

  newValues.forEach(function(num) {
    total += num;
  });

  total += lastNum
  //console.log(newValues);
  //console.log(total);

  if(total % 10 === 0) {
    return true;
  } else {
    return false;
  };


}

module.exports = {
  testLuhn: checkLuhn
}
