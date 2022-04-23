/* function sum(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
} */
function sum(...num2) {
    return num2.reduce((previousValue, current)=>previousValue+current,0);
   
}

console.log(sum(1, 2, 3, 4, 5));