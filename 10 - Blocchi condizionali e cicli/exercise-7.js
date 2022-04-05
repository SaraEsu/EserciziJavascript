function sumUntil(maxValue) {
  let sum=1;
  for(i=1;i<maxValue;i++){
    sum+=i+1;
  }
  return(sum);
}

console.log(sumUntil(5));