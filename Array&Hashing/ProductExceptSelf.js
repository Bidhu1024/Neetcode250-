var productExceptSelf = function(nums) {
    const n = nums.length;
    const result = [];

    for (let i = 0; i < n; i++) {
        let product = 1;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                product *= nums[j];
            }
        }
        result.push(product);
    }

    return result;
};