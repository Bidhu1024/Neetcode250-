var reverseString = function(s) {
if(reverseString.length === 0) return [];

let finalArr = []

for(let i = s.length -1 ; i>=0;i--){
    finalArr.push(s[i])
}

return finalArr
};

console.log(reverseString(["H","a","n","n","a","h"]))