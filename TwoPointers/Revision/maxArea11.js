var maxArea = function (height) {
  let max = 0;

  let left = 0;
  let right = height.length - 1;

while(left < right){ //loop over the array

   let area = Math.min(height[left],height[right]) * right -  left;

   if(area > max){
    area = max
   }

   if(height[left]>height[right]){
    right--;
   }else{
    left++
   }


}
    return area
};
