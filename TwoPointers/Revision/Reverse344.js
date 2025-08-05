var reverseString = function(s) {
    const splittedText =  s.split("")
    return splittedText.reverse()
};

const res = reverseString("charlie")
console.log(res)

//Array elements swapping method

var reverseString = function(s) {
    if(s.length === 0) return

    let right = s.length-1;
    let left = 0

    while(left<right){
        [s[left],s[right]] = [s[right],s[left]]
        right--;
        left++;
    }
   
};