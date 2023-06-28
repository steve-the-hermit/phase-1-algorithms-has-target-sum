function hasTargetSum(array, target) {
  const complements = new Set();

  for (let num of array) {
    const complement = target - num;

    if (complements.has(complement)) {
      return true;
    }

    complements.add(num);
  }

  return false;
}

// iterated the numberes above with some for of loop
console.log("Expecting: true");
console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([4], 4));

module.exports = hasTargetSum;
