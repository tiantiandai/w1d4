var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(pythagorean);

function pythagorean(item, index, array){
  var x = item.x;
  var y = item.y;
  var result = Math.sqrt((x*x) + (y*y));

  return result;
}

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);