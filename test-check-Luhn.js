var assert = require("chai").assert;
var should = require("chai").should();
var test = require("./check-Luhn");

describe("Check Luhn function", function() {
  it("should return false if a number is part of Luhn Algorithm", function() {
    var number = 79927398710;
    var result = test.testLuhn(number);
    assert.isFalse(result);
  });

  it("should return true if a number is part of Luhn Algorithm", function() {
    var number = 4941151854614372;
    assert.isTrue(test.testLuhn(number));
  });

it("should give a message if a value isn't a number", function() {
    var phrase = "a man a plan a canal panama";
    var result = test.testLuhn(phrase);
    assert.equal(result,"Not a number!");
  });

  it("should return true if a string number is part of Luhn Algorithm", function() {
    var stringnumber = "4748189605577626"
    assert.isTrue(test.testLuhn(stringnumber));
  });
});
