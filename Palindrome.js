

var isPal = function (x) {
    let start = x.toString();
    let end = start.split('').reverse().join('');
    return start === end;
}

console.log(isPal(121))

console.log(isPal(-121))

console.log(isPal(10))