let testString = 'a b a c aa aa aa    b';
exports.countWordsInString = (someString) => {
  let arrayString = [];
  arrayString = someString.split(' ');
  arrayString = arrayString.filter(value => Object.keys(value).length !== 0);
  var finalResultObject = {};

  // make a copy of the input array
  var copy = someString.slice(0);

  // first loop goes over every element
  for (var i = 0; i < someString.length; i++) {

    var myCount = 0;
    // loop over every element in the copy and see if it's the same
    for (var w = 0; w < copy.length; w++) {
      if (someString[i] === copy[w]) {
        // increase amount of times duplicate is found
        myCount++;
        // sets item to undefined
        delete copy[w];
      }
    }

    if (myCount > 0) {
      var a = {};
      a.value = someString[i];
      a.count = myCount;
      finalResultObject[a.value] = a.count;
    }
  }

  return finalResultObject;
};

var newArray = compressArray(testString);
console.log(newArray);
