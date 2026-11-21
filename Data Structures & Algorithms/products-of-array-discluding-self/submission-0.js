class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // get prefixes from left
        // prefixes from right
        // multiply the item on left and right of i and return result
        const left = [...nums];
        for(let i=1;i<nums.length;i++){
            left[i] *= left[i-1];
        }
        let rightProd = 1;
        for(let i = nums.length-1; i >=0; i--){
            rightProd *= 1;
            if(i+1 < nums.length) rightProd*= nums[i+1];
            if(i > 0) left[i] = left[i-1] * rightProd;
            else left[i] = rightProd;
        }
        return left;
    }
}
