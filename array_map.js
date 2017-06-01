var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

const pythagorean = ({ x, y }) => Math.sqrt((x*x) + (y*y));

var result = input.map(pythagorean);

// function pythagorean({x, y}, index, array){
//   return Math.sqrt((x*x) + (y*y));
// }
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
