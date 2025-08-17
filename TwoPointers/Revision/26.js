var removeDuplicates = function(nums) {
   //hashing doesn't works here

   let unique = 0
   for(let i = 0;i<nums.length;i++){
   if(nums[i] !== nums[i+1]){
    nums[unique] = nums[i]
    unique++
   }
   }
   return unique
};