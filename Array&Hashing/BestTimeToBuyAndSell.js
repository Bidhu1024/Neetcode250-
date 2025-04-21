var maxProfit = function (prices) {
  let currentCount = 0;
  let finalCount = 0;
  
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i-1]) {
      currentCount = prices[i] - prices[i-1];
     finalCount+=currentCount
    }
  }

  return finalCount;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
