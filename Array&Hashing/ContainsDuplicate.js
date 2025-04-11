function Duplicate(nums) {
  if (nums.length === 0) return false;

  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(Duplicate([1, 2, 3, 4, 1]));

//Time Complexity - 0(n2)

//Using hashing tech

function isDuplicate(nums) {
  const have = new Set();

  for (let num of nums) {
    if (have.has(num)) {
      return true;
    }
    have.add(num);
  }
  return false;
}

console.log(isDuplicate([1, 2, 3, 4, 1]));

//Time complexity - 0(n)
