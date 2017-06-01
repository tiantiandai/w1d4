var words = ["ground", "control", "to", "major", "tom"];

var newWords = words.map(function(word) {
  return word.length;
});


function myMap(arr, fn){
  var newArr = [];

  for(var i = 0; i < arr.length; i++){
      newArr.push(fn(arr[i]));
  }
  return newArr;
}

function addLetter(item){
  return item + "aa";
}

var newWords = myMap(words, addLetter);

console.log(newWords);