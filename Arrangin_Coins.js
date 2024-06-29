var arrangeCoins = function (n) {
  let sum = 1;
  let row = 1;

  while (sum < n) {
    row++;
    sum += row;
  }

  if (sum === n) {
    return row;
  }

  return row - 1;
};
