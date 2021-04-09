const pi = Math.PI;

function fraction(numerator,denominator) {
  return numerator / denominator
}

function relDiff(a, b) {
 return  100 * Math.abs( ( a - b ) / ( (a+b)/2 ) );
}

console.log(pi);

for (let denom = 0; denom < 100; denom++) {

  for (let numer=0; numer<1000;numer++) {

    if (fraction(numer,denom) > (pi-0.0001) && fraction(numer,denom) < (pi+0.0001))

    {
console.log("numerator="+numer+" denominator="+denom+" value="+fraction(numer,denom)+" difference="+(relDiff(pi,fraction(numer,denom))+"%"))
    }
    
    };
  };