var assert = require("chai").assert;
var test = require("./check-Luhn");

/*console.log(test.testLuhn(10000000));

console.log(test.testLuhn(79927398710))
console.log(test.testLuhn(79927398711))
console.log(test.testLuhn(4941151854614372))
console.log(test.testLuhn(4748189605577626))*/

describe("Check Luhn", function() {
  it("should return false if a number is a Luhn Algorithm", function() {
    var number = 79927398710;
    var result = test.testLuhn(number);
    assert.isFalse(result);
  });

  it("should return true if a number is a Luhn Algorithm", function() {
    var word = 4941151854614372;
    assert.isTrue(test.testLuhn(number));
  });
});
/*it("should return false if a number is a Luhn Algorithm", function() {
    var phrase = "a man a plan a canal panama";
    assert.isFalse(isPalindrome(phrase));
  });

  it("should return true if a number is a Luhn Algorithm", function() {
    var phrase = "this is not a palindrome"
    assert.isTrue(isPalindrome(phrase));
  });
});*/
