// The second argument/parameter is expected to be a function

function findWaldo(arr, found) {
  arr.forEach(function callback(item, index, arr) {
    if(item === "Waldo"){
      found(index);
    }
});
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);