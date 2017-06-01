var arr = [10, 2, 5, 1, 9];

// function numerical(a, b){
//   return a - b; // if a > b -> return positive value -> a after b
//                 // if a < b -> return negative value -> a before b
// }

const numerical = (a, b) => a - b;

console.log(arr.sort(numerical));