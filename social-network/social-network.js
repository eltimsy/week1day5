var _ = require("underscore")

var data =
  {f01: {name: "Alice",
         age: 15,
         follows: ['f02', 'f03', 'f04']},
   f02: {name: "Bob",
         age: 20,
         follows: ['f05', 'f06']},
   f03: {name: "Charlie",
         age: 35,
         follows: ['f01', 'f04', 'f06']},
   f04: {name: "Debbie",
         age: 40,
         follows: ['f01', 'f02', 'f03', 'f05', 'f06']},
   f05: {name: "Elizabeth",
         age: 45,
         follows: ['f04']},
   f06: {name: "Finn",
         age: 25,
         follows: ['f05']}}

var object = {};
function listNameFollowAndFollows(allData) {

  for(var key in allData) {
    object[key] = {name: allData[key].name,
                   following: [],
                   followers: []};
    for(var followsKey of allData[key].follows){
      object[key].following.push(allData[followsKey].name);
    }

    /*for(var key2 in allData) {
      if(allData[key2].follows.indexOf(key) !== -1) {
        object[key].followers.push(allData[key2].name)
      }
    }*/

  }

  for(var key in allData) {
    for(var pFollows of allData[key].follows) {
      object[pFollows].followers.push(allData[key].name);
    }
  }
  console.log(object);
}

// listNameFollowAndFollows(data)

function followsTheMostU() {
  return _.chain(data)
          .values()
          .sortBy(function(p){ return p.follows.length })
          .last()
          .get("name")
          .value();
}

function followsTheMost() {
  var mostFollows;
  var totals = {};
  var max = 0;
  var keyName = "";
  for(var key in object){
    totals[object[key].name] = object[key].following.length
  }
  for(var key in totals){
    if(totals[key] > max){
      max = totals[key];
      keyName = key;
    }
  }
  console.log(keyName);
}

console.log(followsTheMostU());

function mostFollowers() {

}
