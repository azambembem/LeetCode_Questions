function canPlaceFlowers(flowerbed, n) {
  if (!flowerbed || flowerbed.length === 0) {
    return false;
  }

  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;

      count++;
    }

    if (count >= n) {
      return true;
    }
  }

  return false;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
