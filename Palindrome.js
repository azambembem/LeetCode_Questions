const PalindromeNumber = function (x) {
    let sumA  = '';
    const splitA = x.toString().split('');
    
    splitA.reverse();
    splitA.map(function(a) {
        sumA += a;
    });

    if (parseInt(sumA) ===x) {
        return true;
    }else {
        return false;
    }
}

console.log(PalindromeNumber(121));

console.log(PalindromeNumber(-121));

console.log(PalindromeNumber(10));