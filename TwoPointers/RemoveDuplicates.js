// var removeDuplicates = function(nums) {
//     let set = new Set(nums);
//     return [...set].length+1
// };

// var removeDuplicates = function (nums) {
//   //  let set = new Set(nums);
//   // return [...set].length
//   let unique = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       nums[unique] = nums[i];
//       unique++;
//     }
//   }
//   return nums;
// };

var removeDuplicates = function(nums) {
    //  let set = new Set(nums);
     // return [...set].length
  let unique = 0
     for(let i = 0;i<nums.length;i++){
      if(nums[i] !== nums[i+1]){
          nums[unique] = nums[i]
          unique++
      }
     }
     return unique
  };
const ans = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(ans);
