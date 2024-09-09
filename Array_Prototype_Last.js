Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

const nums1 = [null, {}, 3];
const nums2 = [];

console.log(nums1.last());
console.log(nums2.last());
