var rotate = function(nums, k) {
    k = k % nums.length; // ✅ correct modulo
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop()); // still works but O(k * n)
    }
};
