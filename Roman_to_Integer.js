
var romanTo = function (s) {
    const Roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result  = 0;

    for (let i = 0; i < s.length ; i++) {
        const prev = Roman[s[i]]; 
        const next = Roman[s[i + 1]]; 

        if (prev < next ) {
            result += next - prev;
            i++;
        } else {
            result += prev;
     }
  }  
  return result;
}
console.log(romanTo('III')); // 출력 3
console.log(romanTo('LVIII')); // 출력 58
console.log(romanTo('MCMXCIV')); // 출력 1994  










