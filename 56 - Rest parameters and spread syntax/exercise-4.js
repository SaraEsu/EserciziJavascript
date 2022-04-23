function sum(...num1) {
  return num1.reduce((value,current)=>value+current,0);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
/* console.log(sum(numbers[0], numbers[1], numbers[2])); */