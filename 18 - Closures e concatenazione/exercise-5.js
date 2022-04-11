function memoize(fn) {
  let cache={};
return (num)=>{
  if(num in cache){
    return (`È già stato calcolato ${cache[num]} ed è stato già calcolato ${num}`);
    
  }
  else{
  cache[num]=fn(num);
  return (`${num} non è in cache, risultato: ${cache[num]}`);
  }
  
}
}

function fattoriale(x) {
  if (x === 0) {
    return 1;
  }

  return x * fattoriale(x - 1);
}

const factorial = memoize(fattoriale);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(5));

