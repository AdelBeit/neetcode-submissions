class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // i have to find the max number on the right for every prices[i]. 
        // that's n^2. if i were to start from the last day i know that i cant sell it on the same day. so if i start at length-2 then i can only sell it on the last day. if i go a day before that i can either sell it at the day after or the last day and id wanna sell at the max price of those 2 days. if i keep track of the running maximum as i go i can always know the max sell price for every day as the starting day
        let n = prices.length;
        let highestPrice = prices[n-1];
        let maxProfit = 0;
        for(let i = n-2;i>=0;i--){
            maxProfit = Math.max(maxProfit,highestPrice - prices[i]);
            highestPrice = Math.max(prices[i],highestPrice);
        }
        return maxProfit;
    }
}
