class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // for any given number i can search the rest of the array for 2 sum that would add to the negative version of the curr number so id get zero. when i find a triplet i have to move from left to the next number different from it so it doesnt pickup the same numbers
        // when i move from right to left then the inner 2sum wouldnt encounter the same triplet, even if there are 2 different 2 sum numbers that would sum to the number on the left, the outer version is found first,
        // -4,1,2,3,2
        // -4,1,3
        // -4,2,2
        // that example proves i have to sort the input before operating on it to ensure that i can run T(n) when i do the 3sum algo to avoid duplicate outputs
        // basically if its not sorted i will either miss out on a pair, or i wont skip over pairs i have already seen.
        let anchor = 0;
        let n = nums.length;
        let res = [];
        nums = nums.sort((a, b) => a - b);
        while (anchor < n) {
            let left = anchor + 1;
            let right = n - 1;
            let target = parseInt(-1 * nums[anchor]);

            while (left < right) {
                let [leftN, rightN] = [nums[left], nums[right]];
                let currT = leftN + rightN;
                if (currT < target) {
                    while (left < right && nums[left] == leftN) left++;
                }
                if (currT > target) {
                    while (right > left && nums[right] == rightN) right--;
                }
                if (currT == target) {
                    res.push([nums[anchor], nums[left], nums[right]]);
                    left++;
                    while (left < right && nums[left] == leftN) left++;
                    right--;
                    while (right > left && nums[right] == rightN) right--;
                }
            }
            let currA = nums[anchor];
            while (anchor < n && currA == nums[anchor]) anchor++;
        }
        return res;
    }
}
