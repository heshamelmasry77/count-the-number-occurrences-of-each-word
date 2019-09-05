exports.countWordsInString = (someString) => {
  let arrayString = someString.split(' ');
  arrayString = arrayString.filter(value => Object.keys(value).length !== 0);
  var finalResultObject = {};

  var copy = arrayString.slice(0);

  for (var i = 0; i < arrayString.length; i++) {

    var myCount = 0;
    for (var w = 0; w < copy.length; w++) {
      if (arrayString[i] === copy[w]) {
        myCount++;
        delete copy[w];
      }
    }

    if (myCount > 0) {
      var a = {};
      a.value = arrayString[i];
      a.count = myCount;
      finalResultObject[a.value] = a.count;
    }
  }
  return finalResultObject;
};
