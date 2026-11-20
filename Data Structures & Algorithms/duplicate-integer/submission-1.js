class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // i can hold a hashset of the values and if it exists alerady then i can reutrn true. that is o1 time and on space.
        // if the array is sorted i can do a two pointer where i compare curr to next and if theyre equla i return true
        // if i sort it i get nlogn and then just n on top with no space complexity 
        nums.sort();
        for(let i = 0;i<nums.length-1;i++){
            if(nums[i] == nums[i+1]) return true;
        }
        return false;
    }
}
