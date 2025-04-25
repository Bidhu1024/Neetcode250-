var reverseString = function(s) {
if(reverseString.length === 0) return [];

let finalArr = []

for(let i = s.length -1 ; i>=0;i--){
    finalArr.push(s[i])
}

return finalArr
};

console.log(reverseString(["H","a","n","n","a","h"]))
 // two pointer approach
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Swap characters
        [s[left], s[right]] = [s[right], s[left]];

        // Move the pointers
        left++;
        right--;
    }
};